---
title: "Exchange Online Mail Flow Rules for Aliases"
slug: "exchange-online-mail-flow-rules-aliases"
date: "2022-05-11T19:32:00"
author: "Matthew Burr"
summary: "I ran into a somewhat annoying issue with using Mail Flow Rules with Exchange Online to modify the subject header on emails that were sent to aliases on some of my Office 365 accounts. I wanted to modify the email subject of those emails to show what alias it was meant for, and I figured I should share that process here if someone else runs into the same issue. This isn't something that I do very often, and I was doing it wrong from the beginning, hence why I was having an issue."
tags: [
    "Exchange",
    "Guides",
    "Microsoft",
    "Office 365"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00046/microsoft-exchange-online.png"
draft: false
---

I ran into a somewhat annoying issue with using Mail Flow Rules with Exchange Online to modify the subject header on emails that were sent to aliases on some of my Office 365 accounts. I wanted to modify the email subject of those emails to show what alias it was meant for, and I figured I should share that process here if someone else runs into the same issue. This isn't something that I do very often, and I was doing it wrong from the beginning, hence why I was having an issue.

Creating these Mail Flow Rules is not a difficult task to perform, but if you use the wrong settings in the rule creation process, then it will not work exactly as intended. Just for reference, I still use Office 365 and Microsoft 365 interchangeably in a lot of cases. I will just add it to the list of branding choices by Microsoft that I don't always agree with or follow and knowing Microsoft they will just change it again in the future.

{{< toc >}}

## Purpose ##

I have spent a lot of time over the last few months trying to consolidate a lot of my online services, both on my personal accounts and on my business-related accounts. This was for several reasons, but it was mostly to reduce the complexity of maintaining multiple accounts and to simplify access, but also to save some money on services. I have been using Office 365 for my [Ten Fifteen Solutions](https://tenfifteen.ca/) business for the last few years, as well as on another unrelated Office 365 tenant that I also maintain for other purposes.

While I like the functionality of Office 365 and all the services that come with it (especially Teams), the cost has gotten a bit out of control since I started using it and I feel like I needed to consolidate those costs. Email aliases are a convenient way to assign a lot of rarely used email addresses onto a single account and simplify a lot of things.

## Email Aliases ##

An email alias is a way to add an "alternate" email address to a primary email account. Aliases are very useful for several reasons which can include:

* Allowing for a new domain name if a company changed names but want to retain the old company domain name during the transition.
* Allowing for a company that was acquired to be absorbed into the new company and allowing for the old domain name during the transition.
* Adding misspellings for users that have names which are commonly misspelled or have changed their name.
* Adding multiple addresses to common services, such as the ones in [RFC 2142](https://www.ietf.org/rfc/rfc2142.txt).
* Adding subdomains for specific purposes (such as internal domains, filters, etc.).

There is another way to handle email aliases on email servers, and that is with the "catch-all" email address. This is a setting on an email server that forwards all "unknown" email addresses to a specific user or account. When something like this is setup, any emails sent to a domain will be sent to a specific account, regardless of who the recipient is. I personally do not like this setting for an email server, as it can easily flood an email server with unsolicited email. Exchange Online does not actually support this setting without a lot of hacks (at least as of early 2022), and even if it were supported, I would not use it for the security implications.

## Exchange Online Mail Flow Rules ##

Mail Flow Rules (formerly known as Transport Rules in on-premises Exchange) are rules that are applied on an email domain that can identify and perform actions on emails that flow in and out of an organization. They are similar to regular Inbox rules that are applied in Outlook, except they are applied to all email rather than an individual mailbox and support many more options.

They support multiple options and conditions, but have many purposes such as:

* Redirecting emails to other users.
* Applying filters.
* Adding disclaimers to emails.
* Modifying the email subject.
* Dropping emails from certain domains.
* Flagging emails as originating from outside the organization.

Configuring Mail Flow Rules is a straightforward process, and they can be configured through PowerShell or through the Exchange Online Portal.

## Account Aliases ##

For this post, the following Mail Flow Rule will be setup for the following user:

**matthew**[at]**mjcb**[dot]**io**

I have already setup several aliases for that user, which are specified in [RFC 2142](https://www.ietf.org/rfc/rfc2142.txt):

* ABUSE
* FTP
* HOSTMASTER
* INFO
* MARKETING
* NEWS
* NOC
* POSTMASTER
* SALES
* SECURITY
* SUPPORT
* USENET
* UUCP
* WEBMASTER
* WWW

These 15 aliases will be setup with 3 different Mail Flow Rules so that when an email is sent to them, the subject line will be modified to show the alias that received the email:

| Alias                                                                                                                              | Subject Line    |
|:-----------------------------------------------------------------------------------------------------------------------------------|:----------------|
| <ul><li>INFO</li><li>MARKETING</li><li>SALES</li><li>SUPPORT</li></ul>                                                             | [MJCB Business] |
| <ul><li>ABUSE</li><li>NOC</li><li>SECURITY</li></ul>                                                                               | [MJCB NOC]      |
| <ul><li>FTP</li><li>HOSTMASTER</li><li>NEWS</li><li>POSTMASTER</li><li>USENET</li><li>UUCP</li><li>WEBMASTER</li><li>WWW</li></ul> | [MJCB Support]  |

The email subject line name is based on the categories outlined in RFC 2142.

## Creating a Mail Flow Rule for Aliases

In this example, a Mail Flow Rule named **MJCB RFC 2141 - Business** will be created for the **INFO**, **MARKETING**, **SALES**, and **SUPPORT** aliases for the **matthew**[at]**mjcb**[dot]**io** email address. The subject line for any emails that are sent to those aliases will be prepended with **[MJCB Business]**.

### PowerShell Configuration ###

The fastest way to setup a Mail Flow Rule is to use PowerShell instead of using the Exchange Online web interface. The current method of connecting to the Exchange Online service is to use the [EXO V2 PowerShell](https://docs.microsoft.com/en-us/powershell/exchange/connect-to-exchange-online-powershell) module, which can be downloaded from Microsoft.

If you would prefer to create the Mail Flow Rule using the Exchange Online web interface instead of with PowerShell, those instructions can be found later in this post.

Use the following commands to use the **EXO V2** PowerShell module for connecting to Exchange Online (you will need to install this first). You will need to replace **&lt;UPN&gt;** with your credentials:

```powershell
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName <UPN>
```

Once connected to Exchange Online, create the Mail Flow Rule by running the following command:

```powershell
New-TransportRule `
    -Name "MJCB RFC 2141 - Business" `
    -HeaderMatchesMessageHeader To `
    -HeaderMatchesPatterns "info@mjcb.io","marketing@mjcb.io","sales@mjcb.io","support@mjcb.io" `
    -PrependSubject "[MJCB Business] " `
    -Mode Enforce
```

### Exchange Admin Center Configuration ###

The Exchange admin center is offered with a new and updated user interface, as well as the classic interface. The Mail Flow Rules interface is the exact same regardless of which admin center that you use, the only difference is where it is located within the interface. In these instructions, Step 3 will specify the difference in accessing the Mail Flow Rules configuration.

1. Open the **Microsoft 365 Admin Center**.
2. Under the **Admin centers** menu on the left side of the screen, select **Exchange** to access the Exchange admin center:

![New Exchange admin center](/images/blog/00046/exchange-online-rules-02.png "New Exchange admin center")

3. If you are using the **New Exchange admin center**, go to **Mail flow** -> **Rules** in the menu on the left side of the screen. If you are using the **Classic Exchange admin center**, click on **mail flow** in the menu on the left side of the screen and select the **rules** tab (it should be selected by default). The remainder of the configuration is the same regardless of which interface is used, which is shown below:

![Mail flow rules](/images/blog/00046/exchange-online-rules-03.png "Mail flow rules")

4. Click on **+** button and select the option to **Create a new rule…**.

![Create a new rule](/images/blog/00046/exchange-online-rules-04.png "Create a new rule")

5. The **new rule** window will appear. At the bottom of the **new rule** window, click the link for **More options...**, which will show more advanced options for rule creation.

![New rule window](/images/blog/00046/exchange-online-rules-05.png "New rule window")

6. Enter a name for the rule in the **Name** field.
7. Under **Apply this rule if...** drop-down list, select **A message header...** -> **matches these text patterns**.
8. Two options will now appear beside the drop-down list, **Enter text...** and **Enter text patterns...**.
9. Click on the **Enter text...** option and in the **specify header name** window, enter **To** and click the **Save** button.
10. Click on the **Enter text patterns...** link and in the **specify words or phrases** window, enter the aliases. Click the **+** icon to add each email address to the list and click the **OK** button when finished.

![Email aliases](/images/blog/00046/exchange-online-rules-10.png "Email aliases")

11. Under **Do the following...** drop-down list, select the **Prepend the subject of the message with...** option.
12. On the **specify subject prefix** window, enter **[MJCB Business]** and click the **OK** button. Ensure that there is a space after the bracket to ensure that there are no issues with readability.
13. Click the **Save** button to finish adding the Mail Flow Rule:

![Completed mail flow rule](/images/blog/00046/exchange-online-rules-12.png "Completed mail flow rule")

The Mail Flow Rule how now been created and should be visible in the list of rules that have been configured:

![Mail flow rules](/images/blog/00046/exchange-online-rules-completed.png "Mail flow rules")

If an email is sent to any of the aliases specified within it, should have the subject name modified.

## Links ##

* [Exchange Admin Center (New)](https://admin.exchange.microsoft.com/)
* [Exchange Admin Center (Classic)](https://outlook.office365.com/ecp/)
* [EXO V2 Module](https://docs.microsoft.com/en-us/powershell/exchange/connect-to-exchange-online-powershell)
* [Microsoft 365 Admin Center](https://admin.microsoft.com/AdminPortal/)
