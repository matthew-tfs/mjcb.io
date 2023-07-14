---
title: "Building a Certificate Authority in Windows Server 2019 Part 2 - Subordinate CA Setup"
slug: "certificate-authority-windows-server-2019-part-2"
aliases: [
    "/blog/2020/03/09/certificate-authority-windows-server-2019-part-2/",
    "/2020/03/09/certificate-authority-windows-server-2019-part-2/"
]
date: "2020-03-09T19:03:00-05:00"
author: "Matthew Burr"
summary: "Once the Root CA has been created, the Subordinate CA needed to be setup. This Subordinate CA is needed to do all of the work for the Certificate Authority. It will issue all Certificates to the organization and handle the day to day operations."
tags: [
    "ADCS",
    "Guides",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00024/adcs.png"
draft: false
---

<style type="text/css">
.pki-header {
    background-image: url("/images/blog/00024/pki-background.jpg");
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

**Note:** This guide is archived and is no longer updated on this website. For any future updates to this guide, please refer to the [version](https://docs.mjcb.io/microsoft/windows-server/windows-server-roles-features/adcs/adcs-windows-server-2019/adcs-windows-server-2019-part-2/) that can be found on [docs.mjcb.io](https://docs.mjcb.io/).

{{< toc >}}

## 2.1 Subordinate Certificate Authority Server Setup ##

Provision and configure a new Virtual Machine called **TFS-CA01** and install Windows Server 2019 Standard (Desktop Experience) using the following settings:

* Virtual CPU - **2**
* Virtual Memory - **8192 MB**
* Virtual Hard Disk - **60 GB**
* Virtual Floppy Drive - **1**
* Virtual Network Adapters - **1**

Join the **TFS-CA01** Virtual Machine to the **TFS Labs** Domain. Once it has been completely setup you can proceed to the next steps on configuring the **Active Directory Certificate Services** role.

## 2.2 Create CNAME Records in DNS ##

By splitting the **Active Directory Certificate Authority** services into separate **CNAME** records, it would make it possible to split up the role in the future if needed. On the **TFS-DC01** Domain Controller, create the following **CNAME** records pointing the **TFS-CA01** Server:

1. Open the **DNS Manager** Console (dnsmgmt.msc).
2. Under the **DNS** Node, expand the **TFS-DC01** Server and then expand **Forward Lookup Zones**. Select and the **corp.tfslabs.com** Zone. Right-click **New Alias (CNAME)** (repeat for steps 3 to 4).
3. In **Alias name (uses parent domain if left blank)**, enter **OCSP** as the name. In the **Fully qualified domain name (FQDN)** field, enter **tfs-ca01.corp.tfslabs.com.** and then click **OK**.
4. In **Alias name (uses parent domain if left blank)**, enter **PKI** as the name. In the **Fully qualified domain name (FQDN)** field, enter **tfs-ca01.corp.tfslabs.com.** and then click **OK**.
5. Close the **DNS Manager** Console.

## 2.3 Enterprise CA CAPolicy.inf Installation ##

On the **TFS-CA01** Server, create a file in the **C:\Windows** folder called **CAPolicy.inf** (ensure that it is saved with the **inf** extension and not with the **txt** extension, otherwise these settings will be ignored). Copy the following contents into this file:

```ini
[Version]
Signature=”$Windows NT$”

[PolicyStatementExtension]
Policies=AllIssuancePolicy,InternalPolicy
Critical=FALSE

; AllIssuancePolicy is set to the OID of 2.5.29.32.0 to ensure all Certificate templates are available.
[AllIssuancePolicy]
OID=2.5.29.32.0

[InternalPolicy]
OID=1.2.3.4.1455.67.89.5
Notice="The TFS Labs Certification Authority is an internal resource. Certificates that are issued by this Certificate Authority are for internal usage only."
URL=http://pki.corp.tfslabs.com/cps.html

[Certsrv_Server]
; Renewal information for the Enterprise CA.
RenewalKeyLength=4096
RenewalValidityPeriod=Years
RenewalValidityPeriodUnits=5

; Disable support for issuing Certificates with the RSASSA-PSS algorithm.
AlternateSignatureAlgorithm=0

; Load all of the templates by default.
LoadDefaultTemplates=1
```

**Note:** You can update the OID number in the **InternalPolicy** section for your deployment if it is required. The OID number in this example is used in Microsoft examples, but it should work for your organization if it is only ever going to be used internally. You can register for one if you would like to through IANA.

**Signature Algorithm Support Issues**

The **AlternateSignatureAlgorithm=0** flag in the CAPolicy.inf file explicitly uses SHA256 for the algorithm instead of RSASSA-PSS. This can cause issues with some devices (especially iOS) and by ensuring that it is disabled you shouldn’t have issues with these certificates.

## 2.4 Active Directory Certificate Services Role Installation ##

The **Active Directory Certificate Services** Role needs to be installed on the **TFS-CA01** Server now that the **CAPolicy.inf** file is in place and ready to be used.

1. Open the **Server Manager** Console (servermanager.exe), click on the **Manage** menu, and click on **Add Roles and Features** to start the installation wizard.
2. On the **Before You Begin** screen, click the **Next** button to continue.
3. On the **Installation Type** screen, select the option for **Role-based or feature-based installation** and click the **Next** button to continue.
4. On the **Server Selection** screen, verify that the **TFSCA-01.corp.tfslabs.com** Server is selected and click **Next**.
5. On the **Server Roles** screen, select the **Active Directory Certificate Services** option.
6. The installation wizard will ask to install the necessary management tools for the role. Click the **Add Features** button to continue.
7. On the **Server Roles** screen, click the **Next** button to continue.
8. On the **Features** screen, click the **Next** button to continue.
9. On the **Active Directory Certificate Services** screen, click the **Next** button to continue.
10. On the **Role Services** screen, select the option for **Certification Authority** and **Certificate Authority Web Enrollment**. The installation wizard will ask to install the necessary **Role and Features for IIS**. Click the **Add Features** button to continue. Once that has been completed, click the **Next** button to continue.
11. On the **Web Server Role (IIS)** screen, click the **Next** button to continue.
12. On the **Select Role Services** screen, click the **Next** button to continue.
13. On the **Confirmation** screen, select the option to **Restart the destination server automatically if required**. When prompted with a warning about restarting the Server, click the **Yes** button (the Server must restart in order to continue). Click the **Install** button to continue.
14. Once the installation is completed, click the **Close** button.

## 2.5 Active Directory Certificate Services Role Configuration ##

Once the **Active Directory Certificate Services** role has been added, it will need to be properly configured. In the process of configuring the role for the **TFS Labs** Domain, the following will be configured:

| **Subordinate Certificate Setting** | Value                                       |
|:------------------------------------|:--------------------------------------------|
| **Cryptographic Provider**          | RSA#Microsoft Software Key Storage Provider |
| **Key Length**                      | 4096 Bits                                   |
| **Signature Algorithm**             | SHA256RSA                                   |
| **Signature Hash Signature**        | SHA256                                      |
| **CA Common Name**                  | TFS Labs Enterprise CA                      |
| **Validity Period**                 | 5 Years (Configured from Root CA)           |

1. To begin the configuration of **Active Directory Certificate Services**, open the **Server Manager** Console (servermanager.exe). Click the **Notifications** icon in the upper-right hand corner and click the **Configure Active Directory Certificate Services on the destination server** link in the **Post-deployment Configuration** box.
2. On the **Credentials** screen, verify that the Administrator credentials is set to a **Domain Administrator Account** and click the **Next** button to continue. If you do not use a Domain Administrator account, then the installation will not allow you to install the **Active Directory Certificate Services** service correctly.
3. On the **Role Services** screen, select the options for **Certification Authority** and **Certification Authority Web Enrollment** and click **Next** to continue.
4. On the **Setup Type** screen, select the option for **Enterprise CA** and click the **Next** button to continue.
5. On the **CA Type** screen, ensure that the **Subordinate CA** option is selected and click the **Next** button to continue.
6. On the **Private Key** screen, verify that the **Create a new private key** option is selected. This is because this a new CA installation and the Private Key is not being restored from a previous Server. Click the **Next** button to continue.
7. On the **Cryptography for CA** screen, make the following changes and then click the **Next** button to continue:
   * **Cryptographic Provider:** RSA#Microsoft Software Key Storage Provider
   * **Key Length:** 4096
   * **Hash Algorithm:** SHA256
8. On the **CA Name** screen, set the **Common Name (CN)** for the CA to **TFS Labs Enterprise CA** and click the **Next** button to continue.
9. On the **Certificate Request** screen, accept the default location for saving the **Certificate Request** file. It will be saved as **C:\TFS-CA01.corp.tfslabs.com_corp-TFS-CA01-CA.req**. Click the **Next** button to continue.
10. On the **CA Database** screen, make no changes to the database location and click the **Next** button to continue.
11. On the **Confirmation** screen, verify that the options are correct and click the **Configure** button to commit the changes.
12. On the **Results** screen, click the **Close** button.

Once the Request file has been successfully generated, it will need to be copied to the **RootCAFiles** Virtual Floppy Disk since the **Root CA** on **TFS-ROOT-CA** needs the request file in order to issue the **Subordinate Certificate**:

1. Add the **RootCAFiles** Virtual Floppy Disk to the **TFS-CA01** Virtual Machine.
2. Browse to the **C:\ Drive** and copy the **TFS-CA01.corp.tfslabs.com_corp-TFS-CA01-CA.req** to the **A:\ Drive**.
3. Leave the **RootCAFiles** Virtual Floppy Disk inserted.

## 2.6 Install the Root Certificate ##

On the **TFS-CA01** Server, the TFS Labs Root Certificate needs to be installed to complete the Certificate Chain after the Subordinate Certificate has been issued:

1. Open the **A:\ Drive** folder.
2. Right-click on the **TFS Labs Certificate Authority.cer** file and select the **Install Certificate** option.
3. On the **Certificate Import Wizard** screen, select the **Local Machine** for the **Store Location** and click the **Next** button.
4. When prompted for the **Certificate Store** location, click the **Browse** button and select the **Trusted Root Certification Authorities** store and click the **OK** button. Click the **Next** button to continue.
5. Click the **Finish** button to complete the wizard.
6. Click the **OK** button to close the wizard.

## 2.7 Create the CertData Virtual Directory ##

On the **TFS-CA01** Server, create a folder that will be used to host important Certificate Files for the Domain Users, Workstations and Servers:

1. On the Root of the **C:\ Drive**, create a folder called **CertData** (C:\CertData).
2. Open the **A:\ Drive** and copy the **TFS Labs Certificate Authority.crl** and **TFS-ROOT-CA_TFS Labs Certificate Authority.crt** files to the **C:\CertData** folder.
3. Eject the **RootCAFiles** Virtual Floppy Disk.
4. Open the **Internet Information Services (IIS) Manager** Console.
5. On the **Connections** pane, expand **TFS-CA01** and then expand **Sites**.
6. Right-click on **Default Web Site** and select **Add Virtual Directory**.
7. On **Add Virtual Directory** page, in **Alias**, enter **CertData**. For the **Physical path**, enter **C:\CertData** and then click **OK**.
8. In the **Connections** pane, under the **Default Web Site**, ensure the **CertData** virtual directory is selected.
9. In the **CertData Home** pane, double-click on **Directory Browsing**.
10. In **Actions** pane click **Enable**.
11. Close the **Internet Information Services (IIS) Manager** Console.

## 2.8 Enable Double Escaping ##

On the **TFS-CA01** Server, enable Double Escaping in IIS in order to allow for proper CRL publication on the **TFS Labs** Domain.

1. Open an **Administrative Command Prompt**.
2. Type **cd C:\Windows\System32\inetsrv\** and press **ENTER**.
3. Type following command and press **ENTER**:

```cmd
Appcmd set config "Default Web Site" /section:system.webServer/Security/requestFiltering -allowDoubleEscaping:True
```

4. Restart IIS service by typing **iisreset** and pressing **ENTER**.
5. Close the Command Prompt.

## 2.9 Subordinate Certificate Creation ##

Once the Subordinate CA has been configured and the request successfully generated, it is now time to complete the Subordinate CA Certificate by using the **TFS-ROOT-CA** Server.

1. On the **TFS-ROOT-CA** Server insert the **RootCAFiles** Virtual Floppy Disk.
2. Copy the **A:\TFS-CA01.corp.tfslabs.com_corp-TFS-CA01-CA.req** file to the **C:\RootCA** folder.
3. On the **TFS-ROOT-CA** Server open **Certification Authority** Console (certsrv.msc).
4. Right-click on the **TFS Labs Certificate Authority** Server, select **All Tasks** and click on **Submit new request…**.
5. Browse to the **C:\RootCA** folder and select the **TFS-CA01.corp.tfslabs.com_corp-TFS-CA01-CA.req** file that was copied from **TFS-CA01**. Click the **Open** button to continue.
6. Once the request has been submitted, go to the **Pending Requests** folder to see the Certificate. It should be identified as **Request ID 2**, the first request being the Self-Signed Root Certificate (not shown).
7. To issue the Certificate, right-click on the request, select **All Tasks** and click on **Issue**.
8. Once the Certificate has been issued, go to the **Issued Certificates** folder to see the Certificate. It is still identified as **Request ID 2**. Double-click on the Certificate to open the **Certificate Properties** window.
9. On the **Details** tab, click the **Copy to File...** button.
10. On the first screen of the **Certificate Export Wizard**, click the **Next** button to continue.
11. On the **Export File Format** screen, select the **Cryptographic Message Syntax Standard - PKCS #7 Certificate (.P7B)** format. Select the option to **Include all certificates in the certification path if possible** and click the **Next** button.
12. For the file name, enter **C:\RootCA\TFS Labs Enterprise CA.p7b** and click **Next** to continue.
13. Click the **Finish** button to complete the wizard.
14. Copy the **C:\RootCA\TFS Labs Enterprise CA.p7b** file to the **A:\ Drive**.
15. Eject the **RootCAFiles** Virtual Floppy Disk.
16. On the **TFS-CA01** Server insert the **RootCAFiles** Virtual Floppy Disk. Copy the **A:\TFS Labs Enterprise CA.p7b** file to root of the **C:\ Drive**.
17. On the **TFS-CA01** Server, open the **Certification Authority** Console (certsrv.msc).
18. Right-click on the **TFS Labs Enterprise CA** Server, go to **All Tasks** and select the option to **Install CA Certificate…**.
19. Browse to the **C:\ Drive** and select the **TFS Labs Enterprise CA.p7b** file and click **Open**.
20. If there were no errors in installing the Certificate, right-click on the **TFS Labs Enterprise CA** Server, go to **All Tasks** and click the **Start Service** option.
21. The Subordinate Certificate has now been installed successfully, and the Subordinate Certificate Authority is now running.

Eject the **RootCAFiles** Virtual Floppy Disk.

## 2.10 Set Maximum Certificate Age ##

Since all Certificates that will be created by the Subordinate CA will only be valid for 1 year, the setting can be forced so that a Certificate Template does not attempt to sign a Certificate for a longer time period.

1. To define the maximum age of any Certificate that the Subordinate CA issues, run the following commands from an **Administrative Command Prompt**:

```cmd
Certutil -setreg CA\ValidityPeriodUnits 1
Certutil -setreg CA\ValidityPeriod "Years"
```

2. Once that is completed, restart the **Active Directory Certificate Services** service.

## 2.11 Subordinate Certificate Authority CDP and AIA Configuration ##

Before the **Subordinate CA CDP and AIA Configuration** can be added to the **Subordinate Certificate**, the **CertEnroll** folder in IIS will need to have **Directory Browsing** enabled:

1. Open the **Internet Information Services (IIS) Manager** Console.
2. On the **Connections** pane, expand **TFS-CA01** and then expand **Sites**.
3. In the **Connections** pane, under the **Default Web Site**, ensure the **CertEnroll** virtual directory is selected.
4. In the **CertData** pane, double-click on **Directory Browsing**.
5. In **Actions** pane click **Enable**.
6. Close the **Internet Information Services (IIS) Manager** Console.

Once the **Directory Browsing** option has been enabled, the **CDP and AIA entries** can now be added:

1. Open the **Certification Authority** Console (certsrv.msc).
2. Right-click on **TFS Labs Enterprise CA** Server and select **Properties**.
3. On the **Extensions** tab, verify that the **CRL Distribution Point (CDP)** extension is selected and click the **Add** button.
4. Under the **Location** field, enter the following address and click the **OK** button:

```
http://pki.corp.tfslabs.com/CertEnroll/<CaName><CRLNameSuffix><DeltaCRLAllowed>.crl
```

5. Back on the **Extensions** tab, verify that the **Include in CRLs. Clients use this to find Delta CRL locations.** and **Include in the CDP extension of issued certificates** options are selected for the location that was just entered.
6. On the **Extensions** tab, verify that the **Authority Information Access (AIA)** extension is selected and click the **Add** button.
7. Under the **Location** field, enter the following address and click the **OK** button:

```
http://pki.corp.tfslabs.com/CertEnroll/<ServerDNSName>_<CaName><CertificateName>.crt
```

8. Back on the Extensions tab, verify that the **Include in the AIA extension of issued certificates** option is selected for the location that was just entered.
9. Click the **OK** button to commit the changes. When prompted to restart **Active Directory Certificate Services**, click the **Yes** button.
10. Verify that the settings are correct by running the following commands in an **Administrative Command Prompt**:

```cmd
Certutil -getreg CA\CRLPublicationURLs
Certutil -getreg CA\CACertPublicationURLs
```

11. In the **Certification Authority** Console, right-click on **Revoked Certificates** under **TFS Labs Enterprise CA** and select **All Tasks > Publish**.
12. On the **Publish CRL** window, verify that **New CRL** is selected and click the **OK** button.

## 2.12 Enable Auditing on the Subordinate Certificate Authority ##

Auditing is needed on any Server running **Active Directory Certificate Services**. This will write logs to the Windows Event Log whenever a Certificate is issued or revoked.

1. Open the **Local Security Policy** Console (secpol.msc) and modify the **Security Settings > Local Policies > Audit Policy > Audit object access** setting to audit **Success** and **Failure**.
2. Enable auditing for the Certificate Authority by running the following command from an **Administrative Command Prompt**:

```cmd
Certutil -setreg CA\AuditFilter 127
```

3. Restart the **Active Directory Certificate Services** Service.

## 2.13 CPS Document Placeholders ##

Open the **C:\inetpub\wwwroot** folder and create a file called **cps.html** (C:\inetpub\wwwroot\cps.html). This is a very basic placeholder for the **Certification Practice Statement** that can be filled out later based on the requirements of your organization.

```html
<html>
<head>
<title>TFS Labs Certification Practice Statement</title>
</head>
<body>
TFS Labs Certification Practice Statement
</body>
</html>
```

## 2.14 Verify PKI Infrastructure ##

Before continuing with the **OCSP Role** configuration and the deployment of the Root and Intermediate Certificates to the **TFS Labs** Domain, verify that there are no issues with the **Active Directory Certificate Services** Configuration:

1. On the the **TFS-CA01** Server, open the **Enterprise PKI** Console (PKIView.msc).
2. Under the **Enterprise PKI** node, click on the **TFS Labs Certificate Authority** Server and check that the status of the **CA**, **AIA** and **CDP** is **OK**.

If there are no issues with the **Enterprise PKI** configuration, then the initial deployment is now complete.

## 2.15 Optional: Create Folder for Certificate Files ##

On the **TFS-CA01** Server, create a folder that will be used to host the Root and Subordinate Certificate Files for ease of deployment to internal users:

1. On the Root of the **C:\ Drive**, create a folder called **Certificates** (C:\Certificates).
2. Open the **Internet Information Services (IIS) Manager** Console.
3. On the **Connections** pane, expand **TFS-CA01** and then expand **Sites**.
4. Right-click on **Default Web Site** and select **Add Virtual Directory**.
5. On **Add Virtual Directory** page, in **Alias**, enter **Certificates**. For the **Physical path**, enter **C:\Certificates** and then click **OK**.
6. In the **Connections** pane, under the **Default Web Site**, ensure the **Certificates** virtual directory is selected.
7. In the **Certificates Home** pane, double-click on **Directory Browsing**.
8. In the **Actions** pane, click the **Enable** button.
9. Close the **Internet Information Services (IIS) Manager** Console.

## Certificate Authority in Windows Server 2019 ##

* [Introduction](/blog/2020/03/09/certificate-authority-windows-server-2019)
* [Part 1 - Offline Root CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-1)
* Part 2 - Subordinate CA Setup
* [Part 3 - Deploy Root and Subordinate Certificate](/blog/2020/03/09/certificate-authority-windows-server-2019-part-3)
* [Part 4 - Certificate Revocation Policies](/blog/2020/03/09/certificate-authority-windows-server-2019-part-4)
* [Part 5 - Configure Private Key Archive and Recovery](/blog/2020/03/09/certificate-authority-windows-server-2019-part-5)
* [Part 6 - Certificate Template Deployment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-6)
* [Part 7 - Certificate Auto-Enrollment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-7)
* [Part 8 - Final Steps](/blog/2020/03/09/certificate-authority-windows-server-2019-part-8)
