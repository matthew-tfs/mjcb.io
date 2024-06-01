---
title: "Building a Certificate Authority in Windows Server 2019 Part 6 - Certificate Template Deployment"
slug: "certificate-authority-windows-server-2019-part-6"
date: "2020-03-09T19:07:00"
author: "Matthew Burr"
summary: "Certificates are not always one size fits all for an organization, but luckily it is easy to customize the Certificates that are deployed to your organization."
tags: [
    "ADCS",
    "Guides",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00028/adcs.png"
draft: false
---

<style type="text/css">
.pki-header {
    background-image: url("/images/blog/00028/pki-background.jpg");
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

**Note:** This guide is archived and is no longer updated on this website. For any future updates to this guide, please refer to the [version](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2019/adcs-windows-server-2019-part-6/) that can be found on [docs.mjcb.io](https://docs.mjcb.io/).

{{< toc >}}

## 6.1 User Certificate Template Creation ##

The following **Certificate Templates** will need to be created in the **Certification Authority** Console on the **TFS-CA01** Server:

| Template Name                     | Validity | Publish in ADDS | Additional Security                                                                 |
|:----------------------------------|:---------|:----------------|:------------------------------------------------------------------------------------|
| TFS Labs User Certificate	        | 1 Year   | Yes             | <ul><li>TFS-CA01 (Enroll)</li><li>Domain Users (Read, Enroll, Autoenroll)</li></ul> |
| TFS Labs Workstation Certificate  | 1 Year   | Yes             | <ul><li>TFS-CA01 (Enroll)</li><li>Domain Computers (Enroll, Autoenroll)</li></ul>   |
| TFS Labs Web Server Certificate   | 1 Year   | No	             | <ul><li>TFS-CA01 (Enroll)</li></ul>                                                 |

These **Certificate Templates** will be used for issues **Certificates** to the organization. Some will be issued automatically, and the others can be requested by users or devices. The procedure for creating these **Certificate Templates** is mostly the same.

### 6.1.1 User and Workstation Templates ###

The settings for these templates will vary based on the needs of your organization, and the settings being used in this guide may or may not work for you. Ensure that you understand what the template settings are and how they will affect the users and devices in your organization.

1. In the **Certification Authority** Console on the **TFS-CA01** Server, ensure that the **TFS Labs Enterprise CA** Server is expanded in the Console tree.
2. Right-click on **Certificate Templates** and then click **Manage**. The **Certificate Templates Console** window will open and display the **Certificate Templates** that are currently stored in **Active Directory**.
3. In the details pane, right-click on the **User** Template and then click **Duplicate Template**.
4. On the **Properties of New Template** window, click on the **General** tab. Change the name of the template to **TFS Labs User Certificate**. Ensure that the **Validity Period** is set to **1 Year**.
5. Ensure that the **Publish certificate in Active Directory option** checkbox is selected, as well as **Do not automatically reenroll if a duplicate certificate exists in Active Directory is selected** option is selected as well.
6. On the **Security** tab, click the **Add** button and add the **TFS-CA01** Server. Give it the **Enroll** permission.
7. Select the **Domain Users** group and add the **Read**, **Enroll** and **Autoenroll** permissions.
8. Click the **OK** button to close the Template window.
9. Close the **Certificate Templates Console** window.
10. In the **Certification Authority** Console, right-click on **Certificate Templates**, then select **New** and then select **Certificate Template to Issue**.
11. In the **Enable Certificate Templates** dialog box, click **TFS Labs User Certificate** and then click **OK**.

### 6.1.2 User Certificate Template ###

Ensure that the user has their e-mail address entered into Active Directory, otherwise this Certificate will not deploy correctly to the User Account.

## 6.2 Workstation Certificate Template Creation ##

1. In the **Certification Authority** Console on the **TFS-CA01** Server, ensure that the **TFS Labs Enterprise CA** Server is expanded in the Console tree.
2. Right-click on **Certificate Templates** and then click **Manage**. The **Certificate Templates Console** window will open and display the **Certificate Templates** that are currently stored in **Active Directory**.
3. In the details pane, right-click on the **Computer** Template and then click **Duplicate Template**.
4. On the **Properties of New Template** window, click on the **General** tab. Change the name of the template to **TFS Labs Workstation Certificate**. Ensure that the **Validity Period** is set to **1 Year**.
5. Ensure that the **Publish certificate in Active Directory option** checkbox is selected.
6. On the **Security** tab, click the **Add** button and add the **TFS-CA01** Server. Give it the **Enroll** permission.
7. Select the **Domain Computer** group and add the **Enroll** and **Autoenroll** permissions.
8. Click the **OK** button to close the Template window.
9. Close the **Certificate Templates Console** window.
10. In the **Certification Authority** Console, right-click on **Certificate Templates**, then select **New** and then select **Certificate Template to Issue**.
11. In the **Enable Certificate Templates** dialog box, click **TFS Labs Workstation Certificate** and then click **OK**.

## 6.3 Web Server Certificate Template Creation ##

1. In the **Certification Authority** Console on the **TFS-CA01** Server, ensure that the **TFS Labs Enterprise CA** Server is expanded in the Console tree.
2. Right-click on **Certificate Templates** and then click **Manage**. The **Certificate Templates Console** window will open and display the **Certificate Templates** that are currently stored in **Active Directory**.
3. In the details pane, right-click on the **Web Server** Template and then click **Duplicate Template**.
4. On the **Properties of New Template** window, click on the **General** tab. Change the name of the template to **TFS Labs Web Server Certificate**. Ensure that the **Validity Period** is set to **1 Year**.
5. On the **Security** tab, click the **Add** button and add the **TFS-CA01** Server. Give it the **Enroll** permission.
6. Select the **Domain Admins** group and add the **Enroll** and **Autoenroll** permissions.
7. Click the **OK** button to close the Template window.
8. Close the **Certificate Templates Console** window.
9. In the **Certification Authority** Console, right-click on **Certificate Templates**, then select **New** and then select **Certificate Template to Issue**.
10. In the **Enable Certificate Templates** dialog box, click **TFS Labs Web Server Certificate** and then click **OK**.

## 6.4 Active Directory Certificate Services Web Enrollment ##

The **Active Directory Certificate Services Web Enrollment** website is a feature that allows **Authenticated Users** in the organization the ability to submit **Certificate Requests** and download the completed **Certificates**. It can be found by going to the following URL:

**http​://tfs-ca01.corp.tfslabs.com/CertSrv/**

The only minor issue with this is that SSL should be enabled on this site, but we will first need to add an SSL Certificate for it. Fortunately, the Certificate Authority is now able to issue certificates and a proper Certificate can now be requested and applied to this site.

1. Open the **Certificates** Console (certlm.msc) under the **Local Computer Account** on the **TFS-CA01** Server.
2. Go to the **Certificates > Personal > Certificates** Store.
3. Right-click on the **Certificates** folder, go to **All Tasks** and select **Request New Certificate…**.
4. On the **Before You Begin** screen, click the **Next** button to continue.
5. On the **Select Certificate Enrollment Policy** screen, click the **Next** button to continue.
6. On the **Request Certificates** screen, select the **TFS Labs Workstation Certificate** and click the **Enroll** button.
7. On the **Certificate Installation Results** screen, click the **Finish** button to close the wizard.
8. Close the **Certificates** Console.
9. Open the **Internet Information Services (IIS) Manager** Console on the **TFS-CA01** Server.
10. In the **Connections** pane, select the **TFS-CA01** Server and expand **Sites**.
11. Select the **Default Web Site** and in the **Actions** pane, select **Bindings…**.
12. In the **Site Bindings** window, click the **Add…** button.
13. In the **Add Site Binding** window, use the following settings and then click the **OK** button:
  * **Type:** https
  * **IP Address:** All Unassigned
  * **Port:** 443
  * **SSL Certificate:** TFS-CA01.corp.tfslabs.com
14. Expand **Default Web Site** and select the **CertSrv** folder.
15. In the **/CertSrv Home** pane, double-click on the **SSL Settings** icon.
16. In the **SSL Settings** window, select the option for **Require SSL** and then click the **Apply** button in the **Actions** pane.
17. You can easily verify that SSL is working correctly on the Enrollment page by opening the **http​://tfs-ca01.corp.tfslabs.com/CertSrv** page (you can login with a Domain Administrator account). It should be secured with SSL.

If you go to the SSL Certificate properties of the web page, you will be able to see that the Certificate has been issued by the **TFS Labs Enterprise CA** and is valid for only 1 year.

## Certificate Authority in Windows Server 2019 ##

* [Introduction](/blog/2020/03/09/certificate-authority-windows-server-2019)
* [Part 1 - Offline Root CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-1)
* [Part 2 - Subordinate CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-2)
* [Part 3 - Deploy Root and Subordinate Certificate](/blog/2020/03/09/certificate-authority-windows-server-2019-part-3)
* [Part 4 - Certificate Revocation Policies](/blog/2020/03/09/certificate-authority-windows-server-2019-part-4)
* [Part 5 - Configure Private Key Archive and Recovery](/blog/2020/03/09/certificate-authority-windows-server-2019-part-5)
* Part 6 - Certificate Template Deployment
* [Part 7 - Certificate Auto-Enrollment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-7)
* [Part 8 - Final Steps](/blog/2020/03/09/certificate-authority-windows-server-2019-part-8)
