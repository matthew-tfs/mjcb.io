---
title: "Windows 95 Installation Process"
slug: "windows-95-installation-process"
date: "2024-11-20T07:13:00"
author: "Matthew Burr"
summary: "I have been following Raymond Chen's blog, The Old New Thing, or several years and he recently posted about the process that Windows 95 used for installation. The installer was unusual since it booted into a limited MS-DOS environment, then a limited Windows 3.1 environment, and then finally into a Windows 95 environment. I had heard several reasons for this strange process for years, so it was nice to finally hear the reason from someone at Microsoft."
tags: [
    "Microsoft",
    "MS-DOS",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00070/windows-95-logo.png"
draft: false
---

I have been following Raymond Chen's blog, [The Old New Thing](https://devblogs.microsoft.com/oldnewthing/), for several years and he recently [posted](https://devblogs.microsoft.com/oldnewthing/20241112-00/?p=110507) about the process that Windows 95 used for installation. The installer was unusual since it booted into a limited MS-DOS environment, then a limited Windows 3.1 environment, and then finally into a Windows 95 environment. I had heard several reasons for this strange process for years, so it was nice to finally hear the reason from someone at Microsoft.

I won't get into the specifics about why the installation process is setup the way that it is, the post goes into detail on why. It really comes down to Microsoft wanting to provide the maximum amount of installation options, while also leveraging their existing operating systems. This type of behaviour would continue until Windows XP and Windows Server 2003, and after that point Microsoft completely changed the way that they installed their operating systems.

As a refresher I decided to install Windows 95 just to remind myself how the installer worked and behaved. I haven't installed Windows 95 in several years, I have mostly been using Windows 98 Second Edition for anything Windows 9x related. I have lost count as to how many times I have installed Windows 95 ever since I got my first computer that supported it. I never thought much about the three distinct phases of the installation, I don't think I ever paid much attention to it since I would try and get through the process as quickly as possible so I could use the computer.

I initially had some difficulty getting the Windows 95 installer to work correctly under a few virtualization platforms, so I ended up using [VirtualBox](https://www.virtualbox.org/) since I knew it supported those older operating systems without too much effort.

I ended up installing Windows 95 OSR1 (4.00.950a). This version has been modified to boot without a boot disk, and the installation took less than 10 minutes:

![Windows 95 Installation - MS-DOS Mode.](/images/blog/00070/virtualbox-windows-95a-ms-dos.png)

![Windows 95 Installation - Windows 3.1 Mode.](/images/blog/00070/virtualbox-windows-95a-win31.png)

![Windows 95 Installation - Windows 95 Mode.](/images/blog/00070/virtualbox-windows-95a-win95.png)

Once the installation has been completed, the familiar Windows 95 desktop will finally be loaded:

![Windows 95 Default Desktop.](/images/blog/00070/virtualbox-windows-95a-desktop.png)

## Links ##

* [Oracle VirtualBox](https://www.virtualbox.org/)
* [Slashdot - After 30 Years, We Finally Know Why Windows 95's Installer Juggled Three Operating Systems](https://tech.slashdot.org/story/24/11/19/146206/after-30-years-we-finally-know-why-windows-95s-installer-juggled-three-operating-systems)
* [The Old New Thing](https://devblogs.microsoft.com/oldnewthing/)
* [The Old New Thing - Why did Windows 95 setup use three operating systems?](https://devblogs.microsoft.com/oldnewthing/20241112-00/?p=110507) ([Local Version](/docs/blog/00070/why_did_windows_95_setup_use_three_operating_systems_the_old_new_thing.pdf))
