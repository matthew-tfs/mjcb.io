---
title: "OpenSSH Client and OpenSSH Server on Windows"
slug: "openssh-client-and-openssh-server-on-windows"
date: "2019-01-15T19:49:00"
author: "Matthew Burr"
summary: "One of the biggest and most welcome changes to the Windows 10 1809 update and in Windows Server 2019 was the addition of the OpenSSH Client and OpenSSH Server features. Certainly, this was something that I never expected to happen, but it is a welcome change."
tags: [
    "Microsoft",
    "Networking",
    "SSH",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00011/openssh-on-windows.png"
draft: false
---

One of the biggest and most welcome changes to the Windows 10 1809 update and in Windows Server 2019 was the addition of the OpenSSH Client and OpenSSH Server features. It is now incredibly easy to SSH into a Windows device using native tools that are now built-in to the operating system. In the past this was only possible by using complicated tools and odd workarounds to get an SSH-like implementation to work correctly. You can also use the SSH commands right from the Windows command line (CMD, PowerShell), without needing third-party tools or odd commands. This is a very nice change that Microsoft has added, since it is much easier to remotely manage a Windows through the Command Line instead of the GUI, and having the ability to use the same tools on both Windows and Linux is a big advantage.

**Note:** I have only tested this on Windows 10 Pro for Workstations (Version 1809 Build 17763.253) and on Windows Server 2019 Standard.

{{< toc >}}

## Installation ##

Installing the OpenSSH Client and OpenSSH Server options can be done through either the Settings app or through the Command Line.

## GUI Installation ##

To install through the GUI, go to **Settings** -> **Apps** -> **Apps &amp; Features** -> **Manage optional features** -> **Add a feature**. You should see the two options in the list of available features that can be installed:

* **OpenSSH Client**
* **OpenSSH Server**

![OpenSSH Features](/images/blog/00011/openssh-features-settings-app.png "These two options should be present. If not, there is a problem with the version of Windows.")

Highlight each option and click the **Install** button to install the feature. If the options are missing, then you are not on the latest version/patch level of Windows 10 or Windows Server 2019. A restart should not be necessary after adding these features, but the newly installed services will need to be started and configured to automatically start at boot.

### Command Line Installation ###

To install through the Command Line, open an elevated PowerShell console to proceed. To confirm that you can install the OpenSSH Client and OpenSSH Server features, run the following command:

```powershell
Get-WindowsCapability -Online | findstr OpenSSH

Name  : OpenSSH.Client~~0.0.1.0
Name  : OpenSSH.Server~~0.0.1.0
```

If those two options are present, run the following two commands to install the features:

```powershell
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

![OpenSSH CLI Installation](/images/blog/00011/openssh-cli-installation-success.png "If the installation was successful, you should see a similar message.")

Like installing through the Settings app, a restart should not be necessary after adding these features. The newly installed services will need to be started and configured to automatically start at boot.

## Services Start ##

To start using OpenSSH Server, the associated services will need to be started first. This can be done through either the Services MMC console or through the Command Line.

### Services MMC Console ###

Open the Services MMC Console (**Win + R,** and type in **services.mmc**) and find the two Services that are related to OpenSSH Server:

* **OpenSSH Authentication Agent**
* **OpenSSH Server**

Right-click on each service and select **Properties**. Under Service Status, click the **Start** button to start the service. To configure the service to start automatically at boot, change the **Startup Type** drop-down menu to **Automatic** and click **Apply**.</p>

![Windows MMC Console](/images/blog/00011/openssh-services-mmc.png "There are two services that are related to OpenSSH Server which need to be set to start automatically.")

### Command Line Services ###

To start the OpenSSH Server services and enable them to run automatically, there are a few commands that you will need to run. To do this, open an elevated PowerShell console and run the following commands to start the OpenSSH Server:

```powershell
Start-Service sshd
Start-Service ssh-agent
```

To have these services start automatically at boot, there are two additional commands to run as well:

```powershell
Set-Service sshd -StartupType Automatic
Set-Service ssh-agent -StartupType Automatic
```

After this has been completed, you should be able to connect to your Windows installation over SSH.

## Using OpenSSH Client ##

The OpenSSH Client can be used the same way as you would on any Linux/Unix host. It will work through the regular Command Line and in PowerShell:

```powershell
PS C:\> ssh.exe
usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface]
           [-b bind_address] [-c cipher_spec] [-D [bind_address:]port]
           [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11]
           [-i identity_file] [-J [user@]host[:port]] [-L address]
           [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port]
           [-Q query_option] [-R address] [-S ctl_path] [-W host:port]
           [-w local_tun[:remote_tun]] destination [command]
```

Here is the same output from a Linux environment:

```bash
matthew@thinkpad / $ ssh
usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-b bind_address] [-c cipher_spec]
           [-D [bind_address:]port] [-E log_file] [-e escape_char]
           [-F configfile] [-I pkcs11] [-i identity_file]
           [-J [user@]host[:port]] [-L address] [-l login_name] [-m mac_spec]
           [-O ctl_cmd] [-o option] [-p port] [-Q query_option] [-R address]
           [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]
           [user@]hostname [command]
```

I won't go into the details on how to use any of these advanced options, there are very good tutorials on how to use the OpenSSH Client on other sites. The behaviour of OpenSSH Client on Windows should be almost the same as on a Linux environment. So far, I haven't run into any issues with connectivity.

## Connecting to OpenSSH Server ##

There is nothing special required to connect to a Windows host, it behaves the same way as any other SSH host. There are a few different username formats that you can use:

```ini
user@windows-host (Local User Account)
user@domain.local@windows-host (Domain UPN)
domain\user@windows-host (Netbios)
```

One of the benefits is the ability to login with a Microsoft account if you are using that as your username. It is a bit unusual to see an e-mail address used this way, but I am glad that Microsoft made sure that this functionality worked correctly:

```ini
user@outlook.com@windows-host
```

There is nothing more to OpenSSH Server, you can manage your Windows host from the command line once you are logged in. If you want to do any further customization or need some basic troubleshooting, there is additional information below.

## Change the Default Shell ##

By default, when you login to a Windows installation with SSH, it defaults to the regular Command Prompt (cmd.exe). I prefer PowerShell for everyday usage, and it is easy to switch to PowerShell once you login, but you can change the default shell to save yourself some time if you are going to be using this feature often.

This is done through the Registry Editor, which will run with Administrator privileges. You need to navigate to the following key:

```ini
Computer\HKEY_LOCAL_MACHINE\SOFTWARE\OpenSSH
```

Create a new string called **DefaultShell** and give it the following value:

```ini
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
```

Restart the OpenSSH Server Service and the next time that you login with SSH, you should automatically go to PowerShell. I have tried making this work with Bash, but it doesn't seem to be supported yet.

![OpenSSH Shell](/images/blog/00011/openssh-powershell-shell.png "I sometimes wish it would go to a Bash shell instead...")

If you do want to use Bash, just type in **bash.exe** to switch to it.

## Additional Settings ##

There are a few customizations that you can do to the OpenSSH Server service if needed. Since this is a port of the OpenSSH Server, the customization is done in a very similar way. To begin, the directory where all the associated executable files are found is in the **C:\Windows\System32\OpenSSH** directory:

![OpenSSH Service Directory](/images/blog/00011/openssh-server-directory.png "Sometimes needed for troubleshooting purposes.")

The other important directory for OpenSSH Server is the **C:\ProgramData\ssh** folder, which contains the configuration files and log files.

![OpenSSH Data Directory](/images/blog/00011/openssh-server-data-directory.png "This directory will be needed for troubleshooting and logging purposes.")

OpenSSH Server options, such as changing the login banner and locking down security options are done in the **C:\ProgramData\ssh\sshd_config** file.

Not all options can be used on a Windows host. For more information, you can refer to the official [wiki article](https://github.com/PowerShell/Win32-OpenSSH/wiki/sshd_config) on what options are supported.

## Troubleshooting ##

If you need to view the log file for OpenSSH Server, you need to make a quick change to the configuration file (**C:\ProgramData\ssh\sshd_config**) to enable logging:

```ini
# Logging
#SyslogFacility AUTH
#LogLevel INFO
```

Make the following change:

```ini
# Logging
SyslogFacility LOCAL0
LogLevel INFO
```

You will need to restart the OpenSSH Server service to apply the change. Once the change has been made, the log file (**sshd.log**) can be found in the **C:\ProgramData\ssh\logs** directory. When you are finished troubleshooting, you should revert this change to prevent unnecessary logging for the OpenSSH service.

## Links ##

* [sshd_config](https://github.com/PowerShell/Win32-OpenSSH/wiki/sshd_config)
* [SSH on Windows Server 2019](https://blogs.technet.microsoft.com/askpfeplat/2018/10/29/ssh-on-windows-server-2019/) ([Local Version](/docs/blog/00011/ssh-on-windows-10-and-server-2019.pdf))
* [Win32-OpenSSH](https://github.com/PowerShell/Win32-OpenSSH)
