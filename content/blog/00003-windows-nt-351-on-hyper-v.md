---
title: "Windows NT 3.51 on Hyper-V"
slug: "windows-nt-351-hyper-v"
date: "2018-09-25T06:01:00"
author: "Matthew Burr"
summary: "I ran into a few issues with running this very old operating system as a virtual machine on Hyper-V a few days ago. I needed to do this for a personal project that I am working on, one that I have been thinking about doing for a while now. Since I ran into a few issues with getting this to work correctly, I thought I should share my findings and write a quick guide on how to get Windows NT 3.51 Server and Windows NT 3.51 Workstation running on Hyper-V."
tags: [
    "Guides",
    "Hyper-V",
    "Microsoft",
    "Windows",
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00003/windows-nt-3-51-oldshell.png"
featureImage: "/images/blog/00003/windows-nt-3-51-oldshell.png"
draft: false
---

I ran into a few issues with running this very old operating system as a virtual machine on Hyper-V a few days ago. I needed to do this for a personal project that I am working on, one that I have been thinking about doing for a while now. Since I ran into a few issues with getting this to work correctly, I thought I should share my findings and write a quick guide on how to get Windows NT 3.51 Server and Windows NT 3.51 Workstation running on Hyper-V.

The issue that I kept encountering was the installer would constantly crash during installation because of a problem with the Network Adapter. I needed the ability to run Windows NT 3.51 Server as a Domain Controller instead of a standalone server, so removing the Network Adapter at installation time was not an option for me.

{{< toc >}}

## Software ##

For this guide I used the following software/environment:

* Windows 10 Pro - Version 1803 (OS Build 17134.320)
* Windows NT 3.51 Server - Build 1057 (RTM)
* Windows NT 3.51 Workstation - Build 1057 (RTM)

At the end of the installation, I upgraded Windows NT 3.51 Server and Windows NT 3.51 Workstation to Service Pack 5. I also installed [NewShell](https://en.wikipedia.org/wiki/Windows_NT_3.51#NewShell) as an experiment just to see how it worked.

## Windows NT 3.51 ##

Before I started this project, I realized that I have never actually used this operating system or have even seen it installed anywhere. My first Windows computer was running Windows 95, and I just never encountered Windows NT 3.51 (why would I, it was targeted towards businesses primarily). I used to run into Windows NT 4.0 all the time when I worked for an MSP a few years ago, but that was it. I think I only ever used Windows 3.1 once or twice and that was it, so I wasn't even very familiar with the Program Manager/File Manager User Interface.

The history on the creation of Windows NT is an interesting one and I recommend reading more about it if you get the chance. Operating system history and retro computing is an interest of mine, and with the availability of virtualization it is very easy to try out these old operating systems without too much effort. The fact that I had to write a guide to get this particular operating system up and running is a small annoyance, but it is possible.

## Why Hyper-V? ##

I had a lot of options for how I would undertake this project. I was certainly not going to attempt using real hardware for it, so virtualization was my only real option. I also did not have the option to use Azure or AWS (not because of the obvious lack of support for Windows NT 3.51), but because I will need to host multiple virtual machines later in the project and I simply did not want to pay for that. It doesn't help that there a lot of options for virtualization nowadays (QEMU, VirtualBox, VMware), but I settled on Hyper-V because it runs natively on my Surface Laptop without having to install anything extra and I wanted to see if it was possible to do his project with only using Microsoft products.

## Virtual Machine Settings ##

There are a few specific settings that need to be created for these virtual machines to work correctly. I won't go into the specifics on how to create a virtual machine in Hyper-V, but here are the details on what the virtual machine settings need to be for both Windows NT 3.51 Server and Windows NT 3.51 Workstation:

* Generation: Generation 1
* Memory: 64MB (you can use more memory if you want, but remember that it is a 32-bit operating system)
  * Dynamic Memory Disabled
* Virtual Hard Disk: 1GB (you can create a bigger disk if you want, but you won't need that much space)

Once the virtual machine has been created, go into the virtual machine settings, and make the following changes:

* Processor: 1 Virtual Processor
  * Processor Compatibility: Migrate to a physical computer with a different processor version
* Remove the SCSI Controller (not needed).
* Remove the Default Network Adapter (not compatible with Windows NT 3.51).
* Modify the BIOS settings by moving the floppy drive to top of list. The proper order should be Floppy, CD-ROM, IDE, Legacy Network Adapter.

For the Network Adapter you have two options depending on how you intend on using the server after the installation is completed:

* If you are setting up the server up as a Domain Controller, **add a Legacy Network Adapter and add it to the virtual network that you intend to use**. There is a setting that you will need to change during installation to prevent it from crashing.
* If you are setting up the server up as a regular server, **do not add the Legacy Network Adapter**. You will have to add the adapter after the installation is complete. If you are installing Windows NT 3.51 Workstation this also applies.

An additional step that will help with the installation is to enable compatibility for older operating systems on the virtual machine. There is nowhere to set this in the Hyper-V Manager, it must be set with PowerShell:

```powershell
Set-VMProcessor "Windows NT 3.51 Server" -CompatibilityForOlderOperatingSystemsEnabled $true
```

You can confirm that it has been setup correctly with this command:

```powershell
C:\WINDOWS\system32> Get-VMProcessor "Windows NT 3.51 Server" | fl CompatibilityForOlderOperatingSystemsEnabled
```

The output should show that the compatibility is setup correctly for older operating systems:

```powershell
C:\WINDOWS\system32> Get-VMProcessor "Windows NT 3.51 Server" | fl CompatibilityForOlderOperatingSystemsEnabled

CompatibilityForOlderOperatingSystemsEnabled : True
```

I did try the installation with and without this setting and I can't say for certain if it helps or not. I know that it is required for Windows NT 4.0 and Windows 2000.

## Pre-Installation Information ##

Windows NT 3.51 does not boot from CD for the installation, and you will need three boot disks to install the operating system. I won't go into details on how to get these disks, but they are easy to find online (you can also create them by using a Windows 9x boot disk and the NT 3.51 CD). To convert them to work with Hyper-V, all you need to do is change the file extensions from **img** to **vfd**.

## Installation ##

I won't go into all the steps on how to go through the MS-DOS and GUI installation of Windows NT 3.51, I am only going to focus on the Networking components.

If you setup the virtual machine without a Legacy Network Adapter, the installer will complain about the lack of a Network Adapter. You can ignore the warnings, just choose the following options to install Windows NT 3.51 without a Network and you will be able to continue the installation without the Network:

![Windows NT 3.51 Network Card Message 1](/images/blog/00003/windows-nt-3-51-network-card-message-1.png "Select the ''Continue'' option.")

![Windows NT 3.51 Network Card Message 2](/images/blog/00003/windows-nt-3-51-network-card-message-2.png "Select the ''Continue'' option.")

![Windows NT 3.51 Network Card Message 3](/images/blog/00003/windows-nt-3-51-network-card-message-3.png "Select the ''No Network'' option.")

![Windows NT 3.51 Network Card Message 4](/images/blog/00003/windows-nt-3-51-network-card-message-4.png "Select the ''OK'' option to continue.")

If you setup the virtual machine with a Legacy Network Adapter, there is a quick change that you need to make to allow the installation to complete successfully. For whatever reason the Windows NT 3.51 installer cannot automatically determine the speed of the network, which is set to **AutoSense** by default. If you change the speed to something else (10 Mbps for instance), the installer will not crash. If you leave it on **AutoSense** you will very likely run into this error that will crash the installer:

![Windows NT 3.51 Installation Error](/images/blog/00003/windows-nt-3-51-installation-error-1.png "Thanks for the help, Dr. Watson.")

I am not entirely sure what is causing the error and given the age of the operating system and the fact that it is being run in a virtual environment (which it was never designed to do) I don't think I will ever know the true reason. I think it might have something to do with the installer thinking that the Network is up and running when it isn't, and it can't recover gracefully from the error. To prevent this, make the following changes to the **DEC PCI Fast Ethernet DECchip 21140** adapter:

![Windows NT 3.51 Network Adapter Message 1](/images/blog/00003/windows-nt-3-51-network-adapter-message-1.png "The Connection type is set to ''AutoSense'' by default.")

![Windows NT 3.51 Network Adapter Message 2](/images/blog/00003/windows-nt-3-51-network-adapter-message-2.png "Change the Connection Type to another speed, ''10 Mbps'' seems to always work.")

![Windows NT 3.51 Network Adapter Message 3](/images/blog/00003/windows-nt-3-51-network-adapter-message-3.png "Click ''Continue'' to proceed with the rest of the installation.")

Once the Network settings have been configured you can continue setting up Windows NT 3.51.

## Post-Installation ##

If you installed Windows NT 3.51 without a Network Adapter, you can now safely add it to the virtual machine. You will need the installation CD to install the drivers and you will be able to configure the Network however you want. You can install it by going to the Control Panel and going to the Network settings.

If you installed Windows NT 3.5 with a Network Adapter you will be greeted with an error message the first time the system boots up:

![Windows NT 3.51 Network Error](/images/blog/00003/windows-nt-3-51-network-error-1.png "If you check the Event Viewer, the error states that the Network failed to start.")

To correct this issue all you need to do is go to the Control Panel, open the network settings, and set the Connection Type of the Network Adapter to **AutoSense**. Once the virtual machine restarts, the error message will disappear, and the network will be available.

Once the Network settings have been configured, you should fix the Screen Resolution by changing it from 640x480 to 800x600. You will need to restart the virtual machine to apply the settings.

## Windows NT 3.51 Service Pack 5 ##

It is straight-forward to install Service Pack 5 on Windows NT 3.51 Server and Workstation. I added the file to an ISO image and mounted it on both virtual machines and copied it to the C drive in its own directory. There are only two commands that you need to run to install the Service Pack:

```cmd
SP5_351I.EXE -d
UPDATE.EXE
```

The installation only takes a minute, and you will need to reboot the virtual machine at the end of the installation.

## NewShell ##

The installation of NewShell is entirely optional. I put the files onto an ISO image to move the files over to both virtual machines just like the Service Pack files. It only requires one command to install the update:

```cmd
SHUPDATE.CMD
```

Reboot the virtual machine to apply the update. Once the system restarts you will immediately notice the change:

![OldShell](/images/blog/00003/windows-nt-3-51-oldshell.png "OldShell, plain old Windows NT 3.51.")

![NewShell](/images/blog/00003/windows-nt-3-51-newshell.png "NewShell, looks familiar to another Microsoft product from the mid-90's.")

If you want to go back to the old Program Manager/File Manager user interface, you can uninstall NewShell by going into the installation directory and running this command:

```cmd
SHUPDATE.CMD /U
```

## Hyper-V Limitations with Windows NT 3.51 ##

There are a few limitations to running Windows NT 3.51 on Hyper-V, all of which will never be resolved. Hyper-V Guest Additions do not work and will never work. The drivers for the video adapter can only work at 16 colours and maxes out at 800x600 for the resolution. I looked around for third-party drivers, but I was not able to find any.

An annoying issue that I ran into with Hyper-V was that when you are accessing the host system over Remote Desktop, you cannot use Remote Capture on the virtual machine.
