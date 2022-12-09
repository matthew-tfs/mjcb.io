---
title: "Apple Silicon, One Year Later (Part 1)"
slug: "apple-silicon-one-year-later-part-1"
date: "2022-01-25T08:05:00-05:00"
author: "Matthew Burr"
summary: "I have written about my obsession with ARM processors and why I have wanted one in a daily driver laptop many times before on this website. It has been something that I have wanted in a laptop for a long time, but unfortunately the hardware and software options were never quite there yet. I have tried many ARM devices over the last 10 years which promised that they could be a daily driver device, or at least something close to that. I was always disappointed with those devices and I never really found something that worked reliably for me. As time went on, I realized that I really wanted an ARM-based device as my daily driver, regardless of the form factor."
tags: [
    "Apple",
    "ARM",
    "Gentoo",
    "Linux",
    "macOS"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00042/apple-m1.png"
draft: false
---

I have written about my obsession with ARM processors and why I have wanted one in a daily driver laptop many times before on this website. It has been something that I have wanted in a laptop for a long time, but unfortunately the hardware and software options were never quite there yet. I have tried many ARM devices over the last 10 years which promised that they could be a daily driver device, or at least something close to that.

I was always disappointed with those devices and I never really found something that worked reliably for me. As time went on, I realized that I really wanted an ARM-based device as my daily driver, regardless of the form factor.

What ended up happening is that I ended up finding the perfect device, and it is now the only device that I use.

This post ended up being a lot longer than I had planned and went on some tangents, so it is going to be split into two separate posts (the second part will be linked later once it has been written).

{{< toc >}}

## Why Do I Care About This? ##

There are a lot of reasons why I care about this particular subject and it goes back to the first laptop that I ever owned, which was a Compaq Presario R3210CA laptop from mid-2004. It also goes back to the second laptop that I ever owned, which was a Compaq Presario V2305CA laptop from mid-2005. It also relates to all of the other laptops that I have owned up until 2021, when I finally got the MacBook Air with the M1 processor, which ended up becoming the best daily driver device that I have ever owned.

Back in the early 2000's I was very much into using Linux as my primary Operating System, and supporting it was important to me. I still use and support Linux on a daily basis, but mostly for IT related reasons. I don't use Linux as my desktop Operating System anymore, but I keep at least one device around with Linux in case I need it.

It may seem odd to talk about the older laptops that I have used, but who else is going to write about what are very obscure and obsolete laptops in 2022? I have included some information about those two laptops below if anyone is interested.

### Compaq Presario R3210CA ###

Finding information on an almost 20 year old laptop that was a specific model just for Canada was actually quite difficult, but fortunately the [Wayback Machine](https://web.archive.org/) was helpful in piecing together the important details on the laptop. The Compaq Presario R3000 series had many different revisions, and the "CA" models were mostly just changes to the keyboard to support French.

For hardware specifications, they were fairly standard for the time for a mid-range laptop:

| Component        | Hardware                               |
|:-----------------|:---------------------------------------|
| CPU              | AMD Mobile Athlon XP 2800+ @ 2.133 GHz |
| GPU              | NVIDIA GeForce 4 420 with 32 MB DDR    |
| Standard Memory  | 256 MB (PC2700 333 MHz DDR SDRAM)      |
| Max Memory       | 1280 MB                                |
| Interfaces       | <ul><li>3 x USB 2.0 Ports</li><li>1 x Type I/II PC Card Interface</li><li>1 x 5-in-1 Card Reader</li><li>1 x VGA Port</li><li>1 x Parallel Port</li><li>1 x S-Video Port</li><li>1 x 56 KB Modem</li><li>1 x 3.5 mm Audio Output</li><li>1 x 3.5 mm Microphone Input</li></ul> |
| Wired LAN        | 10/100 Ethernet                        |
| Wireless LAN     | 802.11 b/g Integrated Wifi             |
| Optical Drive    | 24X DVD/CD-RW Combo Drive              |
| Hard Drive       | 40 GB 4200 RPM ATA Hard Drive          |
| Display          | 15" TFT XGA @ 1024x768                 |
| Dimensions       | 4.60 cm x 36.20 cm x 28.40 cm          |
| Weight           | 3.59 kg                                |

The Compaq Presario R3210CA was fairly basic compared to modern laptops, shipping with only 256 MB of RAM and with a fairly low-end AMD Athlon XP mobile processor. It was definitely a product of it's time, shipping with a Parallel port on the back of the laptop. Consumer printers at the time did not always use USB, so Parallel ports were commonly used and present on laptops to support printers. The only surprise was that there was no Serial port, as there was definitely enough room to have one on the laptop.

The two main issues that I had with the laptop was that it weighed over 8 pounds and had less than 2 hours of battery life with the supplied battery, so it wasn't exactly portable compared to modern laptops. I used it when I was in University and I always had to take the AC adapter with me in order to make it through the day.

The laptop shipped with Windows XP Home Edition as the default Operating System, but I ended up installing [Debian Linux](https://www.debian.org/) on it after a few months. Linux at the time had very poor hardware support for laptops, but using various workarounds it was possible to get most of the hardware working to a degree. On this particular laptop, I had a lot of issues with the video drivers and the wireless drivers, which was common at the time. It was usable with Linux, but I always had to maintain a dual-boot configuration for when I just needed it work.

I only owned this particular laptop for around a year, as I decided to get one that had better Linux support and was smaller, and that was the Compaq Presario V2305CA.

### Compaq Presario V2305CA ###

Information on this laptop was slightly easier to find information on compared to the Compaq Presario R3210CA model. Just like with other models at the time, the Compaq Presario V2000 series had multiple revisions over the lifetime of the series.

For hardware specifications, they were once again fairly standard for the time for a mid-range laptop:

| Component        | Hardware                               |
|:-----------------|:---------------------------------------|
| CPU              | AMD Mobile Sempron 3000+ @ 1.8Ghz      |
| GPU              | ATI Radeon Xpress 200M with 128 MB DDR |
| Standard Memory  | 512 MB                                 |
| Max Memory       | 2048 MB                                |
| Interfaces       | <ul><li>2 x USB 2.0 Ports</li><li>1 x Type I/II PC Card Interface</li><li>1 x 6-in-1 Card Reader</li><li>1 x VGA Port</li><li>1 x S-Video Port</li><li>1 x 56 KB Modem</li><li>1 x 3.5 mm Audio Output</li><li>1 x 3.5 mm Microphone Input</li></ul> |
| Wired LAN        | 10/100 Ethernet                        |
| Wireless LAN     | 802.11 b/g Integrated Wifi             |
| Optical Drive    | 24X DVD/CD-RW Combo Drive              |
| Hard Drive       | 60 GB 4200 RPM ATA Hard Drive          |
| Display          | 14" WXGA @ 1280x768                    |
| Dimensions       | 3.89 cm x 33.40 cm x 23.15 cm          |
| Weight           | 2.36 kg                                |

The Compaq Presario V2305CA was still fairly basic, but did offer a larger amount of RAM options, better graphics, and a better screen than the Compaq Presario R3210CA. The processor speed decrease was not really an issue for me, it was not a significant amount and the Sempron was considerably more power efficient. Losing the Parallel port was not an issue, as I actually did not require it.

![My Compaq Presario V2305CA from late 2005. Please excuse the lava lamp and the Matrix screensaver.](/images/blog/00042/compaq-presario-v2305ca.jpg)

The biggest difference for this laptop was the weight, the size and the increased battery options. The laptop shipped with a 6-cell lithium ion battery, but I ended up purchasing a 12-cell lithium ion battery. This put the usable lifetime of the laptop up to around 5 hours.

The laptop also shipped with Windows XP Home Edition as the default Operating System, but I ended up installing [Gentoo Linux](https://www.gentoo.org/) on it as the primary Operating System. The laptop had considerably better Linux support, and the only issue that I had was getting the Wifi to work. I was able to resolve this by using [NDISwrapper](http://ndiswrapper.sourceforge.net/) to load the Windows drivers for the Wifi card. Using Gentoo with a custom kernel gave this laptop excellent Linux support for 2005.

I owned this laptop for a few years, giving it up in my final year of school for something different.

### Comparing the Compaqs ###

Even though it was only a one year difference, there were some major differences between two laptops from the same manufacturer. Part of the changes could have been due to the fact that Compaq had been acquired by HP two years earlier, and there were differences in the way that HP designed their laptops. The Compaq Presario V2000 series was essentially a rebranded HP DV1000 laptop with a different exterior look and a few minor differences.

Regardless of how the laptops were designed and who built them, The V2305CA laptop was better for a few reasons:

* Even though the processor speed on the Sempron was not as good as the Athlon XP, it was considerably more power efficient (62 W vs 25 W power usage).
* The included battery was much better, and the expanded 12-cell battery doubled the usable time.
* It was smaller and lighter.
* It had a better screen.
* It had better Linux support.

Something that is taken for granted is the use of solid-state drives compared to regular hard drives. The performance increase, and the increased reliability have made significant improvements to laptops in the last 10 years.

Like with everything in life, your mileage may vary with these things. If you don't know what you are looking for with something or have never bought one before, you may experience some issues, especially if you decide to run software that wasn't designed for it.

## What Were the Issues? ##

Until 2004 I had only owned large, complicated desktop computers up until that point and I thought that desktops were just needlessly complicated. When I got my first laptop I was finally able to actually be portable, and not rely on things like lab computers or carrying around USB drives to be able to access my files. I actually got rid of my desktop computer around a year after I got my first laptop, as I had almost completely stopped using it and it was just taking up space in my dorm room. I also got tired of dragging it around with me as I moved between cities, which as a post-secondary student is quite annoying.

Around the same time I had also stopped using all of my computers for gaming as I preferred to use my consoles for gaming when I felt like it, so there was never a constraint on specifications for graphics which is a deal breaker for some people.

The main problem was that laptops in the early 2000's were usually fairly clunky in nature, were usually quite heavy, had terrible thermals, had very poor battery life, and support for Linux was not even best effort. These were the main complaints that I had with my original Compaq Presario R3210CA. They usually had horrible thermal issues due to the processors that were being used (most often Intel Pentium 4 and AMD Athlon XP processors), and on more than one occasion I had seen deformed screens from the heat from the processor radiating through the keyboard when the lid was closed. They also had a considerable amount of proprietary ports, specifically the power ports which tended to always be different. The lack of Linux support on laptops was a real issue, as the driver support was never really there. When drivers were available, they were often in a binary blob which was poorly supported (wireless drivers were notorious for this).

I had a horrible habit for many years on buying multiple AC adapters for any laptop that I had for personal use or for work so that I didn't need to carry AC adapters them around with me. Docking stations were expensive back then, and not all laptops had the option to use them. Fortunately, USB C has made this much simpler in the last few years for charging laptops and expanding port selections through a single interface. Battery life in general has also greatly improved in the last 20 years, which made it less of an issue overall, at least for me. Vendors like Apple did a much better job of creating laptops in the early 2000's, especially with the iBook line. As interested as I was in the iBook in the early 2000's, the price for them was a bit out of my reach.

## Why Compare Old Laptops? ##

I wanted to establish what my first experiences were and how far things have come since then. Technology has changed a lot in almost 20 years, so issues that I was experiencing have gradually decreased over time. I just didn't think it would take this long to get to this point.

I also ended up owning and using multiple others over the years including:

* Acer Aspire One A110L - September 2008
* Acer Aspire One D250 - February 2010
* [Surface RT](/blog/2018/08/05/windows-on-arm/) - March 2013
* ASUS ZenBook UX305CA - August 2016
* Surface Pro 4 - November 2016
* Surface Laptop - September 2017
* [Lenovo Miix 630](/blog/2018/10/04/lenovo-miix-630/) - July 2018
* Lenovo ThinkPad P51 - August 2018
* Surface Go - November 2018
* MacBook Air (M1, 2020) - March 2021

This does not include any of the laptops that I used at any of my places of employment, but they were always business laptops from Dell, HP and Lenovo. I have never been offered anything from Apple from an employer.

## What Did I Want? ##

So what does this have to do ARM-based laptops and why did I want one? It really comes down to a few things, the main reasons why I have even wanted such a device are:

* I wanted a simplified design
* I wanted a cool and fan-less design
* I wanted instant on capability
* I wanted long battery life
* I wanted modern ports and the ability to use one port for charging and for a dock

I also wanted a more simplified Operating System, as I was getting tired of a lot of the cruft that had accumulated in most Operating Systems over the years (Windows had gotten pretty bad around the time of Vista and 7). Windows at it's core can be a lean Operating System if it wants to be, but Microsoft has a habit of intentionally slowing it down with unnecessary services that most people don't use. Prior to Windows 7, Windows at it's core was extremely monolithic in nature.

Windows 10 S Mode was supposed to fix a lot of the issues by only allowing applications from the Microsoft Store to run, but that turned out to be a complete failure because they didn't really know how to market it or even explain what it was. At one point I had a Surface Laptop running Windows 10 S Mode, but it never worked correctly. Annoyingly, it would spontaneously switch back to regular Windows 10 without any prompts whenever it ran into an issue with a driver update or a library update. The only way to go back to S Mode was to reinstall the Operating System, which was not exactly a convenient option. I thought that Windows 10X would finally deliver on some of the promises of an optimized Windows Operating System for devices, but as per usual this product is yet another casualty of Microsoft not having any direction.

Over the last 10 years I have tried several options for ARM-based laptops, including the original [Surface RT](/blog/2018/08/05/windows-on-arm/) and more modern solutions such as the [Lenovo Miix 630](/blog/2018/10/04/lenovo-miix-630/) and the Surface Pro X. While these devices were ARM-based, the software and hardware was never really there and most of the blame goes to a lack of optimization. The ARM processors that those systems used were never specialized for the hardware and software, they were designed to work on anything which meant that there was no optimization whatsoever. I had an Apple iPad Air 3 with the Smart Keyboard for a few months, and while I liked it, there was always those few issues with it that caused me to stop using it. iPadOS did go through a lot of advancements and Apple listened to user feedback on issues, but there were always little problems keeping me from using it. I even tried using it as my only device for an entire week as an experiment, but by the last day I was ready to be done with it. The issue that I really had with devices like the Surface line or the iPad, was that I didn't want a tablet with a keyboard awkwardly attached, I just wanted a normal laptop. I tried Chromebooks with this mindset, but there were just too many limitations for my liking, but the devices that I tried worked very well and I have recommended them to many people looking for a simple computer.

This all changed in the summer of 2020 when Apple announced that they were bringing their ARM processors to the MacBook line in the form of Apple Silicon. I wrote about this when it was announced ([Apple ARM Transition](/blog/2020/06/28/apple-arm-transition/)), and I finally picked up one of those devices when they became available. Needless to say, I am very impressed and happy with what Apple has done with a first-generation device and I changed a lot of my opinions on what those devices were capable of. I am no fanboy of Apple, but when they decide to bring a major new product to market, they won't do it unless it works perfectly.

## Continued Reading ##

I will post the link for part two of this post when it has been written.
