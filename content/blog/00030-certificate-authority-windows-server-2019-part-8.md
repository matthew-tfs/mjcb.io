---
title: "Building a Certificate Authority in Windows Server 2019 Part 8 - Final Steps"
slug: "certificate-authority-windows-server-2019-part-8"
date: "2020-03-09T19:09:00"
author: "Matthew Burr"
summary: "The conclusion to this 8-part series on creating a Certificate Authority in Windows Server 2019 using Active Directory Certificate Services."
tags: [
    "ADCS",
    "Guides",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00030/adcs.png"
draft: false
---

<style type="text/css">
.pki-header {
    background-image: url("/images/blog/00030/pki-background.jpg");
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    color: #ffffff;
}
</style>

<div class="pki-header">
<strong>Practical Guide to PKI with Windows Server - First Edition</strong>

Now available for purchase, a complete book version of this guide. Includes an expanded version of this guide which includes over 300 screenshots, CLI configuration commands, quick start guide, additional details and more.

<div style="text-align:center; padding-top: 0px; padding-bottom: 25px;">
    <a href="/publications/practical-guide-to-pki-with-windows-server-first-edition/" style="color: #ffffff; cursor: pointer;" class="button mt-1" role="button" title="Learn More">Learn More</a>
</div>
</div>

**Note:** This guide is archived and is no longer updated on this website. For any future updates to this guide, please refer to the [version](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2019/adcs-windows-server-2019-part-8/) that can be found on [docs.mjcb.io](https://docs.mjcb.io/).

{{< toc >}}

## 8.1 Implementation File Cleanup ##

Once the Certificate Authority Implementation has been successfully implemented and completed there are a few files that should be deleted.

### 8.1.1 TFS-CA01 Server ##

Delete the following files on the **TFS-CA01** Server:

* C:\TFS-CA01.corp.tfslabs.com_corp-TFS-CA01-CA.req
* C:\TFS Labs Certificate Authority.cer
* C:\TFS Labs Enterprise CA.cer
* C:\TFS Labs Enterprise CA.p7b

These files should all be present on the **C:\RootCA** folder on the **TFS-ROOT-CA** Server. Those files don't need to be deleted.

### 8.1.2 Virtual Floppy Disk ##

Depending on your virtualization platform, the location of the **RootCAFiles** virtual floppy disk will vary. This file also needs to be deleted. Ensure that if you setup BitLocker on the **TFS-ROOT-CA** Server that you backup up the recovery key.

## 8.2 Recurring Tasks ##

The only major task that you should need to perform on your PKI Infrastructure is that you will need to renew the CRL from the Root CA at least once a year. It is best that once the implementation is completed that you setup a yearly recurring task in order to make sure this task is not forgotten.

## 8.3 Root CA Shutdown ##

Once the Certificate Authority has been successfully implemented, the Root CA needs to be powered off as it is no longer needed. The **TFS-ROOT-CA** virtual machine will need to be powered on at least once every 52 weeks in order to update the CRL.

Ensure that you do not delete this virtual machine. If you do it will break your entire PKI and there will be no way of recovering from this.

## Certificate Authority in Windows Server 2019 ##

* [Introduction](/blog/2020/03/09/certificate-authority-windows-server-2019)
* [Part 1 - Offline Root CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-1)
* [Part 2 - Subordinate CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-2)
* [Part 3 - Deploy Root and Subordinate Certificate](/blog/2020/03/09/certificate-authority-windows-server-2019-part-3)
* [Part 4 - Certificate Revocation Policies](/blog/2020/03/09/certificate-authority-windows-server-2019-part-4)
* [Part 5 - Configure Private Key Archive and Recovery](/blog/2020/03/09/certificate-authority-windows-server-2019-part-5)
* [Part 6 - Certificate Template Deployment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-6)
* [Part 7 - Certificate Auto-Enrollment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-7)
* Part 8 - Final Steps
