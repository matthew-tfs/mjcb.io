---
title: "Building a Certificate Authority in Windows Server 2019 Part 3 - Deploy Root and Subordinate Certificates"
slug: "certificate-authority-windows-server-2019-part-3"
aliases: [
    "/blog/2020/03/09/certificate-authority-windows-server-2019-part-3/",
    "/2020/03/09/certificate-authority-windows-server-2019-part-3/"
]
date: "2020-03-09T19:04:00"
author: "Matthew Burr"
summary: "Once the Certificate Authority has been created it is time to deploy those Certificates to the organization. Using Group Policy with Active Directory, this is an easy task, and can deploy the Certificates to the organization in only a few minutes."
tags: [
    "ADCS",
    "Guides",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00025/adcs.png"
draft: false
---

<style type="text/css">
.pki-header {
    background-image: url("/images/blog/00025/pki-background.jpg");
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

**Note:** This guide is archived and is no longer updated on this website. For any future updates to this guide, please refer to the [version](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2019/adcs-windows-server-2019-part-3/) that can be found on [docs.mjcb.io](https://docs.mjcb.io/).

{{< toc >}}

## 3.1 Export the Root and Subordinate Certificates ##

The easiest method to deploy the Certificates to your organization is to use Group Policy to deploy them automatically to your devices.

1. Open the **Certificates** Console (certlm.msc) under the **Local Computer Account** on the **TFS-CA01** Server.
2. Open the **Trusted Root Certification Authorities > Certificates** Store and export the **TFS Labs Certificate Authority** Certificate as a **DER encoded binary** to the **C:\ Drive**.
3. Open the **Intermediate Certification Authorities > Certificates** Store and export the **TFS Labs Enterprise CA** Certificate as a **DER encoded binary** to the **C:\ Drive**.
4. On the root of the **C:\ Drive** on the **TFS-DC01** Server, create a folder called **Certificates** (C:\Certificates).
5. Copy the **C:\TFS Labs Certificate Authority.cer** and **C:\TFS Labs TFS Labs Enterprise CA.cer** files from the **TFS-CA01** Server to the **C:\Certificates** folder on the **TFS-DC01** Server.
6. **Optional:** If you are going to be using IIS to deploy Certificates within your organization as defined in **Step 2.15**, you can copy the **C:\TFS Labs Certificate Authority.cer** and **C:\TFS Labs TFS Labs Enterprise CA.cer** files to the **C:\Certificates** folder on the **TFS-CA01** Server. You will need to change the extension on these files from ***.cer** to ***.crt** for iOS to be able to download them.

## 3.2 Deploy the Root and Subordinate Certificates to the Domain ##

For initial deployment of the Certificates to the TFS Labs Domain, it will be applied to the root of the Active Directory Domain. This is something that can be refined later depending on your requirements.

1. Open the **Group Policy Management** Console (gpmc.msc) on the **TFS-DC01** Server.
2. In the root of the **corp.tfslabs.com** Domain, create a new **GPO** called **TFS Labs Certificates**.
3. Right-click on the **TFS Labs Certificates** GPO and select the **Edit** option.
4. In the **Group Policy Management Editor** window, open the **Computer Configuration > Policies > Windows Settings > Security Settings > Public Key Policies** node.
5. Right-click on the **Trusted Root Certification Authorities** folder and select the **Import** option. Select the **C:\Certificates\TFS Labs Certificate Authority.cer** file and import it.
6. Right-click on the **Intermediate Certification Authorities** folder and select the **Import** option. Select the **C:\Certificates\TFS Labs Enterprise CA.cer** file and import it.
7. Close the **Group Policy Management** Console.
8. Once the Certificates have been added to Group Policy, allow up to **1 hour** for the Certificates to be deployed to the entire **Active Directory** Forest.

## 3.3 Optional: Deploy Certificates to iOS ##

Since the **Root and Subordinate Certificates** are ready for deployment, you can now test that they work correctly on an iOS Device. If you do not have an iOS Device for testing, you can skip this section.

1. Open **Safari** on the iOS Device and go to **http​://tfs-ca01.corp.tfslabs.com/Certificates** to access the **Root and Subordinate Certificates**.
2. Click on the **TFS Labs Certificate Authority.crt** file. You should get a popup stating **This website is trying to download a configuration profile. Do you want to allow this?** and click the **Allow** button to confirm it. You will then get a prompt that the **SSL Profile** was downloaded. Click the **Close** button to continue.
3. Open the **Settings** on your iOS device and select the **Profile Downloaded** menu option. A prompt should appear with the **Install Profile** options for the **TFS Labs Certificate Authority**. Click the **Install** button. You may be prompted to enter your credentials. On the **Warning** prompt, click the **Install** button to continue. Click **Done** to finish the installation.
4. Go to **Settings > General > About > Certificate Trust Settings**. Under **Enable Full Trust For Root Certificates**, enable the **TFS Labs Certificate Authority** Certificate. A prompt for enabling a **Root Certificate** will appear, click **Continue** to complete the trust.
5. Open **Safari** on the iOS Device and go to **http​://tfs-ca01.corp.tfslabs.com/Certificates** to access the **Root and Subordinate Certificates**.
6. Click on the **TFS Labs Enterprise CA.crt** file. You should get a popup stating **This website is trying to download a configuration profile. Do you want to allow this?** and click the **Allow** button to confirm it. You will then get a prompt that the **SSL Profile** was downloaded. Click the **Close** button to continue.
7. Open the **Settings** on your iOS device and select the **Profile Downloaded** menu option. A prompt should appear with the **Install Profile** options for the **TFS Labs Enterprise CA**. Click the **Install** button. You may be prompted to enter your credentials. On the **Warning** prompt, click the **Install** button to continue. Click **Done** to finish the installation.

## Certificate Authority in Windows Server 2019 ##

* [Introduction](/blog/2020/03/09/certificate-authority-windows-server-2019)
* [Part 1 - Offline Root CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-1)
* [Part 2 - Subordinate CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-2)
* Part 3 - Deploy Root and Subordinate Certificate
* [Part 4 - Certificate Revocation Policies](/blog/2020/03/09/certificate-authority-windows-server-2019-part-4)
* [Part 5 - Configure Private Key Archive and Recovery](/blog/2020/03/09/certificate-authority-windows-server-2019-part-5)
* [Part 6 - Certificate Template Deployment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-6)
* [Part 7 - Certificate Auto-Enrollment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-7)
* [Part 8 - Final Steps](/blog/2020/03/09/certificate-authority-windows-server-2019-part-8)
