---
title: "Building a Certificate Authority in Windows Server 2019 Part 1 - Offline Root CA Setup"
slug: "certificate-authority-windows-server-2019-part-1"
aliases: [
    "/blog/2020/03/09/certificate-authority-windows-server-2019-part-1/",
    "/2020/03/09/certificate-authority-windows-server-2019-part-1/"
]
date: "2020-03-09T19:02:00-05:00"
author: "Matthew Burr"
summary: "The first step in establishing a two-tier Certificate Authority is the creation of the Root Certificate. The Root Certificate is the most important part of the Certificate Trust, and it is critical that this is setup properly and securely from day one."
tags: [
    "ADCS",
    "Guides",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00023/adcs.png"
featureImage: "/images/blog/00023/active-directory-certificate-services.png"
draft: false
---

<style type="text/css">
.pki-header {
    background-image: url("/images/blog/00023/pki-background.jpg");
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

## 1.1 Root Certificate Authority Server Setup ##

The Server that will be hosting the Offline Root Certificate Authority requires minimal resources in order to operate. It is only to ever be used for issuing Subordinate Certificates to other **TFS Labs** Domain Servers and is also used to revoke or add new Subordinate Certificates if necessary. It is also used to refresh the CRL at least once a year.

The Server is setup as a standalone Windows Server and is never meant to be a member of an Active Directory Domain or even have any network connections to it. This means that it will require some local Security modifications that are normally handled through Group Policy from Active Directory. Since there is no connection to Active Directory, these changes will need to be applied locally.

Since there are no Network Connections to and from this Virtual Machine, create a Virtual Floppy Disk that will be used for transferring files to and from the **TFS-ROOT-CA** Server. Name the file **RootCAFiles** (the file extension will vary based on whether you are using Hyper-V, VirtualBox or VMware) and store it in a location that will be available for all Virtual Machines that are being used. The first time that it is inserted into one of the Virtual Machines it will need to be formatted with the default settings.

Provision and configure a new Virtual Machine using the following settings:

1. Create a new Virtual Machine with the following settings:
   * Virtual CPU - **1**
   * Virtual Memory - **4096 MB**
   * Virtual Hard Disk - **60 GB**
   * Virtual Floppy Drive - **1**
   * Virtual Network Adapters - **0**
2. Install Windows Server 2019 Standard (Desktop Experience) with the default options.
3. Set the hostname of the Server to **TFS-ROOT-CA**. Set it to be a member of the **TFS-CA** Workgroup instead of a Domain.
4. Secure the local Administrator Account and additional User Accounts on the **TFS-ROOT-CA** Server:
   * Use a complex password for the Administrator Account and store it securely.
   * Ensure that there are no additional user accounts present on the Server. The Guest account should already be disabled by default and will be renamed in a further step in this guide.
   * The Administrator account will be renamed to **CA-Admin** at a further step in this guide.
5. There is no need to activate the Windows Server license, or even input a license key (make sure you are licensed though). If activation is ever needed on this Server, then the telephone option would be required in order to accomplish this since there is no network connection on this Server.
6. On the root of the **C:\ Drive** create a folder called **RootCA** (C:\RootCA). This folder will store the Root Certificate, Subordinate Certificate and other necessary Certificate Files that are needed during the entire implementation process.
7. Insert the **RootCAFiles** Virtual Floppy Disk into the Virtual Floppy Drive. Format the floppy disk with the default settings. Eject the disk when completed.
8. Open the **Local Group Policy Editor** Console (gpedit.msc), confirm the following settings, and make any changes if necessary:
   * Modify the **Local Computer Policy &gt; Computer Configuration > Windows Settings > Security Settings > Local Policies > Security Options** settings to match the following:
      * **Accounts: Administrator account status** - Enabled
      * **Accounts: Block Microsoft accounts** - Users can’t add or log on with Microsoft Accounts
      * **Accounts: Guest account status** - Disabled
      * **Accounts: Limit local account use of blank passwords to Console logon only** - Enabled
      * **Accounts: Rename administrator account** - CA-Admin
      * **Accounts: Rename guest account** - Administrator
      * **Interactive Logon: Don’t display last signed-in** - Enabled
      * **Interactive Logon: Don’t display username at sign-in** - Enabled
      * **Network security: Do not store LAN Manager hash value on next password change** - Enabled
      * **Network security: LAN Manager authentication level** - Send NTLMv2 response only. Refuse LM & NTLM
9. Open the **Local Security Policy** Console (secpol.msc), confirm the following settings, and make any changes if necessary:
    1. Modify the **Security Settings > Account Policies > Password Policy** settings:
       * **Enforce password history** - 24 passwords remembered
       * **Maximum password age** - 90 days
       * **Minimum password age** - 1 days
       * **Minimum password length** - 14 characters
       * **Password must meet complexity requirements** - Enabled
       * **Store passwords using reversible encryption** - Disabled
    2. Modify the **Security Settings > Account Policies > Account Lockout Policy** settings:
       * **Account lockout threshold** - 5 invalid login attempts
       * **Account lockout duration** - 30 minutes
       * **Reset account lockout counter after** - 30 minutes
10. Restart the **TFS-ROOT-CA** Server to apply the updated security settings.
11. **Optional:** Enable BitLocker in order to secure the **TFS-ROOT-CA** Virtual Machine while it is powered off or being stored in another location:
    1. Open the **Server Manager** Console (servermanager.exe), click on the **Manage** menu, and click on **Add Roles and Features** to start the installation wizard.
    2. On the **Before You Begin** screen, click the **Next** button to continue.
    3. On the **Installation Type** screen, select the option for **Role-based or feature-based installation** and click the **Next** button to continue.
    4. On the **Server Selection** screen, verify that the **TFS-ROOT-CA** Server is selected and click the **Next** button to continue.
    5. On the **Server Roles** screen, click the **Next** button to continue.
    6. On the **Features** screen, select the **BitLocker Drive Encryption** Feature. The installation wizard will ask to install the necessary management tools for the role. Click the **Add Features** button to continue.
    7. On the **Features** screen, click the **Next** button to continue.
    8. On the **Confirmation** screen, select the option to **Restart the destination server automatically if required**. When prompted with a warning about restarting the Server, click the **Yes** button (the Server must restart in order to continue). Click the **Install** button to continue.
    9. Once the **TFS-ROOT-CA** Server has restarted click the **Close** button on the **Installation Progress** screen.
    10. Open the **Local Group Policy Editor** Console (gpedit.msc) and modify the **Computer Configuration > Administrative Templates > Windows Components > BitLocker Drive Encryption > Operating System Drives** settings to match these settings:
        * **Require additional authentication at startup** - Enabled
        * **Allow BitLocker without a compatible TPM (requires a password or a startup key on a USB flash drive)** - Enabled
        * **Configure TPM startup:** Allow TPM
        * **Configure TPM startup PIN:** Allow startup PIN with TPM
        * **Configure TPM startup key:** Allow startup key with TPM
        * **Configure TPM startup key and PIN:** Allow startup key and PIN with TP
    11. Insert the **RootCAFiles** Virtual Floppy Disk.
    12. Open **File Explorer** and go to **This PC**. Right-click on the **C:\ Drive** and select **Turn on BitLocker**.
    13. On the **BitLocker Drive Encryption setup** screen click the **Next** button to continue.
    14. On the **Preparing your drive for BitLocker** screen click the **Next** button to continue.
    15. On the **BitLocker Drive Encryption setup** screen, click the **Next** button to continue.
    16. On the **Choose how to unlock your drive at startup** screen, select the option to **Enter a password**.
    17. On the **Create a password to unlock this drive** screen, enter the password that you want to use to unlock the drive at boot up. Make sure that you do not forget this password as it will require the Recovery Keys in order to get back into the **TFS-ROOT-CA** Virtual Machine. Ensure that you use a complex password for this and make it at least 14 characters in length. Click the **Next** button to continue.
    18. On the **How do you want to back up your recovery key?** screen, select the option to **Save to a file**. Save the file to the **A:\ Drive** (floppy disk). Click the **Next** button to continue.
    19. Eject the **RootCAFiles** Virtual Floppy Disk and then backup the recovery key to another device before you continue. This is critical in case there is an issue with the BitLocker password.
    20. On the **Choose how much of your drive to encrypt** screen, select the option to **Encrypt entire drive (slower but best for PCs and drives already in use)** and click the **Next** button.
    21. On the **Choose which encryption mode to use** screen, select the option for **New encryption mode (best for fixed drives on this devices)** and click the **Next** button to continue.
    22. On the **Are you ready to encrypt this drive?** screen, ensure that the **Run BitLocker system check box** is selected and then click the **Continue** button.
    23. When prompted, restart the **TFS-ROOT-CA** Server.
    24. Enter the password that you set for the drive to ensure that it is working correctly.
    25. Login to the **TFS-ROOT-CA** Server, you should receive a notification that the drive is encrypting. You can also check the status of BitLocker at anytime by going to **File Explorer**, then to **This PC**, right-clicking on the **C:\ Drive** and selecting the **Manage BitLocker** option.

## 1.2 Root CA CAPolicy.inf Installation ##

The **CAPolicy.inf** file is used to add configuration details to the Certificate at the time of creation. Create a file in the **C:\Windows** folder called **CAPolicy.inf** (ensure that it is saved with the **inf** extension and not the **txt** extension, otherwise these settings will be ignored). Copy the following contents into this file:

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
; Renewal information for the Root CA.
RenewalKeyLength=4096
RenewalValidityPeriod=Years
RenewalValidityPeriodUnits=10

; Disable support for issuing Certificates with the RSASSA-PSS algorithm.
AlternateSignatureAlgorithm=0

; The CRL publication period is the lifetime of the Root CA.
CRLPeriod=Years
CRLPeriodUnits=10

; The option for Delta CRL is disabled since this is a Root CA.
CRLDeltaPeriod=Days
CRLDeltaPeriodUnits=0
```

**Note:** You can update the OID number in the **InternalPolicy** section for your deployment if it is required. The OID number in this example is used in Microsoft examples, but it should work for your organization if it is only ever going to be used internally. You can register for one if you would like to through IANA.

**Signature Algorithm Support Issues**

The **AlternateSignatureAlgorithm=0** flag in the CAPolicy.inf file explicitly uses SHA256 for the algorithm instead of RSASSA-PSS. This can cause issues with some devices (especially iOS) and by ensuring that it is disabled you shouldn’t have issues with these certificates.

## 1.3 Active Directory Certificate Services Role Installation ##

Once the **TFS-ROOT-CA** Server has been installed and configured properly, the **Active Directory Certificate Services** Role needs to be installed.

1. Open the **Server Manager** Console (servermanager.exe), click on the **Manage** menu, and click on **Add Roles and Features** to start the installation wizard.
2. On the **Before You Begin** screen, click the **Next** button to continue.
3. On the **Installation Type** screen, select the option for **Role-based or feature-based installation** and click **Next** to continue.
4. On the **Server Selection** screen, verify that the **TFS-ROOT-CA** Server is selected and click Next.
5. On the **Server Roles** screen, select the **Active Directory Certificate Services** option. The installation wizard will ask to install the necessary management tools for the role. Click the **Add Features** button to continue.
6. On the **Server Roles** screen, click the **Next** button to continue.
7. On the **Features** screen, click the **Next** button to continue.
8. On the **Active Directory Certificate Services** screen, click the **Next** button to continue.
9. On the **Role Services** screen, select the option for **Certification Authority** and click the **Next** button to continue.
10. On the **Confirmation** screen, select the option to **Restart the destination server automatically if required**. When prompted with a warning about restarting the Server, click the **Yes** button (the Server must restart in order to continue). Click the **Install** button to continue.
11. Once the installation is completed, click the **Close** button.

## 1.4 Active Directory Certificate Services Role Configuration ##

Once the **Active Directory Certificate Services** Role has been added, it will need to be configured. In the process of configuring the role for the **TFS Labs** Domain, the following Root Certificate will be created:

|                              |                                             |
|:-----------------------------|:--------------------------------------------|
| **Cryptographic Provider**   | RSA#Microsoft Software Key Storage Provider |
| **Key Length**               | 4096 Bits                                   |
| **Signature Algorithm**      | SHA256RSA                                   |
| **Signature Hash Signature** | SHA256                                      |
| **CA Common Name**           | TFS Labs Certificate Authority              |
| **Validity Period**          | 10 Years                                    |

1. To begin the configuration of **Active Directory Certificate Services** on **TFS-ROOT-CA**, open the **Server Manager** Console (servermanager.exe). Click the **Notifications** icon in the upper-right hand corner and click the **Configure Active Directory Certificate Services on the destination server** link in the **Post-deployment Configuration** box.
2. On the **Credentials** screen, verify that the Administrator credentials is set to **TFS-ROOT-CA\CA-Admin** and click **Next** to continue.
3. On the **Role Services** screen, select the option for **Certification Authority** and click the **Next** button to continue.
4. On the **Setup Type** screen, the option for **Standalone CA** should be selected. The option for Enterprise CA is not available since this Server is not a Domain Member Server. Click the **Next** button to continue.
5. On the **CA Type** screen, ensure that the **Root CA** option is selected (the Subordinate CA option will be used later for the Enterprise CA). Click the **Next** button to continue.
6. On the **Private Key** screen, verify that the **Create a new private key** option is selected. This is because this a new CA installation and the Private Key is not being restored from a previous Server. Click the **Next** button to continue.
7. On the **Cryptography for CA** screen, make the following changes and then click the **Next** button to continue:
   * **Cryptographic Provider:** RSA#Microsoft Software Key Storage Provider
   * **Key Length:** 4096
   * **Hash Algorithm:** SHA256
8. On the **CA Name** screen, set the **Common Name (CN)** for the CA to **TFS Labs Certificate Authority** and click the **Next** button to continue.
9. On the **Validity Period** screen, set the validity period to **10 Years** and click the **Next** button to continue.
10. On the **CA Database** screen, make no changes to the database location and click the **Next** button to continue.
11. On the **Confirmation** screen, verify that the options are correct and click the **Configure** button to commit the changes.
12. On the **Results** screen, click the **Close** button.

**Certificate Validity Period**

It is not advised to have the Root Certificate and the Subordinate Certificate set to have the same Validity Period. For example, if both Certificates have a 5 Year expiration date, it is possible that the Root Certificate will expire before the Subordinate Certificate since it was signed first. If this happens it will be extremely difficult to re-sign both Certificates because they will both be invalid at the same time.

## 1.5 Root Certificate Authority CRL Configuration ##

The CRL Configuration for the Root CA is configured in this step to give greater control over when this takes place, and the time is extended to 52 weeks since the CRL does not need to be updated often on the Root CA. It also ensures that the Subordinate CA lifetime is extended from 1 Year to 5 Years.

**Active Directory Configuration Partition Distinguished Name**

To determine what the correct format of this name would be for your domain you can check it in only a few steps.

1. On one of your Domain Controllers, open the **Active Directory Users and Computers** Console (dsa.msc).
2. Go to the **View** menu and select **Advanced Features**.
3. Right-click on the root of your **Domain** and select **Properties**.
4. Go to the **Attribute Editor** tab.
5. Scroll down until you find the **distinguishedName** Attribute Field and click the **View** button.
6. Copy the value in the **Attribute Field**, this is the information needed for **Step 2** below.

Once the **Active Directory Configuration Partition Distinguished Name** has been determined, the rest of the configuration can continue.

1. Open an **Administrative Command Prompt**.
2. To define the **Active Directory Configuration Partition Distinguished Name**, run the following command:

```cmd
Certutil -setreg CA\DSConfigDN "CN=Configuration,DC=corp,DC=tfslabs,DC=com"
```

3. To define **Validity Period Units** for all issued certificates by this CA, run following commands:

```cmd
Certutil -setreg CA\ValidityPeriodUnits 5
Certutil -setreg CA\ValidityPeriod "Years"
```

4. To define **CRL Period Units** and **CRL Period**, run the following commands:

```cmd
Certutil -setreg CA\CRLPeriodUnits 52
Certutil -setreg CA\CRLPeriod "Weeks"
```

5. To define **CRL Overlap Period Units** and **CRL Overlap Period**, run the following commands:

```cmd
Certutil -setreg CA\CRLOverlapPeriodUnits 12
Certutil -setreg CA\CRLOverlapPeriod "Hours"
```

6. Restart the **Active Directory Certificate Services** service:

```cmd
net stop CertSvc
net start CertSvc
```

**CRL Renewal Period**

As defined in Step 4 in Section 1.5, the CRL Period on the Root CA is set to 52 weeks. This means that every 52 weeks you will need to power on the TFS-ROOT-CA Server and renew the CRL. You should set a reminder in your calendar to do perform this task every 50 weeks to ensure that it is renewed in time.

## 1.6 Enable Auditing on the Root Certificate Authority ##

Auditing is needed on any Server running **Active Directory Certificate Services**. This will write logs to the Windows Event Log whenever a Certificate is issued or revoked.

1. Open the **Local Security Policy** Console (secpol.msc) and modify the **Security Settings > Local Policies > Audit Policy > Audit object access** setting to audit **Success** and **Failure**.
2. Enable auditing for the Certificate Authority by running the following command from an **Administrative Command Prompt**:

```cmd
Certutil -setreg CA\AuditFilter 127
```

3. Restart the **Active Directory Certificate Services** Service.

## 1.7 Root Certificate Authority CDP and AIA Configuration ##

Before the **Subordinate Certificate Authority** can be properly configured, the **Certificate Revocation List** needs to be configured on the **Root CA Certificate**. This configuration will be present in the **Subordinate Certificate** that will be issued on the **Enterprise CA** which will be installed on the **TFS-CA01** Server.

1. Open the **Certification Authority** Console (certsrv.msc) for the **TFS-ROOT-CA** Server.
2. Right-click on **TFS Labs Certificate Authority** Server and select **Properties**.
3. On the **Extensions** tab, verify that the **CRL Distribution Point (CDP)** extension is selected and click the **Add** button.
4. Under the **Location** field, enter the following address and click the **OK** button:

```
http://pki.corp.tfslabs.com/CertData/<CaName><CRLNameSuffix><DeltaCRLAllowed>.crl
```

5. Back on the **Extensions** tab, verify that the **Include in CRLs. Clients use this to find Delta CRL locations.** and **Include in the CDP extension of issued certificates** options are selected for the location that was just entered.
6. Select the **file://<ServerDNSName>/CertEnroll/TFS%20Labs%20Certificate%20Authority.crl** list item and click the **Remove** button. Click the **Yes** button to confirm that you want to remove the location.
7. On the **Extensions** tab, verify that the **Authority Information Access (AIA)** extension is selected and click the **Add** button.
8. Under the **Location** field, enter the following address and click the **OK** button:

```
http://pki.corp.tfslabs.com/CertData/<ServerDNSName>_<CaName><CertificateName>.crt
```

9. Back on the **Extensions** tab, verify that the **Include in the AIA extension of issued certificates** option is selected for the location that was just entered.
10. Select the **file://<ServerDNSName>/CertEnroll/<ServerDNSName>_<CaName><CertificateName>.crt** list item and click the **Remove** button. Click the **Yes** button to confirm that you want to remove the location.
11. Click the **OK** button to commit the changes. When prompted to restart **Active Directory Certificate Services**, click the **Yes** button.
12. Verify that the settings are correct by running the following commands in an **Administrative Command Prompt**:

```cmd
Certutil -getreg CA\CRLPublicationURLs
Certutil -getreg CA\CACertPublicationURLs
```

13. In the **Certification Authority** Console (certsrv.msc), right-click on **Revoked Certificates** under **TFS Labs Certificate Authority** and select **All Tasks > Publish**.
14. On the **Publish CRL** window, verify that **New CRL** is selected and click the **OK** button.
15. Close the **Certification Authority** Console.

## 1.8 Root Certificate and CRL List Export ##

Exporting the **Root Certificate CRL List** is needed in order to make it available on the **TFS-CA01** Server. The links to these files were referenced in the Certificate configuration, so they will need to be copied to the **Subordinate CA** Server for users to access these files.

1. Add the **RootCAFiles** Virtual Floppy Disk to the **TFS-ROOT-CA** Virtual Machine.
2. Copy the contents of the **C:\Windows\System32\CertSrv\CertEnroll** folder to the **C:\RootCA** folder.
3. Open the **Certificates** Console (certlm.msc) under the **Local Computer Account** and export the **TFS Labs Certificate Authority** Certificate from the **Trusted Root Certification Authorities** Store as a **DER encoded binary**. Save the file as **C:\RootCA\TFS Labs Certificate Authority.cer**.
4. Copy the contents of the **C:\RootCA** folder to the **A:\ Drive**. The contents of the **A:\ Drive** should be the following:

```
A:\TFS Labs Certificate Authority.cer
A:\TFS Labs Certificate Authority.crl
A:\TFS-ROOT-CA_TFS Labs Certificate Authority.crt
```

5. Eject the **RootCAFiles** Virtual Floppy Disk.

## Certificate Authority in Windows Server 2019 ##

* [Introduction](/blog/2020/03/09/certificate-authority-windows-server-2019)
* Part 1 - Offline Root CA Setup
* [Part 2 - Subordinate CA Setup](/blog/2020/03/09/certificate-authority-windows-server-2019-part-2)
* [Part 3 - Deploy Root and Subordinate Certificate](/blog/2020/03/09/certificate-authority-windows-server-2019-part-3)
* [Part 4 - Certificate Revocation Policies](/blog/2020/03/09/certificate-authority-windows-server-2019-part-4)
* [Part 5 - Configure Private Key Archive and Recovery](/blog/2020/03/09/certificate-authority-windows-server-2019-part-5)
* [Part 6 - Certificate Template Deployment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-6)
* [Part 7 - Certificate Auto-Enrollment](/blog/2020/03/09/certificate-authority-windows-server-2019-part-7)
* [Part 8 - Final Steps](/blog/2020/03/09/certificate-authority-windows-server-2019-part-8)
