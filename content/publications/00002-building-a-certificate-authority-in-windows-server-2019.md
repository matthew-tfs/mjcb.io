---
title: "Building a Certificate Authority in Windows Server 2019"
slug: "building-a-certificate-authority-in-windows-server-2019"
date: "2022-04-05T06:47:00-05:00"
author: "Matthew Burr"
summary: "Now available for download, a version of the Building a Certificate Authority in Windows Server 2019 guide that I published in early 2020. This guide offers a rapid deployment of a Two-Tier Certificate Authority using Windows Server without advanced features."
tags: [
    "ADCS",
    "Guides",
    "Windows Server"
]
categories: [ "Publications" ]
thumbnail: "/images/publications/building-a-certificate-authority-in-windows-server-2019/building-a-certificate-authority-in-windows-server-2019-thumbnail.png"
featureImage: "/images/publications/building-a-certificate-authority-in-windows-server-2019/building-a-certificate-authority-in-windows-server-2019-featured.png"
---

Now available for download, the **Building a Certificate Authority in Windows Server 2019** guide for creating a Two-Tier Certificate Authority using Active Directory Certificate Services.

**This is a free download, and is available on Gumroad for distribution (enter $0 when checking out).**

<div style="text-align:center; padding-top: 0px; padding-bottom: 25px;">
    <a href="https://mjcb.gumroad.com/l/building-a-ca-in-windows-server-2019" style="color: #ffffff; cursor: pointer;" class="button mt-1" role="button" title="Download on Gumroad">Download on Gumroad</a>
</div>

This guide is based on the [Building a Certificate Authority in Windows Server 2019](/blog/2020/03/09/certificate-authority-windows-server-2019/) guide series that I released in early 2020, as well as the [Practical Guide to PKI with Windows Server](/publications/practical-guide-to-pki-with-windows-server/) book that I published in the fall of 2021.

This guide is a slight modification of the last chapter from the [Practical Guide to PKI with Windows Server](/publications/practical-guide-to-pki-with-windows-server/) book, which demonstrates how to rapidly deploy a PKI using Active Directory Certificate Services. It does not add any additional functionality such as automatic deployment using Group Policy or configuring the Online Responder role, but those can be added in the future if needed.

## What's Inside? ##

* A 38 page guide for implementing a Two-Tier Certificate Authority using Windows Server 2019 and Active Directory Certificate Services.
* A guide for installing and configuring Active Directory Domain Services.
* A guide for creating an offline Standalone/Root CA.
* A guide for creating an online Enterprise/Subordinate CA.
* Instructions that use the CLI for installation and configuration whenever possible.

## Table of Contents ##

Included in the guide are 7 sections which explain the process for creating a Two-Tier Certificate Authority using Active Directory Certificate Services and Windows Server 2019:

1. Building a Certificate Authority in Windows Server 2019
2. Certificate Authority Environment Setup
3. Active Directory Setup
4. Root CA Setup
5. Subordinate CA Setup
6. Post-Implementation Tasks
7. Active Directory Certificate Services Next Steps

## Who Is This Guide For? ##

The purpose of this guide is to create a Certificate Authority using Active Directory Certificate Services (AD CS) with Windows Server 2019. This guide offers a rapid step-by-step guide that demonstrates how to successfully create a Certificate Authority using those technologies.

This guide is meant for developers, network administrators and systems administrators who have a basic understanding of Windows Server and Public Key Infrastructures and need to deploy a Certificate Authority rapidly within their environment for various purposes. By using the steps provided in this guide, there will be a Certificate Authority framework created that can be customized for whatever requirements are needed in any environment.

This guide is also meant to be used by developers, network administrators and system administrators who can interpret this guide and modify it for their existing environment. Simply following this guide will not implement a functioning PKI for your organization, you will need to modify the steps accordingly to make it function properly. This means creating different servers, modifying steps for different Active Directory domains, modifying LDAP settings, modifying file paths, creating different certificates, and other critical steps as needed.

## Updates and Additional Materials ##

If there are any updates for the guide or additional materials, they will be posted to this page.

## Links ##

* **Gumroad**: [https://mjcb.gumroad.com/l/building-a-ca-in-windows-server-2019](https://mjcb.gumroad.com/l/building-a-ca-in-windows-server-2019)
