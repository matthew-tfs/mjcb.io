---
title: "Apple ARM Transition"
slug: "apple-arm-transition"
date: "2020-06-28T09:45:00-05:00"
author: "Matthew Burr"
summary: "It has been a rumour for many years that Apple was finally going to ditch Intel and use their own custom processors in all of their devices, the exact same ones that they have been utilizing in their iOS devices for the last few years."
tags: [
    "Apple",
    "ARM",
    "macOS"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00035/apple-silicon.jpg"
featureImage: "/images/blog/00035/apple-silicon.jpg"
draft: false
---

It has been a rumour for many years that Apple was finally going to ditch Intel and use their own custom processors in all of their devices, the exact same ones that they have been utilizing in their iOS devices for the last few years. 

{{< toc >}}

## Apple Silicon

Moving to Intel back in 2005 was probably one of the best decisions that Apple made at the time for the Mac, since the PowerPC architecture was not catching up to Intel’s performance and the thermals with PowerPC chips were getting worse with every new iteration. On Monday June 22, 2020 the announcement finally came out that they were not only going to use their own ARM processors on new Mac computers, which will officially be known as Apple Silicon, they would be migrating their entire product line in 2 years. It is a massive undertaking and I would be impressed that by late 2022 if they are able to do this or get close to completing this task. Fortunately they have a plan in place to allow for the co-existence of two different architectures for the future, so just because you have an Intel Mac it doesn’t mean that you are stuck with a dead platform.

You can view the entire event on Apple's website. It was definitely a much different presentation that they were probably planning for due to the COVID-19 pandemic (it is almost 2 hours long):

[https://www.apple.com/apple-events/june-2020/](https://www.apple.com/apple-events/june-2020/)

The big takeaways from the presentation, Intel and Apple are parting ways, iOS 14 is finally introducing new features to the home screen, Apple's new processors and chipsets are coming to Apple's entire product line, Rosetta is back, macOS Big Sur is the successor to macOS Catalina, and the macOS 10.0 line is finished after 19 years and 16 major releases.

## Why is ARM Important to Me?

I have written about several Windows-based ARM devices in this blog before, for some reason it is something that I have been interested in for the last few years. I have always liked the idea of having a low powered and efficient device that is capable of all-day battery life, something that is instant-on, something that is lightweight and something that doesn't generate a lot of heat. Having built-in LTE is something that was nice to have as well, but since I always have my phone with me I only need to take an extra few seconds to setup a hotspot so I never really cared about that.

I have owned two laptops that are ARM-based in the last few years, the original [Surface RT](/blog/2018/08/05/windows-on-arm/) and the [Lenovo Miix 630](/blog/2018/10/04/lenovo-miix-630/). There were a lot of downsides to both of these devices and that was due to a lot of factors:

* Software that was not optimized to work on ARM. Windows is a portable Operating System that was designed from day one to work on multiple processor architectures, but parts of the User Space environment (mostly Win32) was never optimized particularly well for anything other than x86. Windows 8 and the Metro UI was designed to overcome part of this limitation, but it was not enough to make the user experience that memorable and lack of widespread adoption doomed this setup.
* Lack of control of the processor and chipset. At the end of the day, if you are buying a processor and chipset from a provider such as Qualcomm, you can’t really have them put in custom hardware optimizations for only your software. They design their chips to work on the most devices possible, so it is not feasible to produce custom chips for a specific vendor and for a specific device.
* Apps. One of the reasons that Windows on ARM has had such lackluster adoption rates was due to the lack of applications. Creating a walled garden ecosystem only works if you have the support of application developers.

I am confident that Apple will be successful with their transition to ARM because they have successfully created their own Apple Silicon processors and chipsets. They will easily optimize the hardware and software to work the best with their macOS Operating System, which is something that they are very good at doing already with iOS. The reason that the iPhone and other iOS devices have been so successful was partly due to their ability to have almost 100% control of the hardware and software. In the typical Apple fashion, if the product is not good they won’t simply won’t release it (hopefully).

Oddly enough the best Windows ARM device I ever owned was the Nokia 830 Windows Phone running Windows Phone 8.1. It had the benefit of the Metro design interface without any of the legacy features from other versions of Windows.

## Benefits of Apple Silicon Mac Computers

There are definitely some advantages that Mac computers will have using Apple Silicon over conventional x86 computers that is currently is use:

* Optimized hardware for just one Operating System rather than multiple Operating Systems.
* Smaller logic boards and better thermals on all devices (hopefully).
* Thinner and smaller devices (the most expected benefit).
* Better battery life (again, hopefully).
* Access to almost the entire iOS App library.
* More common codebase to maintain since the architecture will be the same as all Apple devices.

Apple also has the benefit of having pretty much perfected the current iPad Pro line with their latest release (the 4th generation). They will be able to take the lessons learned from that platform and apply it to their Mac line as well. I have been using the iPad Air 3 for the last 6 months and I have no complaints about the performance of it and I find it works amazingly well considering it's apparent limitations compared to more powerful x86 computers. The idea of Apple taking an iPad Pro and converting it to a proper and conventional computer would not be the worst idea in the world.

## Apple Silicon Transition Period

Apple has a plan to allow for the transition to their Apple Silicon based Mac computers. Their current offering is a development kit that will give developers the ability to port their applications in advance of the introduction of new Apple Silicon Mac computers. The development kit, known as the **Developer Transition Kit**, will be a modified Mac Mini with the A12Z SoC Processor, 16GB of memory and a 512GB SSD and a Beta version of the macOS Big Sur Operating System. This is the exact same processor that the current iPad Pro uses:

![Developer Transition Kit](/images/blog/00035/mac-mini-transition-kit.jpg)

Also coming with macOS Big Sur is Rosetta 2 which will bridge the gap between the legacy Intel-based Mac devices and the new Apple Silicon Mac devices. This will supposedly perform optimizations to applications at installation time to allow them to work more efficiently on the new architecture while the developer transitions those applications at a later date. This also means that the Universal apps are back as well, which allows applications to be compiled with support for both architectures at compile time:

![Apple Architectures](/images/blog/00035/apple-silicon-xcode-alert.jpg)

## Downsides of Apple Silicon for Mac

Even though there are a lot of benefits to moving to ARM through Apple Silicon, there are some downsides, but they aren’t as bad as it seems. The most obvious downsides are:

* No more Bootcamp support.
* End of the Hackintosh (most likely).
* Further lockdown of the Mac platform.

These are not necessarily bad things. I have never found there to be any real point to Bootcamp, and in my opinion it is a legacy feature that existed before client side virtualization became as usable as it is today. The Hackintosh is not really a serious loss either as it was never a supported feature anyways, plus it isn’t really widely used. While it is impressive to get it working (I was able to install macOS Catalina on a ThinkPad a few weeks ago), I found it to be quite gimmicky and not really that useful.

As part of their demonstration during the June 22nd event, they did showcase several virtualization solutions running natively on Apple Silicon:

![Apple Silicon Virtualization](/images/blog/00035/apple-silicon-3rd-party.jpg)

The further lockdown of the Mac platform is an interesting thing to consider. At the end of the day, Apple is essentially turning the Mac line into giant iOS devices, with the same hardware and software. I personally don’t have any issues with this, but there will definitely be people who have issues with it, voicing the same concerns that they already have the iOS.

## Will I Buy an Apple Silicon Mac?

I’m undecided right now. As much as I am a fan of the iPhone and the iPad, I have never been particularly fond of the Mac itself as a platform. This is probably because I never even used a Mac device until I was in University, and I rarely dealt with them at any of my workplaces. I have never liked the way the macOS interface and workflow works, but I blame that on being a Windows user for the last 25 years. I should like macOS because it is a UNIX derived Operating System, but that is not enough for me. Oddly enough, the iPhone XS is without a doubt the best phone that I have ever owned and it is running the same software and Operating System that macOS will be in the next few years.

However, I am very interested to see the reviews on the initial Apple Silicon Mac computers. The one device that I am the most interested in is the the MacBook Air, and how the Apple Silicon architecture improves it. At that point I would seriously consider getting my first Mac computer. At the same time I am still a huge fan of the iPad, I have been using my iPad Air 3 with the Smart Keyboard for the last few weeks for productivity and have been very happy with it so I may end up getting an iPad Pro. The changes made recently to iPadOS have made it considerably more useful and easier to use, so only time will tell.
