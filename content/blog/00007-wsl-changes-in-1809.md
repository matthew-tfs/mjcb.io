---
title: "WSL Changes in Windows 10 1809"
slug: "wsl-changes-in-1809"
date: "2018-11-07T18:42:00"
author: "Matthew Burr"
summary: "I found a good blog article about the changes that were made to the Windows Subsystem for Linux (WSL) in the Windows 10 1809 update (or whatever it will be called when they eventually release it again) on the Windows Command Line Blog."
tags: [
    "Linux",
    "Microsoft",
    "Ubuntu",
    "WSL"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00007/wsl-shell-1809.png"
draft: false
---

I found a good blog article about the changes that were made to the Windows Subsystem for Linux (WSL) in the Windows 10 1809 update (or whatever it will be called when they eventually release it again) on the Windows Command Line Blog.

I managed to install the 1809 update on my Surface Laptop and ThinkPad before the 1809 update got pulled, but I never looked through my Ubuntu app to see what was different. My favourite change is the changes to the Copy/Paste behaviour. I have had the odd issue with this in the past, especially with Remote Desktop, so it is a welcome change. The other change that I find very convenient is the ability to open a Linux shell from File Explorer by right-clicking on it. I use this feature all the time with PowerShell, so it is very nice to be able to do this with WSL:

![WSL Open Linux Shell from File Explorer](/images/blog/00007/wsl-open-shell.png)

Also mentioned was support for WSL on ARM devices, so once I can get my Lenovo Miix 630 up to the 1809 update, I will test to see if it works. This was an annoyance for me before with the WoA implementation, so if this works it will make the device even better than it already is for my usage.

## Links ##

* [What's New for WSL in the Windows 10 October 2018 Update](https://blogs.msdn.microsoft.com/commandline/2018/11/05/whats-new-for-wsl-in-the-windows-10-october-2018-update/) ([Local Version](/docs/blog/00007/whats_new_for_wsl_in_the_windows_10_october_2018_update.pdf))

