---
title: "Building a Certificate Authority in Windows Server 2019 Part 7 - Certificate Auto-Enrollment"
slug: "certificate-authority-windows-server-2019-part-7"
aliases: [
    "/blog/2020/03/09/certificate-authority-windows-server-2019-part-7/",
    "/2020/03/09/certificate-authority-windows-server-2019-part-7/"
]
date: "2020-03-09T19:08:00-05:00"
author: "Matthew Burr"
summary: "What good is a Certificate Authority in an Active Directory environment if there is no way to automatically deploy the Certificates? Luckily, with the use of Group Policy and a few configuration changes to Certificate Templates, this is a fairly easy task."
tags: [
    "ADCS",
    "Guides",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00029/adcs.png"
featureImage: "/images/blog/00029/active-directory-certificate-services.png"
draft: false
---

<style type="text/css">
.pki-header {
    background-image: url("/images/blog/00029/pki-background.jpg");
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

{{< toc >}}

## 7.1 User Auto-Enrollment ##

Enabling the User Auto-Enrollment feature will allow Users within the organization the ability to automatically receive a Certificate from the Active Directory Certificate Authority Server when they login to a Workstation.

1. On the **TFS-DC01** Server, open the **Group Policy Management** Console (gpmc.msc).
2. Open the **TFS Labs Certificates** GPO that was created earlier.
3. Open the **User Configuration > Policies > Windows Settings > Security Settings > Public Key Policies** node.
4. Open the **Certificate Services Client - Certificate Enrollment Policy** object.
5. In the **Properties** window, change the **Configuration Model** option to **Enabled**. Click the **OK** button to close the window.
6. Open the **Certificate Services Client - Auto-Enrollment** object.
7. In the **Properties** window, change the **Configuration Model** option to **Enabled**. Select the options for **Renew expired certificates, update pending certificates, and remove revoked certificates** and **Update certificate that use certificate templates** options. Click the **OK** button to close the window.

### 7.1.1 Group Policy Propagation ###

Once the Auto-Enrollment options have been added to Group Policy, allow up to 1 hour for the update to be processed in the entire Active Directory Forest.

## 7.2 Workstation Auto-Enrollment

Enabling the Workstation Auto-Enrollment feature will allow Workstations within the organization the ability to automatically receive a Certificate from the Active Directory Certificate Authority Server when they come online.

1. On the **TFS-DC01** Server, open the **Group Policy Management** Console (gpmc.msc).
2. Open the **TFS Labs Certificates** GPO that was created earlier.
3. Open the **Computer Configuration > Policies > Windows Settings > Security Settings > Public Key Policies** node.
4. Open the **Certificate Services Client - Certificate Enrollment Policy** object.
5. In the **Properties** window, change the **Configuration Model** option to **Enabled**. Click the **OK** button to close the window.
6. Open the **Certificate Services Client - Auto-Enrollment** object.
7. In the **Properties** window, change the **Configuration Model** option to **Enabled**. Select the options for **Renew expired certificates, update pending certificates, and remove revoked certificates** and **Update certificate that use certificate templates** options. Click the **OK** button to close the window.

### 7.2.1 Group Policy Propagation ###

Once the Auto-Enrollment options have been added to Group Policy, allow up to 1 hour for the update to be processed in the entire Active Directory Forest.

## 7.3 Auto-Enrollment Verification ##

Confirm that the Auto-Enrollment of the **TFS Labs User Certificate** and **TFS Labs Workstation Certificate** is working correctly by running the **gpupdate /force** command on the **TFS-WIN10** and restarting it. If Auto-Enrollment is working correctly, there should be an additional Certificate in the **Personal** Store belonging to the User Account and the Workstation Account.

## Certificate Authority in Windows Server 2019 ##

* [Introduction](/blog/2020/03/09/certificate-authority-windows-server-2019)
* [Part 1 - Offline Root CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-1)
* [Part 2 - Subordinate CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-2)
* [Part 3 - Deploy Root and Subordinate Certificate](/blog/2020/03/09/certificate-authority-windows-server-2019-part-3)
* [Part 4 - Certificate Revocation Policies](/blog/2020/03/09/certificate-authority-windows-server-2019-part-4)
* [Part 5 - Configure Private Key Archive and Recovery](/blog/2020/03/09/certificate-authority-windows-server-2019-part-5)
* [Part 6 - Certificate Template Deployment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-6)
* Part 7 - Certificate Auto-Enrollment
* [Part 8 - Final Steps](/blog/2020/03/09/certificate-authority-windows-server-2019-part-8)
