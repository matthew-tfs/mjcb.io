---
title: "AD CS on Windows Server 2022"
slug: "adcs-on-windows-server-2022"
date: "2023-10-25T07:49:00"
author: "Matthew Burr"
summary: "Now available for download, the AD CS on Windows Server 2022 guide for creating a Two-Tier Certificate Authority using Active Directory Certificate Services and Windows Server 2022. This guide offers a rapid deployment of a Two-Tier Certificate Authority using Windows Server."
tags: [
    "ADCS",
    "Free",
    "Guides",
    "Windows Server"
]
categories: [ "Publications" ]
thumbnail: "/images/publications/adcs-on-windows-server-2022/adcs-on-windows-server-2022-thumbnail.png"
featureImage: "/images/publications/adcs-on-windows-server-2022/adcs-on-windows-server-2022-featured.png"
featured: true
---

Now available for download, the **AD CS on Windows Server 2022** guide for creating a Two-Tier Certificate Authority using Active Directory Certificate Services and Windows Server 2022.

Just like the [Building a Certificate Authority in Windows Server 2019](/publications/building-a-certificate-authority-in-windows-server-2019/) guide that I released previously, this guide is also available for free.

**This is a free download, and is available on Gumroad for distribution (enter $0 when checking out).**

<div style="text-align:center; padding-top: 0px; padding-bottom: 25px;">
    <a href="https://store.mjcb.io/l/adcs-on-windows-server-2022/" style="color: #ffffff; cursor: pointer;" class="button mt-1" role="button" title="Download on Gumroad">Download on Gumroad</a>
</div>

This guide is the successor to the [Building a Certificate Authority in Windows Server 2019](/publications/building-a-certificate-authority-in-windows-server-2019/) guide that I released in early 2022. It is also based on the multi-part [AD CS on Windows Server 2022](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2022/) guide that I released in the summer of 2023.

This guide is updated with additional information on how to deploy a Certificate Authority, and updated for Windows Server 2022. Just like the original guide, it does not add any additional functionality such as automatic deployment using Group Policy or configuring the Online Responder role, but those can be added in the future if needed.

## What's Inside? ##

* A 44 page guide for implementing a Two-Tier Certificate Authority using Windows Server 2022 and Active Directory Certificate Services.
* A guide for installing and configuring Active Directory Domain Services.
* A guide for creating an offline Standalone/Root CA.
* A guide for creating an online Enterprise/Subordinate CA.
* Instructions that use the CLI for installation and configuration whenever possible.

## Table of Contents ##

Included in the guide are 6 sections which explain the process for creating a Two-Tier Certificate Authority using Active Directory Certificate Services and Windows Server 2022:

1. Certificate Authority Test Environment
2. Active Directory Setup
3. Root CA Setup
4. Subordinate CA Setup
5. AD CS Post-Implementation Tasks
6. AD CS Next Steps

## Who Is This Guide For? ##

The purpose of this guide is to create a Certificate Authority using Active Directory Certificate Services (AD CS) with Windows Server 2022. This guide offers a rapid step-by-step guide that demonstrates how to successfully create a Certificate Authority using those technologies.

This guide is meant for developers, network administrators and systems administrators who have a basic understanding of Windows Server and Public Key Infrastructures and need to deploy a Certificate Authority rapidly within their environment for various purposes. By using the steps provided in this guide, there will be a Certificate Authority framework created that can be customized for whatever requirements are needed in any environment.

This guide is also meant to be used by developers, network administrators and system administrators who can interpret this guide and modify it for their existing environment. Simply following this guide will not implement a functioning PKI for your organization, you will need to modify the steps accordingly to make it function properly. This means creating different servers, modifying steps for different Active Directory domains, modifying LDAP settings, modifying file paths, creating different certificates, and other critical steps as needed.

## Updates and Additional Materials ##

### July 15, 2024 Update ###

* Minor fixes to the template and metadata for the guide. The content of the guide was not changed.

### Additional Materials ###

There are several resources for expanding upon the functionality of this guide:

* [AD CS on Windows Server 2019](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2019/) guide on [docs.mjcb.io](https://docs.mjcb.io/).
* [AD CS on Windows Server 2022](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2022/) guide on [docs.mjcb.io](https://docs.mjcb.io/).

## Links ##

* [AD CS on Windows Server 2022 (Gumroad)](https://store.mjcb.io/l/adcs-on-windows-server-2022/)
