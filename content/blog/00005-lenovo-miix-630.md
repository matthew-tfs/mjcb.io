---
title: "Lenovo Miix 630"
slug: "lenovo-miix-630"
date: "2018-10-04T19:35:00-05:00"
author: "Matthew Burr"
summary: "I wanted to do a follow up my previous post about Windows on ARM since I have had some recent hands-on experience with this platform. I was able to obtain a Lenovo Miix 630 through a contract that I am working on and I have been using it in a daily basis for the last 2 months. I had wanted to give this platform a fair chance, and here is what I found out."
tags: [
    "ARM",
    "Lenovo",
    "Reviews",
    "Windows",
    "WoA"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00005/lenovo-miix-630.jpg"
featureImage: "/images/blog/00005/lenovo-miix-630.jpg"
draft: false
---

I wanted to do a follow up my previous post about Windows on ARM since I have had some recent hands-on experience with this platform. I was able to obtain a Lenovo Miix 630 through a contract that I am working on and I have been using it in a daily basis for the last 2 months. I had wanted to give this platform a fair chance, and here is what I found out.

{{< toc >}}

## Windows 10 S Disclaimer ##

I am going to start off by saying that I am not going to criticize this device for running Windows 10 S. I am also completely aware that it can be freely upgraded to Windows 10 Pro. In fact, I did upgrade it as part of this review so that I could run some benchmarking tools which were not compatible with Windows 10 S (I moved it back to S mode afterwards). I fully intended to run this device in S mode as part of the day to day usage of it from day one.

## Hardware Overview ##

Overall the Lenovo Miix 630 is very well designed and it definitely feels like a premium device. The device itself is only 7.3mm thick and that is thanks to the fan-less design and the compact Qualcomm chipset. At 3.1 pounds it is a bit heavier than I would have expected, but that is not really a big deal.

The hardware is very well built, and looks very professional:

![The Lenovo Miix 630 with the keyboard open](/images/blog/00005/gallery/lenovo-miix-630-overview.jpg)

![The Lenovo Miix 630 USB-C port](/images/blog/00005/gallery/lenovo-miix-630-usb-c-port.jpg)

![The Lenovo Miix 630 headphone jack](/images/blog/00005/gallery/lenovo-miix-630-headphone-jack.jpg)

![The Lenovo Miix 630 tablet](/images/blog/00005/gallery/lenovo-miix-630-closed-front.jpg)

Just like the Surface Pro, the keyboard serves as a cover for the front of the device, but it also acts as the kickstand as well. The keyboard cover is very well designed and is fairly similar to the HP ENVY x2 (which in turn is based on the Qualcomm Reference Design for this platform). It attaches with powerful magnets at the bottom of the device and actually requires a bit of force to remove. Also similar to the Surface Pro, the keyboard also folds behind the device when you want to use it in Tablet mode without having to remove the cover entirely.

The Lenovo Digital Pen attaches to the cover with a built-in holder that cannot be removed, and just like the Surface Pro the pen can also magnetically attach to the right side of the device when you are not using it. I would definitely recommend using the built-in holder when transporting the Pen, since it is very likely to fall off. I don't have a lot to say about the accuracy or quality of the Pen itself, I only ever use it for annotating documents and never for drawing anything, but it seems to work well and is fairly similar to the Surface Pen.

The device itself has very few ports on it, just a single USB-C Port and a Headphone jack. To save space on the device, the SD Card and SIM Card share the same slot and is easily opened with the removal tool. If you require additional ports or would like to use USB A devices you have the option of using the device with a USB-C Hub. I had the [MECO 7 in 1 USB-C Hub](https://www.amazon.ca/gp/product/B07C5V1GJD/) and it worked perfectly and supported charging as well. It also works perfectly with a regular USB-C to USB A adapter as well. I normally use Bluetooth headphones now, but the few times I had to plug in my headphones it sounded perfectly fine. It even supported the microphone on my Jabra headset.

## Hardware Specifications ##

The hardware specifications for the Lenovo Miix 630 are fairly good for a device of this class:

| Component        | Hardware                                                         |
|:-----------------|:-----------------------------------------------------------------|
| Processor        | Qualcomm Snapdragon 835 @ 2.21 GHz                               |
| Graphics         | Qualcomm Adreno 540                                              |
| Memory           | 4 GB LPDDR4 @ 1866MHz                                            |
| Storage          | 128 GB UFS 2.1                                                   |
| Operating System | Windows 10 S                                                     |
| Display          | <ul><li>12.3” FHD+ (1920 x 1280)</li><li>400 nits, IPS and multi-touch</li></ul> |
| Camera           | <ul><li>Front: 5 MP, infrared camera with Windows Hello support</li><li>Rear: 13 MP, auto-focus camera</li></ul> |
| Microphones      | 2 x Dual array microphones                                       |
| Audio            | 2 x 1W speakers                                                  |
| Battery          | 48 Wh                                                            |
| Dimensions       | Without keyboard: 210mm x 293mm x 7.3mm / 8.23" x 11.54" x 0.29" |
| Weight           | <ul><li>With keyboard: 1.39 kg / 3.1 lbs</li><li>Without keyboard: 770 g / 1.7 lbs</li></ul> |
| WLAN             | 802.11AC (2 x 2) WiFi                                            |
| Bluetooth        | Bluetooth 4.1 + Low-energy + security                            |
| WWAN             | LTE Cat 11                                                       |
| Keyboard and Pen | <ul><li>Full sized backlit keyboard</li><li>Lenovo Digital Pen (uses AAAA battery)</li></ul> |
| Connectors       | <ul><li>1 x USB Type-C (Charging, DP, 3.0)</li><li>1 x Micro SD card slot (on SIM tray)</li><li>1 x Nano SIM card slot</li><li>1 x Audio combo jack</li></ul> |
| Colour           | Iron Grey                                                        |

## Software ##

The Lenovo Miix 630 came preinstalled with Windows 10 S version 1709. Before I did any updates or made any changes to the device I decided to create a recovery USB drive. I don't normally do this with my devices anymore since it is easier to just download the latest version of Windows 10 to a USB device, but since this is an ARM device I don't really have that option. I intended from day one to run this device in S mode, but for curiosity and to do some benchmarking I did upgrade it to Windows 10 Pro for a short period of time. A minor annoyance with S mode is that once you switch to Pro, you cannot easily go back to S mode. Even if you perform a System Recovery through the OS you will always go back to Windows 10 Pro. You can only put the device back into S mode by using a recovery USB drive and doing a complete reinstall.

Once the recovery media was created I updated the device to the 1803 update. Since I am running Windows 10 S I am restricted to running applications that can only be found in the Microsoft Store and the applications that I found myself using the most often were:

* 8 Zip
* Termius
* Torrex Pro
* Drawboard PDF
* KeePassReader
* Pocket Casts
* iTunes
* VLC
* Netflix
* Microsoft Office Suite (Word, Excel, Outlook, OneNote, PowerPoint)

All of the regular applications that are included with Windows 10 are present and work as expected (File Explorer, Edge, Remote Desktop, Calculator, etc) so that was not an issue for me.

OneDrive came pre-installed as a regular application (it is the only application that shows up in Programs and Features) and behaves the same way as it does on any version of Windows 10. The sync functionality works perfectly fine, and luckily Windows 10 is smart enough to automatically suspend syncing while on an LTE connection.

Something odd that I noticed was that there is an option to install the Windows Subsystem for Linux feature, but there is no way to install any of the distributions from the Microsoft Store:

![Lenovo Miix 630 Ubuntu Installation Error](/images/blog/00005/lenovo-miix-630-ubuntu-error.png)

This issue is probably easy to fix, the Linux applications in the Microsoft Store probably just need to be recompiled for ARM.

I have been using Edge as my primary browser for the past 6 months on all of my Windows 10 devices and I don't have anything bad to say about it. With support for extensions I can easily add important tools such as uBlock Origin and RES. The fact that it handles multiple local media files (such as PDF) means that I didn't need to worry about adding applications such as Adobe Reader.

Overall the Windows on ARM experience is pretty much the same as you would expect from Windows 10 S mode on a regular x86 platform.

## Battery Life ##

One of the biggest draws to the Windows on ARM platform is the exceptional battery life. Qualcomm and the OEMs that are building these devices are advertising at least 20 hours of battery life and I can easily say that those claims are true:

![Lenovo Miix 630 Battery Life and Options](/images/blog/00005/lenovo-miix-630-battery-life.png)

One of the benefits of running this device in S mode instead of Pro is that the emulation layer that Windows on ARM uses to run regular x86 applications is not used at all. I noticed that when I was running the device in Pro mode and using Chrome instead of Edge, the battery life was seriously affected. I was averaging only around 8 to 10 hours depending on the usage instead of the 16+ hours I was getting in S mode. If battery life is important you need to factor this in when you decide if you want to use S mode or not.

## LTE and the Always Connected PC ##

One of the features that I was the most excited about with this device was the inclusion of a built-in LTE modem. Obviously this feature is nothing new, you can easily buy a regular Windows laptop that has this feature as well.

The laptop shipped with a SIM card for the Lenovo Connect service. It was supposed to include 1GB of data per month, but it does not seem to work in Canada. To properly test the LTE connectivity I picked up a SIM card from Rogers and added it as a tablet plan to my account. Once I inserted the SIM card it immediately showed up:

![Lenovo Miix 630 Rogers LTE](/images/blog/00005/lenovo-miix-630-rogers-lte.png)

Windows 10 is very good at managing LTE on the device, and things like quotas and suspending background services are easy to setup. I normally leave LTE disabled when I am not using it, but it is quite handy to leave it on and still receive notifications when the computer is suspended (and not take a hit on battery life). The Mobile Hotspot function also works quite well, but when you use that feature it is very easy to use all of your data.

## Performance ##

The Lenovo Miix 630 is not going to set any records for performance. The Snapdragon 835 is over a year old at this point and while it is a very capable platform, it could definitely be faster. However, the purpose of this device is to be extremely portable with long battery life, so to expect the performance of a high-end device is not realistic. It is also not the point of this device, since I consider it to be a companion device similar to an iPad.

The onboard storage seems to have fairly good performance (Samsung KLUDG4U1EA-B0C1) and is the same NAND memory that is present on the Samsung Galaxy Note 9. The 4 GB of memory is sufficient, but I have been using devices with a minimum of 8 GB for the last few years so it would be nice to have more memory.

![Lenovo Miix 630 Task Manager with CPU Statistics](/images/blog/00005/lenovo-miix-630-task-manager.png)

Most of my usage so far has been with Edge, Outlook, OneNote and Remote Desktop. It handles media very well (VLC and Netflix mostly) and I don't have any issues with it. I have used the device with a USB-C to HDMI adapter and the Microsoft Wireless adapter to project media to a monitor/TV and it handled it without any issues as well.

Overall I am happy with the performance and the Lenovo Miix 630 fits well into my workflow. I know of the limitations of the device the second I go to use it, so I always keep that in mind so I am not disappointed with it.

## Issues ##

No device is perfect and this is definitely a 1st generation device, so I have encountered a few minor issues with the device. The most annoying issue is that sometimes I run into an issue with keystrokes not always being recorded. This is definitely an intermittent issue that doesn't always happen. I find that when I have the keyboard lying flat instead of propped up the issue happens less frequently.

Another annoying issue is with the screen always trying to automatically adjust the brightness. This only happens when it is on battery power, and I definitely notice it when I am browsing the Internet. Whenever I open a tab in Edge I notice the display quickly dims and then goes back up. I am not sure how to fix this, but I am thinking that it might just be a driver issue so hopefully a future update corrects this. The issue even occurs when I disable automatic brightness on the device. However the issue never happens when it is plugged in.

And this is very annoying:

![Lenovo Miix 630 cmd.exe Blocked by Windows 10 S Mode](/images/blog/00005/lenovo-miix-630-cmd-exe.png)

This is a limitation of the Windows 10 S environment and nothing specific to Windows on ARM. I understand why Microsoft disallowed the usage of these utilities, but it is a bit annoying when I need to quickly check a setting.

## Thoughts ##

This is a definitely a generation one device and I think it has promise. The performance of the Qualcomm Snapdragon chips are getting better with every release and it won't take long for these chips to catch up to the offerings from Intel and AMD.

At the time of this writing, I was using the Windows 10 1803 update. When the 1809 update is released I will update this post if I notice any changes with the device.

## Links ##

* [Lenovo Miix 630-12Q35 User Guide](/docs/blog/00005/lenovo-miix-630-12q35-user-guide.pdf)
