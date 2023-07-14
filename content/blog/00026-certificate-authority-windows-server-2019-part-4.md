---
title: "Building a Certificate Authority in Windows Server 2019 Part 4 - Certificate Revocation Policies"
slug: "certificate-authority-windows-server-2019-part-4"
aliases: [
    "/blog/2020/03/09/certificate-authority-windows-server-2019-part-4/",
    "/2020/03/09/certificate-authority-windows-server-2019-part-4/"
]
date: "2020-03-09T19:05:00-05:00"
author: "Matthew Burr"
summary: "For every Certificate Authority, it is inevitable that you are eventually going to need to revoke a Certificate for one reason or another. The Online Responder Role in Active Directory Certificate Services is capable of rapidly revoking Certificates and ensuring that users in your organization are notified as quickly as possible."
tags: [
    "ADCS",
    "Guides",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00026/adcs.png"
draft: false
---

<style type="text/css">
.pki-header {
    background-image: url("/images/blog/00026/pki-background.jpg");
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

**Note:** This guide is archived and is no longer updated on this website. For any future updates to this guide, please refer to the [version](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2019/adcs-windows-server-2019-part-4/) that can be found on [docs.mjcb.io](https://docs.mjcb.io/).

{{< toc >}}

## 4.1 Enable the Online Responder Role ##

The **OCSP Responder** role is a component of **Active Directory Certificate Services** that is used to reduce overhead with CRLs on your Network. It can check for revoked Certificates much faster than with regular CRLs and can update clients of their status.

1. On the **TFS-CA01** Server, open the **Server Manager** Console (servermanager.exe), click on the **Manage** menu, and click on **Add Roles and Features** to start the installation wizard.
2. On the **Before You Begin** screen, click the **Next** button to continue.
3. On the **Installation Type** screen, select the option for **Role-based or feature-based installation** and click the **Next** button to continue.
4. On the **Server Selection** screen, verify that the **TFS-CA01.corp.tfslabs.com** Server is selected and click **Next** to continue.
5. On the **Server Roles** screen, expand the **Active Directory Certificate Services** option and select the **Online Responder** role.
6. The installation wizard will ask to install the necessary management tools for the role. Click the **Add Features** button to continue.
7. On the **Server Roles** screen, click the **Next** button to continue.
8. On the **Features** screen, click the **Next** button to continue.
9. On the **Confirmation** screen, select the option to **Restart the destination server automatically if required**. When prompted with a warning about restarting the Server, click the **Yes** button (the Server must restart in order to continue). Click the **Install** button to continue.
10. Once the installation is completed, click the **Close** button.
11. Restart the **TFS-CA01** Server if it did not restart automatically as part of the installation.

## 4.2 Configure the Online Responder Role ##

Once the **OCSP Responder** role has been added to the **TFS-CA01** Server, it can be configured.

1. To begin the configuration of the **Online Responder** Service, open the **Server Manager** Console (servermanager.exe). Click the Notifications icon in the upper-right hand corner and click the **Configure Active Directory Certificate Services on the destination server** link in the **Post-deployment Configuration** box.
2. On the **Credentials** screen, verify that the **Administrator Credentials** is set to a Domain Administrator Account and click **Next** to continue.
3. On the **Role Services** screen, select the option for **Online Responder** and click **Next** to continue.
4. On the **Confirmation** screen, click on the **Configure** button to continue.
5. Once the installation is completed, click the **Close** button.

Once the Role has been installed, verify that the OCSP folder is present in the **IIS Manager** Console. To do this, open the **Internet Information Services (IIS) Manager** Console and expand the **TFS-CA01 > Sites > Default Web Site** folder. The **ocsp** folder should be listed.

If the **ocsp** folder is not present, run the following command in an **Administrative Command Prompt**:

```cmd
Certutil -vocsproot
```

The **IIS Service** will need to be restarted afterwards if this command is run.

## 4.3 Add the OCSP URL to the Enterprise CA ##

Once the **OCSP Role** has been installed, the URL can now be added to the **Subordinate CA** Certificate.

1. In the **Certification Authority** Console (certsrv.msc) on the **TFS-CA01** Server, in the Console tree right-click on **TFS Labs Enterprise CA**, and then select **Properties**.
2. On the **Extensions** tab, under **Select extension**, select **Authority Information Access (AIA)**, and then click **Add**.
3. In the **Location** field, enter in **http​://ocsp.corp.tfslabs.com/ocsp** and then click **OK**.
4. Select **Include in the online certificate status protocol (OCSP) extension** and click the **OK** button (ensure that the **Include in the AIA extension of issued certificates** is not selected).
5. When prompted by the Certification Authority dialog box to restart **Active Directory Certificate Services**, click **Yes**.

## 4.4 Configure and Publish the OCSP Response Signing Certificate ##

The **OCSP Response Signing Certificate** will be used by the **OCSP Responder Service** in order to manage the OCSP Services for the organization.

1. Open the **Certification Authority** Console (certsrv.msc) on the **TFS-CA01** Server, ensure that the **TFS Labs Enterprise CA** Server is expanded in the Console tree.
2. Right-click on **Certificate Templates** and then click **Manage**. The **Certificate Templates Console** window will open and displays the certificate templates stored in **Active Directory**.
3. In the details pane, right-click on the **OCSP Response Signing** template and then click **Duplicate Template**.
4. On the **Properties of New Template** window, click on the **General** tab. Change the name of the template from **Copy of OCSP Response Signing** to **TFS Labs OCSP Response Signing**.
5. On the **Security** tab select **Authenticated Users** and enable the **Enroll** permission. Click **OK**.
6. On the **Security** tab add the **TFS-CA01** Server and enable the **Read** and **Enroll** permission. Click **OK**.
7. Close the **Certificate Templates Console**.
8. In the **Certification Authority** Console, right-click **Certificate Templates**, then select **New > Certificate Template to Issue**.
9. In the **Enable Certificate Templates** dialog box, click **TFS Labs OCSP Response Signing** and then click **OK**.

## 4.5 Configure Revocation Configuration on the Online Responder ##

Once the **OCSP Certificates** have been configured, the **OCSP Responder Role** can now be configured.

1. Open the **Online Responder Management** Console (ocsp.msc) on the **TFS-CA01** Server.
2. Right-click on **Revocation Configuration** and then click **Add Revocation Configuration**.
3. On the **Getting started with adding a revocation configuration** screen, click **Next** to continue.
4. On the **Name the Revocation Configuration** screen, enter **TFS Labs Enterprise CA** in the **Name** field, and then click **Next** to continue.
5. On the **Select CA Certificate Location** screen, ensure that **Select a certificate for an Existing enterprise CA** is selected, then click **Next** to continue.
6. On the **Choose CA Certificates** screen, ensure that **Browse CA certificates published in Active Directory** is selected, and then click **Browse**.
7. On the **Select Certification Authority** dialog box, ensure that **TFS Labs Enterprise CA** is selected, and then click **OK**. Click the **Next** button to continue.
8. On the **Select Signing Certificate** screen, use the default options and then click **Next** to continue.
9. On the **Revocation Provider** screen, click the **Provider** button.
10. For the **LDAP and HTTP locations** in the **Base CRLs** window, clear the Refresh CRLs based on their validity periods. In **the Update CRLs at this refresh interval (min)** field, enter **15**, and then click **OK**.
11. Click **Finish** to close the window.
12. In the **Online Responder Management** Console, expand **Array Configuration** and then click **TFS-CA01.corp.tfslabs.com**.
13. Review the **Revocation Configuration Status** in the middle pane to ensure there is a signing certificate present and the status reports as **OK**. If so, the provider is successfully using the current configuration.

## 4.6 Add the OCSP URL to Group Policy ##

Once the **OCSP Role** has been installed, the URL can now be added to the **Subordinate CA** Certificate in Group Policy to ensure that it is being deployed to the organization.

1. Open the **Group Policy Management** Console (gpmc.msc) on the **TFS-DC01** Server.
2. In the root of the **corp.tfslabs.com** Domain, right-click on the **TFS Labs Certificates** GPO and select the **Edit** option.
3. In the **Group Policy Management Editor** window, open the **Computer Configuration > Policies > Windows Settings > Security Settings > Public Key Policies** node.
4. Open the **Intermediate Certification Authorities** folder, right-click on the **TFS Labs Enterprise CA** Certificate and select **Properties**.
5. In the **TFS Labs Enterprise CA** Properties window, click on the **OCSP** tab and in the text field to the left of the **Add URL** button, enter **http​://ocsp.corp.tfslabs.com/ocsp** and click the **Add URL** button. Click the **OK** button to close the window.
6. Close the **Group Policy Management** Console.
7. Once the Certificates have been added to Group Policy, allow up to 1 hour for the Certificates to be deployed to the entire **Active Directory** Forest.

## 4.7 Verify OCSP Status ##

Once the **OCSP Role** has been configured, you can now verify if it is working correctly within the PKI Infrastructure.

1. On the **TFS-CA01** Server, open the **Enterprise PKI** Console (PKIView.msc).
2. Under the **Enterprise PKI** node, click on the **TFS Labs Certificate Authority** Server and check that the status of **OCSP** is **OK**.

If there are no issues being reported with OCSP then you can proceed to the next step. If there is an issue with OCSP, then the most likely issue is with the **CA Exchange Certificate**. It most likely does not know about OCSP since it was generated before the OCSP Role was configured, so it will need to be recreated.

1. Open the **Certification Authority** Console (certsrv.msc) on the **TFS-CA01** Server, ensure that the **TFS Labs Enterprise CA** Server is expanded in the Console tree.
2. Under the **Issued Certificates** folder, look for a Certificate using the **CA Exchange (CAExchange)** Template.
3. Right-click on the Certificate and select the **All Tasks > Revoke Certificate** option.
4. On the **Certificate Revocation** window, click the **Yes** button to revoke the Certificate.
5. Open an **Administrative Command Prompt** and run the following command request a new certificate:

```cmd
Certutil -cainfo xchg
```

6. On the **TFS-CA01** Server, open the **Enterprise PKI** Console (PKIView.msc).
7. Under the **Enterprise PKI** node, click on the **TFS Labs Certificate Authority** Server and check that the status of **OCSP** is **OK**.

## 4.8 Verify OCSP Connectivity ##

To verify that the **OCSP Responder** Server can communicate with devices on the **TFS Labs** Domain a certificate will need to be exported and run through the **URL Retrieval Tool**. This can be easily accomplished on the **TFS-CA01** Server.

1. On the **TFS-CA01** Server, export the **TFS Labs Enterprise CA** Certificate as a **DER Encoded Binary** the root of the **C:\ Drive** (C:\TFS Labs Enterprise CA.cer).
2. Run the following command in an **Administrative Command Prompt** to launch the **URL Retrieval Tool**:

```cmd
Certutil -URL “C:\TFS Labs Enterprise CA.cer”
```

3. In the **Retrieve** box, select the option for **OCSP (from AIA)** and then click the **Retrieve** button.
4. If there is no issue with the OCSP Service, the result returned should be: **Verified OCSP (0.0) http​://ocsp.corp.tfslabs.com/ocsp**.

**OCSP Status Results**

**Note:** This step may not return a result immediately and that is nothing to be concerned about. If you run this test and nothing is returned in the results, you may want to run this test later using the **TFS-WIN10** Workstation once Certificate Deployments is completed.

## Certificate Authority in Windows Server 2019 ##

* [Introduction](/blog/2020/03/09/certificate-authority-windows-server-2019)
* [Part 1 - Offline Root CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-1)
* [Part 2 - Subordinate CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-2)
* [Part 3 - Deploy Root and Subordinate Certificate](/blog/2020/03/09/certificate-authority-windows-server-2019-part-3)
* Part 4 - Certificate Revocation Policies
* [Part 5 - Configure Private Key Archive and Recovery](/blog/2020/03/09/certificate-authority-windows-server-2019-part-5)
* [Part 6 - Certificate Template Deployment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-6)
* [Part 7 - Certificate Auto-Enrollment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-7)
* [Part 8 - Final Steps](/blog/2020/03/09/certificate-authority-windows-server-2019-part-8)
