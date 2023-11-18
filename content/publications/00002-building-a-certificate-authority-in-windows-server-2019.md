---
title: "Building a Certificate Authority in Windows Server 2019"
slug: "building-a-certificate-authority-in-windows-server-2019"
date: "2022-04-05T06:47:00-05:00"
author: "Matthew Burr"
summary: "Now available for download, a version of the Building a Certificate Authority in Windows Server 2019 guide that I published in early 2020. This guide offers a rapid deployment of a Two-Tier Certificate Authority using Windows Server without advanced features."
tags: [
    "ADCS",
    "Free",
    "Guides",
    "Windows Server"
]
categories: [ "Publications" ]
thumbnail: "/images/publications/building-a-certificate-authority-in-windows-server-2019/building-a-certificate-authority-in-windows-server-2019-thumbnail.png"
featureImage: "/images/publications/building-a-certificate-authority-in-windows-server-2019/building-a-certificate-authority-in-windows-server-2019-featured.png"
---

<style type="text/css">
.adcs-header {
    background-image: url("/images/publications/building-a-certificate-authority-in-windows-server-2019/adcs-background.jpg");
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    color: #ffffff;
}
</style>

<div class="adcs-header">
<strong>AD CS on Windows Server 2022</strong>

Now available for download, a new version of this guide that has been updated for Windows Server 2022.

<div style="text-align:center; padding-top: 0px; padding-bottom: 25px;">
    <a href="/publications/adcs-on-windows-server-2022/" style="color: #ffffff; cursor: pointer;" class="button mt-1" role="button" title="Learn More">Learn More</a>
</div>
</div>

Now available for download, the **Building a Certificate Authority in Windows Server 2019** guide for creating a Two-Tier Certificate Authority using Active Directory Certificate Services.

**This is a free download, and is available on Gumroad for distribution (enter $0 when checking out).**

<div style="text-align:center; padding-top: 0px; padding-bottom: 25px;">
    <a href="https://mjcb.gumroad.com/l/building-a-ca-in-windows-server-2019/" style="color: #ffffff; cursor: pointer;" class="button mt-1" role="button" title="Download on Gumroad">Download on Gumroad</a>
</div>

This guide is based on the [Building a Certificate Authority in Windows Server 2019](/blog/2020/03/09/certificate-authority-windows-server-2019/) guide series that I released in early 2020, as well as the [Practical Guide to PKI with Windows Server - First Edition](/publications/practical-guide-to-pki-with-windows-server-first-edition/) book that I published in the fall of 2021.

This guide is a slight modification of the last chapter from the book, which demonstrates how to rapidly deploy a PKI using Active Directory Certificate Services. It does not add any additional functionality such as automatic deployment using Group Policy or configuring the Online Responder role, but those can be added in the future if needed.

## What's Inside? ##

* A 42 page guide for implementing a Two-Tier Certificate Authority using Windows Server 2019 and Active Directory Certificate Services.
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

### November 1, 2023 Update ###

I have released an updated version of this guide, here are the changes in this version:

* Added a proper Introduction section to the guide, which is used to explain how the guide is organized. It also establishes requirements for testing the steps in the guide.
* Added additional details to the Active Directory Domain Services setup and deployment.
* Added additional details to the Root CA and Subordinate CA setup and deployment.
* Fixed several typos and grammatical errors in the guide.
* Increased the size of the images and screenshots in the guide to make them easier to read.
* Modified the formatting of the embedded configuration files to make them easier to read.
* Replaced the command to enable double escaping in IIS, as the previous command was outdated.
* Updated the look of the guide to match the style of the [AD CS on Windows Server 2022](/publications/adcs-on-windows-server-2022/) guide. This improves readability for CLI commands that need to be entered, as well as standardizes the look of all elements the guide.
* Updated the page size of the guide to letter, which makes it easier to print the guide if needed. 
* Updated the title page of the guide to differentiate it from the [Practical Guide to PKI with Windows Server - First Edition](/publications/practical-guide-to-pki-with-windows-server-first-edition/) book.

This is not a second edition or version 2.0 of the guide, it is a small quality of life update. I do not plan on updating this guide again since Windows Server 2019 is getting older and AD CS will not receive any major updates on that Operating System.

### Additional Materials ###

There are several resources for expanding upon the functionality of this guide:

* [AD CS on Windows Server 2019](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2019/) guide on [docs.mjcb.io](https://docs.mjcb.io/).
* [AD CS on Windows Server 2022](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2022/) guide on [docs.mjcb.io](https://docs.mjcb.io/).

## Links ##

* [Building a Certificate Authority in Windows Server 2019 (Gumroad)](https://mjcb.gumroad.com/l/building-a-ca-in-windows-server-2019/)
