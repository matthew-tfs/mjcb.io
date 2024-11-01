---
title: "FreeDOS 1.3 Released"
slug: "freedos-13-released"
date: "2022-03-07T17:15:00"
author: "Matthew Burr"
summary: "I recently saw a post about the newest release of FreeDOS and I wanted to take some time and see how well it works in 2022 on a laptop that was designed to run it from the late MS-DOS era."
tags: [
    "DOS",
    "FreeDOS",
    "MS-DOS",
    "Retro"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00043/freedos-fish.png"
toc: true
draft: false
---

I saw a post over at [OSnews](https://www.osnews.com/) a few days ago about the recent release of [FreeDOS 1.3](https://www.osnews.com/story/134597/freedos-1-3-released/). I decided to take a look at the latest release of [FreeDOS](https://freedos.org/) as it had been several years since I had used it, and I wanted to see how well it worked on a retro laptop that I own.

I decided to give it a try on my oldest laptop, which is an **IBM ThinkPad 380ED**, and it worked exceptionally well. It functioned and performed the same way as MS-DOS.

## FreeDOS ##

FreeDOS is a free operating system that is a clone of the MS-DOS operating system. It is an open-source project that has been actively developed for almost 30 years, and it is intended to be a drop-in replacement for MS-DOS. The idea is that if a computer supports MS-DOS, then there should be zero issues with using FreeDOS in its place.

I have used FreeDOS several times over the last 10 years, the first time was on an old MS-DOS system in a manufacturing plant while I was working at an MSP. That system was attached to a large CNC machine and had been running MS-DOS 6.22 since the late 1990's. It had no networking and people who wanted to use it would occasionally load files from a floppy disk to use it.

Eventually the system failed due to a power issue which damaged it beyond repair. The replacement device from the vendor did not come with an operating system, it did not have a floppy drive or CD-ROM drive, and I did not have any of the original installation disks as they were long gone. All I had to work with was the data on the old hard drive, and two USB ports on the new device. I decided to use FreeDOS instead of MS-DOS, as I was able to quickly install it using USB. I was able to bring over the custom software from the old hard drive using an IDE to USB converter, and the CNC machine was able to continue running just like it was before. This was back in 2012, and as far as I know it is still in operation to this day.

I also purchased several computers from Dell that gave me the option of shipping with FreeDOS instead of Windows. This was back before Dell would ship Linux as an option, but they had to ship the computer with "something" on the hard drive for it to leave the factory.

FreeDOS is also used by some vendors for BIOS and Firmware updates, and I have seen multiple instances of this as well over the years. I have been sent utilities over the years from vendors that used FreeDOS to run low-level diagnostics on hardware during troubleshooting processes.

## FreeDOS on the IBM ThinkPad 380ED ##

I used my IBM ThinkPad 380ED to test the installation of FreeDOS, and it worked exceptionally well. Below are some details on the laptop itself, as well as my experience on running some applications on it.

### IBM ThinkPad 380ED Specifications ###

| Component        | Hardware                                     |
|:-----------------|:---------------------------------------------|
| CPU              | Intel Pentium MMX 166 @ 166 MHz              |
| GPU              | NeoMagic MagicGraph128ZV Integrated Graphics |
| Audio            | Crystal Semiconductor CS4236B Audio          |
| Standard Memory  | 16 MB                                        |
| Max Memory       | 80 MB                                        |
| Interfaces       | <ul><li>1 x VGA Port</li><li>1 x Parallel Port</li><li>1 x Serial Port</li><li>1 x PS/2 Port</li><li>1 x Infrared Port</li><li>2 x Type I/II PC Card Interface</li><li>1 x Type III PC Card Interface</li><li>1 x 3.5 mm Audio Output</li><li>1 x 3.5 mm Microphone Input</li></ul> |
| Wired LAN        | None                                         |
| Wireless LAN     | None                                         |
| Floppy Drive     | Internal 3.5" Floppy Drive                   |
| Optical Drive    | Internal 5.25" CD-ROM Drive @ 8X-20X Speed   |
| Hard Drive       | Internal 2.5" IDE Hard Drive @ 3.0 GB        |
| Display          | 12.1" TFT SVGA Screen @ 640x480, 800x600     |
| Dimensions       | 11.8" x 9.2" x 2.4"                          |
| Weight           | 3.2 kg                                       |

### FreeDOS Installation ###

I won't go into the details on the process for installing FreeDOS as it is straightforward and well documented. The only issue that I did have was that I was not able to get the provided FreeDOS boot disk to work correctly. I tried writing the image to a floppy disk several times, but it did not work for whatever reason.

I ended up using a Windows 98 SE boot disk to load the FreeDOS installation CD and install the operating system with all applications and games.

![FreeDOS on the IBM ThinkPad 380ED After Bootup](/images/blog/00043/freedos-13-bootup.png)

All the hardware was detected, including a PS/2 Mouse that I had attached to the laptop. I did not test the PCMCIA slots as I did not have any devices available for testing right now. I did not spend any time trying to change the resolution of the screen or try to fill the entire screen.

### Games ###

FreeDOS ships with several DOS games on the installation CD, and among them is the latest version of Freedoom. It is a free game based on the Doom engine and is fun to play. Everything worked for the game, including audio and mouse support.

![Freedoom running on FreeDOS on the IBM ThinkPad 380ED](/images/blog/00043/freedos-13-freedoom.png)

I still have my original Command & Conquer (Tiberian Dawn) disks that I have had since 1997, which was the DOS version of the game and not the Windows 95 version that was released later. Aside from the screen resolution being low, it works perfectly, including the videos, music, and mouse input.

![Command & Conquer Tiberian Dawn running on FreeDOS on the IBM ThinkPad 380ED](/images/blog/00043/freedos-13-cc.png)

The original Command & Conquer games included multiplayer support using Null Modem cables, which enabled local multiplayer support. It would be interesting to take one of my other laptops and attempt to use a Null Modem cable to test this functionality as I have not tried it in over 20 years, but that is a test for another day.

## Final Thoughts ##

Overall, I was fairly impressed with the FreeDOS operating system after my most recent exposure to it. I have always found it to be a very well-made operating system that is relatively easy to use, considering what it is trying to duplicate. At the end of the day, if I am just looking to play some older games it is considerably easier to just use an application such as [DOSBox](https://www.dosbox.com/) to do that, but there is nothing quite like playing a game on the original hardware.

Sure, I can just reboot into MS-DOS from Windows 9x (except with Windows Me), but if I have the option to use open-source software instead I usually take it.

## Links ##

* [DOSBox](https://www.dosbox.com/)
* [Freedoom](https://freedoom.github.io/)
* [FreeDOS](https://freedos.org/)
* [OSNews](https://www.osnews.com/)
