---
title: "Most Common Mistakes in Active Directory"
slug: "most-common-mistakes-in-active-directory"
date: "2019-02-11T15:38:00"
author: "Matthew Burr"
summary: "Active Directory is an incredibly powerful tool that pretty much every business relies on for user authentication and management. That doesn't mean that people set it up properly though, and Microsoft has provided a very good guide on how to avoid those mistakes."
tags: [
    "ADDS",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00012/windows-server-active-directory-logo.png"
draft: false
---

The Microsoft Services Secure Infrastructure Team recently published a three part series on the most common mistakes that they encountered in Active Directory deployments. It was a very informative series to go through, the links can be found below:

* [Most Common Mistakes in Active Directory and Domain Services – Part 1](https://azurecloudai.blog/2018/12/31/most-common-mistakes-in-active-directory-and-domain-services-part-1/)
* [Most Common Mistakes in Active Directory and Domain Services – Part 2](https://azurecloudai.blog/2019/01/08/most-common-mistakes-in-active-directory-and-domain-services-part-2/)
* [Most Common Mistakes in Active Directory and Domain Services – Part 3](https://azurecloudai.blog/2019/01/27/most-common-mistakes-in-active-directory-and-domain-services-part-3/)

As someone who has worked in many Active Directory Environments (probably over 50 separate environments in 10 years) and as someone who has created and migrated multiple Active Environments, I have run into most of these issues before and I am probably guilty of creating some of these mistakes in the first place.

Again, I haven't run into all these issues myself, but these are the ones that I have encountered in various Active Directory environments and here are my thoughts and additional comments:

## Mistake #1: Configuring Multiple Password Policies for Domain Users Using Group Policy ##

This is an easy mistake to make with Active Directory. Password policies are always applied to user accounts and are in the User Configuration GPO, and in most cases most users confuse with these password policies when dealing with service accounts. Applying these types of polices to an OU that contains only servers or workstations is completely ineffective and a waste of time. They need to be applied to an OU containing user accounts for them to be applied correctly. In my experience, I have learned that it is best to create at least three password policies for accounts, with these requirements:

* User Accounts - 8 Characters with low complexity options
* Administrator Accounts - 16 Characters with high complexity options
* Service Accounts - 24 Characters with high complexity options

There are third-party tools available that can prevent known passwords that are unsuitable and previously used, and those tools should always be used whenever possible.

## Mistake #4: Keeping the Forest and Domain Functional Levels at a Lower Version ##

I have encountered many organizations who are staying at a much lower Forest and Domain functional level for no reason. I unfortunately remember having to spend a lot of time retrieving entries from Active Directory before they were "tombstoned". This was when the environment was perfectly able to support the ADDS Recycle Bin (introduced with Windows Server 2008 R2). I am afraid to say it, but if in 2019 and you are not up to Server 2008 R2 Active Directory Functional level at a minimum, you owe all errors and inconveniences to yourself.

## Mistake #5: Use DNS as an Archive by Disabling DNS Scavenging ##

I have encountered several environments with this problem. For one, as an Administrator, you need to be managing all DNS entries for critical entries in your environment. Workstations, whether they be Laptops or Desktops, or mobile devices have no business being found in an Active Directory DNS Server months or years after they expire. This only creates issues down the line with newer service taking over existing IP addresses. This is a no brainer and is essential. It is literally a checkbox to enable and should be enabled by default. DNS is the most common problem in an Active Directory environment, so by not managing even basic items like this, you are making your job much more difficult than it needs to be.

## Mistake #7: Installing Additional Server Roles and Applications on a Domain Controller ##

I am a firm believer in using servers for dedicated roles only, especially in an environment with virtualization. Obviously, this has not always been the case in Windows Server, especially back in the day when Windows Small Business Server was in wide deployment. It was very common to have a single server running multiple complex services such Active Directory, Exchange Server, SharePoint, SQL, and IIS. On top of that, all these services were probably running on a basic server with basic hardware specifications. Speaking from experience, peeling off these additional roles from these servers is an absolute nightmare, and the amount of time required to deal with this is considerable. As a contractor I am all in favour of this, but a business should avoid this it all costs whenever possible.

## Mistake #8: Deploying Domain Controllers as a Windows Server with Desktop Experience ##

This is a tricky one to deal with. It is certainly possible to deploy a Windows Server using the Windows Server Core deployment option, but not all Windows features support this option. You can use RSAT tools to remotely manage a Windows Server, and Windows Admin Center to manage through a web interface, but it does not always work properly. For example, some options related to driver specific network settings do not always work properly in Server Core and can create issues that are not easily corrected in a Windows Server Core deployment.

At the end of the day, not all Administrators are up to the task of managing a Windows Server without using a GUI. At the end of the day, it is 2019 and if you are not able to adapt to using a server without a GUI, then you are the problem.

## Mistake #9: Use Subnets Without Mapping them to Active Directory Sites ##

I have been burned a few times by this issue, and it only ever applies when you have an Active Directory deployment over multiple offices/datacentres. This causes issues with replication, DFS and logins, so it is imperative that Active Directory Servers is correctly mapped with Active Directory Sites and Services. There is nothing worse than having a user incorrectly accessing an Active Directory Server unnecessarily from a datacentre on the other side of the country.

## Links ##

* [Most Common Mistakes in Active Directory and Domain Services – Part 1](https://azurecloudai.blog/2018/12/31/most-common-mistakes-in-active-directory-and-domain-services-part-1/) ([Local Version](/docs/blog/00012/most-common-mistakes-in-active-directory-and-domain-services-part-1.pdf))
* [Most Common Mistakes in Active Directory and Domain Services – Part 2](https://azurecloudai.blog/2019/01/08/most-common-mistakes-in-active-directory-and-domain-services-part-2/) ([Local Version](/docs/blog/00012/most-common-mistakes-in-active-directory-and-domain-services-part-2.pdf))
* [Most Common Mistakes in Active Directory and Domain Services – Part 3](https://azurecloudai.blog/2019/01/27/most-common-mistakes-in-active-directory-and-domain-services-part-3/) ([Local Version](/docs/blog/00012/most-common-mistakes-in-active-directory-and-domain-services-part-3.pdf))
