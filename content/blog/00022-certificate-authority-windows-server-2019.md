---
title: "Building a Certificate Authority in Windows Server 2019"
slug: "certificate-authority-windows-server-2019"
aliases: [
    "/blog/2020/03/09/certificate-authority-windows-server-2019/",
    "/2020/03/09/certificate-authority-windows-server-2019/"
]
date: "2020-03-09T19:01:00-05:00"
author: "Matthew Burr"
summary: "This is the start of an 8-part series on building a Certificate Authority using Active Directory Certificate Services in Windows Server 2019. The process is quite involved, but with this guide and planning on your part, you should be able to build this important infrastructure component with ease."
tags: [
    "ADCS",
    "Guides",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00022/adcs.png"
featured: true
draft: false
---

<style type="text/css">
.pki-header {
    background-image: url("/images/blog/00022/pki-background.jpg");
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    color: #ffffff;
}
</style>

<div class="pki-header">
<strong>Practical Guide to PKI with Windows Server</strong>

Now available for purchase, a complete book version of this guide. Includes an expanded version of this guide which includes over 300 screenshots, CLI configuration commands, quick start guide, additional details and more.

<div style="text-align:center; padding-top: 0px; padding-bottom: 25px;">
    <a href="/publications/practical-guide-to-pki-with-windows-server/" style="color: #ffffff; cursor: pointer;" class="button mt-1" role="button" title="Learn More">Learn More</a>
</div>
</div>

**Note:** This guide is archived and is no longer updated on this website. For any future updates to this guide, please refer to the [version](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2019/) that can be found on [docs.mjcb.io](https://docs.mjcb.io/).

{{< toc >}}

## Goals of this Guide ##

The goal of this guide is to deploy an internal Certificate Authority and a Public Key Infrastructure (PKI) using **Active Directory Certificate Services** in Windows Server 2019. This provides a lot of benefits to an organization, including features like:

* Utilizing SSL on internal Servers and on internal Websites.
* Replacing self-signed Certificates on internal Network Devices.
* Increased security for Remote Desktop Services on internal Servers.
* Utilize internal Certificates for Applications and Services.
* Issue internal Certificates for VPN Services.
* Issue internal Certificates for Wireless Users and Access Points.
* Allow for better security with Active Directory with LDAPS.
* Use your own internal Certificate for SSL Decryption on Firewalls and Proxy Devices.

The procedure for creating a Certificate Authority has not changed considerably since Windows Server 2012 R2. Recent enhancements and changes with some vendors (Apple and Mozilla) do require a few minor changes to allow for security changes with those vendors.

I apologize for the length of this document but creating a Certificate Authority is a very complicated process. I tried to document every single step that I could, as missing even the smallest detail can cause a lot of issues that are very difficult to correct.

## Guide ##

Since this is such a complicated subject there are multiple parts to this guide. Here are the links to each part of the guide:

* [Part 1 - Offline Root CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-1)
* [Part 2 - Subordinate CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-2)
* [Part 3 - Deploy Root and Subordinate Certificate](/blog/2020/03/09/certificate-authority-windows-server-2019-part-3)
* [Part 4 - Certificate Revocation Policies](/blog/2020/03/09/certificate-authority-windows-server-2019-part-4)
* [Part 5 - Configure Private Key Archive and Recovery](/blog/2020/03/09/certificate-authority-windows-server-2019-part-5)
* [Part 6 - Certificate Template Deployment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-6)
* [Part 7 - Certificate Auto-Enrollment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-7)
* [Part 8 - Final Steps](/blog/2020/03/09/certificate-authority-windows-server-2019-part-8)

## Environment Assumptions ##

All Servers in this guide are using **Windows Server 2019 Standard (Desktop Experience)**, but this should work correctly using Windows Server 2016. In this guide, the Active Directory Domain and Forest Functional Levels are set to Windows Server 2016 levels, but this should work for Windows Server 2012 R2 functional levels.

This guide should work perfectly fine using Hyper-V, VirtualBox or VMware. This guide does not assume any Virtualization platform so there should not be any issues using any Virtualization platform.

For this guide I am using VMware Workstation 15 Pro (15.5.1 build-15018445) on Windows 10 Pro 1909 (Build 18363.657). I am using a Lenovo P51 Mobile Workstation (Intel Core i7-7820HQ @ 2.90GHz and 64 GB RAM).

## Environment Design and Overview ##

This guide uses a simplified and very basic Server Infrastructure and is the bare minimum that is required for Active Directory Certificate Services to operate correctly. It is technically possible to run Active Directory Certificate Services on the same Server as a Domain Controller, but this is very bad practice and can have some unintended consequences if there is ever an issue with it. It is also incredibly insecure to have your Root Certificate Server available at all times.

The example that is going to be used in this guide is the **TFS Labs** Domain (**corp.tfslabs.com**). It is very basic in design, and there is a total of 3 Servers, 1 Workstation and 1 iOS Device:

![TFS Labs Certificate Authority Infrastructure Overview](/images/blog/00022/ca-infrastructure-overview.png)

The Virtual Machines that are being used in this guide are using the following specifications:

| Virtual Machine | Operating System     | CPU | Memory  | Hard Disk | IP Address       |
|:----------------|:---------------------|:----|:--------|:----------|:-----------------|
| TFS-DC01        | Windows Server 2019  | 1   | 4096 MB | 60 GB     | 192.168.0.210/24 |
| TFS-CA01        | Windows Server 2019  | 2   | 8192 MB | 60 GB     | 192.168.0.211/24 |
| TFS-WIN10       | Windows 10 Pro       | 1   | 4096 MB | 60 GB     | 192.168.0.212/24 |
| TFS-ROOT-CA     | Windows Server 2019  | 1   | 4096 MB | 60 GB     | N/A              |

The iOS device used in this environment is an iPad Air 3 and is running the latest version of iPad OS (13.3.1 as of the time of this writing). It is on wireless on the same network and has an IP address of 192.168.0.213/24.

Here is breakdown of the Servers and Workstations in this environment:

* **TFS-DC01** the Domain Controller for the **TFS Labs** Domain. It is also needed to allow for Certificate distribution and for Group Policy updates to the **TFS Labs** Domain. It is also the LDAP CDP and AIA Publishing Location. **This guide assumes that you already know how to setup a basic Active Directory Domain Controller and Domain and have done this already prior to starting this guide**.
* **TFS-ROOT-CA** is the Offline Root Certificate Authority and it is only used to issue the Root Certificate for the **TFS Labs** Domain. It signs the Certificate for the Subordinate Certificate Authority only and is left offline unless there is an issue with the Subordinate Certificate Authority. It is not a member of the **TFS Labs** Domain and has no additional software or services installed on it. Once the implementation of the Certificate Authority is complete it can be shutdown (but not deleted).
* **TFS-CA01** is the Subordinate Certificate Authority and issues all Certificates within the **TFS Labs** Domain. It also handles the OCSP Role and CRL roles. It is a **TFS Labs** Domain member.
* **TFS-WIN10** is a Workstation that is a member of the **TFS Labs** Domain, and it is used to ensure Certificates that are issued by the two Certificate Authorities are operating correctly. It is also used to ensure that Group Policy deployment of these certificates are working correctly. **This guide assumes that you can configure a Windows 10 Pro Virtual Machine prior to starting this guide.**

## Certificate Hierarchy Overview ##

For the Certificates that will be issued for the **TFS Labs** Domain, there will be one Root and one Subordinate Certificate in a **Two-Tier Certificate Authority**:

![TFS Labs Certificate Authority Hierarchy](/images/blog/00022/ca-certificates-structure.png)

| Certificate Type | Certificate Name               | Server Name | Validity Period |
|:-----------------|:-------------------------------|:------------|:----------------|
| Root CA          | TFS Labs Certificate Authority | TFS-ROOT-CA | 10 Years        |
| Subordinate CA   | TFS Labs Enterprise CA         | TFS-CA01    | 5 Years         |
| Certificate      | N/A                            | TFS-CA01    | 1 Years         |

The Validity Period for the Certificates in the **TFS Labs** Domain is set to the following:

* The Standalone Root CA Certificate is set to expire after 10 years. This Certificate is the Root of the entire PKI at **TFS Labs**. 10 Years for the Validity Period is perfectly acceptable for a Root CA, and that Server will need to be brought online once every 52 weeks in order to update the CRL for the Subordinate CA.
* The Enterprise Subordinate CA Certificate is set to expire after 5 years. This Certificate is used to Sign all Certificates that are issued to the **TFS Labs** Domain. Unlike the Root CA, it is always online.
* Any Certificates that are issued from the Enterprise CA is limited to 1 year only. A lot of vendors, the most recent being Apple have specifically restricted SSL lifetimes to 1 year only. This forces Vendors to keep their SSL Certificates up to date, and to make sure that modern security practices and technologies are being used.

## Design Considerations ##

In the deployment of Active Directory Certificate Services on the **TFS Labs** Domain, the following design considerations will be made:

* The use of SHA-1 will not be used since it has been deprecated by online Certificate Authorities and by virtually every vendor. The Certificate Authority created at **TFS Labs** will use SHA-2 (SHA256) by default.
* Utilize an Offline Root CA for the main Certificate.
* Utilize a Subordinate Enterprise CA for issuing Certificates to the **TFS Labs** Domain. This will always be online and will be used to issue all Certificates.
* The Root Certificate will be valid for 10 Years and the Subordinate Certificate will be valid for 5 Years. All issued Certificates from the Subordinate CA will be valid for 1 Year only.
* The Offline Root CA is only online for creating the Enterprise CA and is then shutdown and can isolated from the network in order to keep it safe.
* Any files that need to be transferred to and from the Root CA is to be done with a Virtual Floppy Disk. This will be deleted at the end of the implementation phase and when needed in the future a new one should be created.
* Auditing will be enabled on all Servers that are performing Certificate related tasks. This will write events to the Windows Event Log every time a Certificate is Issued, Revoked, Requested, etc.
* CNAME records will be used when possible in the deployment to allow for the **TFS-CA01** Server to be split up in the future if needed.

## Why Use an Offline CA? ##

There are a lot of very good reasons to use an Offline Root CA in your environment and it is pretty much expected in a Certificate Authority that is created today. Unauthorized access to your Certificate Authority can put your organization at risk and can cause a lot of headaches in order to fix it, especially if you depend heavily on a PKI for critical functions in your environment.

The Root CA is critical to your PKI and you don’t want to risk having the Root CA compromised and having your Private Keys leaked. This would effectively invalidate every single Certificate in your organization.

The best way to protect the Root CA is always to have it be completely unavailable to people on the network. It isn’t needed in day to day operations, so having it online is not necessary and can put it at unnecessary risk. This also means that it is not enough to just have it turned off until needed, it shouldn’t be accessible by anyone even when it is temporarily powered on. A lot of administrators don’t even have a network connection to it and use Virtual Floppy Disks to transfer data between it and other Servers. It is cumbersome, but this happens so infrequently that it shouldn’t be an issue. Some Virtualization platforms allow for Copy/Paste, but that should be disabled for the Root CA in order to minimize the attack surface on it.

## Registered IANA Number ##

When you are dealing with an Internal CA you don’t really need to worry about utilizing a properly registered IANA Number. This is only ever required if you are going to be using your Certificate Authority outside of your organization. This is beyond the scope of this guide.

## Active Directory Certificate Services Internal URLs ##

The following URLs will be in use once the Active Directory Certificate Services implementation has been completed.

| Server (CNAME)  | Role                                       | Address                                    |
|:----------------|:-------------------------------------------|:-------------------------------------------|
| TFS-CA01 (N/A)  | IIS 10.0 HTTP Server Instance              | http​://tfs-ca01.corp.tfslabs.com/          |
| TFS-CA01 (N/A)  | Active Directory Web Enrollment Service    | https​://tfs-ca01.corp.tfslabs.com/CertSrv/ |
| TFS-CA01 (PKI)  | Certificate Practice Statement             | http​://pki.corp.tfslabs.com/cps.html       |
| TFS-CA01 (PKI)  | Root CA CRL                                | http​://pki.corp.tfslabs.com/CertData/      |
| TFS-CA01 (PKI)  | Enterprise CA CRL                          | http​://pki.corp.tfslabs.com/CertEnroll/    |
| TFS-CA01 (OCSP) | Online Certificate Status Protocol         | http​://ocsp.corp.tfslabs.com/ocsp/         |
| TFS-CA01 (PKI)  | Root and Subordinate Certificates Download | http​://pki.corp.tfslabs.com/Certificates/  |

### SSL Enabled Services ###

SSL is not used for securing many of the Web Sites that a Certificate Server uses. The one exception is the Active Directory Web Enrollment Service, since it is used to securely submit a Certificate Request. This is because you cannot always assume that the device connecting to the HTTPS service has your Certificates on it, and therefore the connection would not be secure anyways.

## Disclaimer ##

I cannot guarantee that this guide will work in your environment and I cannot take responsibility if this guide causes any potential issues in your environment. If you or anyone else has attempted to create a Certificate Authority in the past you should check your Active Directory setup to see if you have any failed Certificate Authorities in there already. You should remove these first before starting this guide.

I cannot guarantee that there are no errors in this guide as well. I have implemented this exact same setup at multiple organizations without any major issues, but odd issues can always arise in a Windows Server Infrastructure. So be prepared to have to “Google” your way out a few error messages in this guide.

As with everything else, you should build this out in a lab at least once prior to attempting this on a production environment. You should not attempt to implement this guide for your organization if you don’t have a good understanding of how a Certificate Authority and PKI works.

## Certificate Authority in Windows Server 2019 ##

* [Introduction](/blog/2020/03/09/certificate-authority-windows-server-2019)
* [Part 1 - Offline Root CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-1)
* [Part 2 - Subordinate CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-2)
* [Part 3 - Deploy Root and Subordinate Certificate](/blog/2020/03/09/certificate-authority-windows-server-2019-part-3)
* [Part 4 - Certificate Revocation Policies](/blog/2020/03/09/certificate-authority-windows-server-2019-part-4)
* [Part 5 - Configure Private Key Archive and Recovery](/blog/2020/03/09/certificate-authority-windows-server-2019-part-5)
* [Part 6 - Certificate Template Deployment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-6)
* [Part 7 - Certificate Auto-Enrollment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-7)
* [Part 8 - Final Steps](/blog/2020/03/09/certificate-authority-windows-server-2019-part-8)
