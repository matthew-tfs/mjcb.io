---
title: "Microsoft Administration Portals"
slug: "microsoft-administration-portals"
date: "2022-05-01T20:51:00-05:00"
author: "Matthew Burr"
summary: "I found a useful resource a few days ago that lists all of the known/major Microsoft Administration Portals on a single website. While it is definitely a great resource, it also represents a lot of the frustrations that I have with Microsoft's online services and how administrators are expected to manage them."
tags: [
    "Azure",
    "Microsoft",
    "Office 365"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00045/microsoft-logo.png"
draft: false
---

I found a useful resource a few days ago that lists all of the known/major Microsoft Administration Portals on a single website. While it is definitely a great resource, it also represents a lot of the frustrations that I have with Microsoft's online services and how administrators are expected to manage them. This resource can be found at the following link:

[Microsoft Portals](https://msportals.io/)

There are a lot of administration portals listed on the site, which is broken down into a few different sections:

* Microsoft 365 Admin Portals
* Azure IT Admin Portals
* Microsoft Licensing Portals
* Microsoft Defender Portals
* Developer Portals
* Status Portals

It also lists portals that are dedicated to End Users and well as Government portals. As of April 2022, there are almost 150 portals listed on the site. Depending on your role in IT and with Microsoft services, many of these particular portals are probably completely unfamiliar to you, or they may be portals that you use on a regular basis. I knew that there were a lot of portals for Microsoft, but I had never seen a detailed list like this. The fact that there are almost 150 portals in my opinion, is a serious issue for Microsoft and I have a few reasons why.

As an aside, the first time that I saw the portals list it immediately reminded me of the God Mode shortcut introduced in Windows 7:

![Windows 7 God Mode with all available Control Panel options, all 270 of them.](/images/blog/00045/godmode-windows-7-pro.png)

So, this particular issue is not new to Microsoft, this has been going on for several years.

## Single Pane of Glass ##

There are a few administration portals that Microsoft has gotten right, but there are a lot of cases where they have moved too much functionality to other portals for seemingly no reason. The Microsoft Azure portal is very convenient, and if I am managing an Azure environment, I can effectively manage everything directly from that portal, including accessing the CLI through the portal (which is a very convenient feature).

The Office 365 administration center is a complete mess, and to effectively manage day to day activities for email I would need to use several portals to do it, including:

* **Office 365 Admin Center** - To create the email account and assign other attributes such as aliases.
* **Exchange Online Admin Center** - To create rules if necessary, or to troubleshoot mail flow issues.
* **Teams Admin Center** - Manage any particular Teams settings, but you need to use the Office 365 Admin for setting up resource accounts.

If the organization is in a hybrid mode with on-premises Active Directory for user management, then that is yet another "portal" required for managing the entire environment, and that is just for email. From a workflow perspective, this is definitely a cumbersome way of managing email for an organization, when considering several years ago with on-premises Exchange, it could all be done from a single interface. Regardless of the reasons why Microsoft chose to do things this way, I find it extremely frustrating to manage Office 365 and Exchange Online in the way that they have made it.

With on-premises Exchange versions this used to be a fairly trivial process and it was easy to find these settings without too much effort. It also helped that these could all be found on the same server in most cases, so there was much less switching around windows to find what you are looking for. As these services become more advanced, I don't think the issue will get much better.

## Poor Unified Search ##

Something that is seriously lacking in the Microsoft administration portals is the ability to search for these portals or for settings that are not in the portal that you are using. There is the ability to search for some settings, but only if you know exactly what you are looking for. Microsoft has certainly laid the groundwork for it, I would just like if they added more search criteria for things that you aren't exactly sure about.

For example, in Windows I can type "what happens when I close the lid" to get to certain power settings, and that takes me where I want to go. Adding that type of functionality in the Microsoft portals would go a long way.

## Unfinished or Work in Progress Portals ##

I have no issue with Microsoft updating their portals and adding features. I kind of expect them to do so as the platforms that they offer mature, but I have a big issue with seeing this slider on their portals:

![Use the new admin center, even though it is missing the features of the old admin center.](/images/blog/00045/new-admin-center.png)

I have an issue with Microsoft advertising the new portal when it is missing the functionality of the old portal. This was especially annoying with the **Security and Compliance** portals with Office 365, as there was a considerable amount of missing functionality on the new portals. If I have to constantly switch from the new to the old portals, then the new one is not ready and should not be advertised as being ready for production usage.

## What Am I Complaining About? ##

Nothing, I am just ranting about Microsoft and inconsistencies in their products. I would rather Microsoft take the time to refine their existing products instead of just adding features constantly, without adequately integrating those features into their existing products.

## Links ##

* **Microsoft Portals**: ([https://msportals.io/](https://msportals.io/))
* **GitHub Repository**: ([https://github.com/adamfowlerit/msportals.io](https://github.com/adamfowlerit/msportals.io))
