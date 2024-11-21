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

I won't get into the specifics about why the installation process is setup the way that it is, the post goes into detail on why. It really comes down to Microsoft wanting to provide the maximum amount of installation options, while also leveraging their existing operating systems. This type of behaviour would continue until Windows XP and Windows Server 2003, and after that point Microsoft completely changed the way that they installed their operating systems. The fact that the installer switched from MS-DOS, to a 16-bit GUI and then to a 32-bit GUI was interesting to say the least.

> Okay, so now we have three setup programs. The first one is used if you’re installing from MS-DOS: It installs the tiny version of Windows 3.1, and then boots into Windows 3.1 to continue to the next step.
>
> The second setup program runs as a 16-bit Windows app, either in the miniature copy of Windows 3.1 (if the user is upgrading from MS-DOS), the real copy of Windows 3.1 (if the user is upgrading from Windows 3.1), or the real copy of Windows 95 (if the user is upgrading from Windows 95). This second setup program is the one that does almost all of the real work: It does the initial interaction with the user to gather information about how to install Windows 95, like asking which optional components to include, and does hardware detection to decide which drivers to install.² And then it copies the drivers and Windows 95 files onto the system, migrates your old settings to the new operating system, and boots into Windows 95.
>
> The third setup program runs as a 32-bit Windows app. It is running in the real Windows 95 system and does some final steps that require operation a live running system, like installing printers.

There was an interesting discussion on [Slashdot](https://tech.slashdot.org/story/24/11/19/146206/after-30-years-we-finally-know-why-windows-95s-installer-juggled-three-operating-systems) about the topic. Aside from the details on how the installation process worked on Windows 95, it also had a good discussion about the architecture of Windows 95. Definitely worth a read.

As a refresher I decided to install Windows 95 just to remind myself how the installer worked and behaved. I haven't installed Windows 95 in several years, I have mostly been using Windows 98 Second Edition for anything Windows 9x related. I have lost count as to how many times I have installed Windows 95 ever since I got my first computer that supported it. I never thought much about the three distinct phases of the installation, I don't think I ever paid much attention to it since I would try and get through the process as quickly as possible so I could use the computer.

I initially had some difficulty getting the Windows 95 installer to work correctly under a few virtualization platforms, so I ended up using [VirtualBox](https://www.virtualbox.org/) since I knew it supported those older operating systems without too much effort.

I ended up installing Windows 95 OSR1 (4.00.950a). This version has been modified to boot without a boot disk, and the installation took less than 10 minutes:

![Windows 95 Installation - MS-DOS Mode.](/images/blog/00070/virtualbox-windows-95a-ms-dos.png)

![Windows 95 Installation - Windows 3.1 Mode.](/images/blog/00070/virtualbox-windows-95a-win31.png)

![Windows 95 Installation - Windows 95 Mode.](/images/blog/00070/virtualbox-windows-95a-win95.png)

Once the installation has been completed, the familiar Windows 95 desktop will finally be loaded:

![Windows 95 Default Desktop.](/images/blog/00070/virtualbox-windows-95a-desktop.png)

Even though this seems like an odd thing to find interesting, I have always been interested in the architecture of these legacy operating systems. The more that I learn about these workarounds that they had to do to make the whole thing work will always be fascinating to me.

## Links ##

* [Oracle VirtualBox](https://www.virtualbox.org/)
* [Slashdot - After 30 Years, We Finally Know Why Windows 95's Installer Juggled Three Operating Systems](https://tech.slashdot.org/story/24/11/19/146206/after-30-years-we-finally-know-why-windows-95s-installer-juggled-three-operating-systems) ([Local Version](/docs/blog/00070/slashdot_after_30_years_we_finally_know_why_windows_95s_installer_juggled_three_operating_systems.pdf))
* [The Old New Thing](https://devblogs.microsoft.com/oldnewthing/)
* [The Old New Thing - Why did Windows 95 setup use three operating systems?](https://devblogs.microsoft.com/oldnewthing/20241112-00/?p=110507) ([Local Version](/docs/blog/00070/why_did_windows_95_setup_use_three_operating_systems_the_old_new_thing.pdf))
