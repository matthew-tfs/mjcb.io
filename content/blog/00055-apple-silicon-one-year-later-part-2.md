---
title: "Apple Silicon, Two Years Later (Part 2)"
slug: "apple-silicon-two-years-later-part-2"
date: "2023-05-22T20:05:00-05:00"
author: "Matthew Burr"
summary: "So, this post ended up taking a lot longer to put together than I thought it would. I am still using the same MacBook Air (M1, 2020) that I was using 16 months ago when I wrote the first post, and I am still happy with the performance and the capabilities of it. I have owned it since February 2021 and been using it as my primary machine for over 2 full years now. Enough has been written on the capabilities and performance of Apple Silicon chips, so I am just going to talk about my experiences with it."
tags: [
    "Apple",
    "ARM",
    "macOS"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00055/apple-m1.png"
draft: false
---

So, this post ended up taking a lot longer to put together than I thought it would. I am still using the same MacBook Air (M1, 2020) that I was using 16 months ago when I wrote the first post, and I am still happy with the performance and the capabilities of it. I have owned it since February 2021 and been using it as my primary machine for over 2 full years now. Enough has been written on the capabilities and performance of Apple Silicon chips, so I am just going to talk about my experiences with it.

I am normally quite hesitant of getting a first generation device, but I took a risk with getting the MacBook Air (M1, 2020) knowing Apple's track record with these things. After over 2 years I am still very happy with the device, and I think I definitely found the ARM device that I have been wanting for years.

While this post is titled "Apple Silicon, One Year Later", it is actually "Apple Silicon, Two Years Later" since I took so long to write it. This post is split into two parts, you can find the first part [here](/blog/2022/01/25/apple-silicon-one-year-later-part-1/).

{{< toc >}}

## Apple Silicon ##

It really came as no surprise to anyone when Apple announced that they were ditching Intel processors and moving to their own processors ([Apple Silicon](/blog/2020/06/28/apple-arm-transition/)) back in the summer of 2020. Apple had made considerable advancements to their SoC offerings on the iPhone and the iPad, so it was just a matter of time before they brought those advancements to their desktop products as well. Apple also had an advantage since iOS/iPadOS was always based on versions of macOS, so a lot of the "hard work" was already completed in regard to porting macOS to ARM and understanding the underlying architecture. They already understood how to run it as optimized as possible, since iOS devices run only on battery most of the time.

Apple is no stranger to changing architectures for their computers, the last time being when they moved from PowerPC to Intel. It had been over 15 years since that migration occurred back in 2006, but I don't remember there being too many issues with that transition. The use of Universal applications and Rosetta helped the transition go smoothly, and this won't be the last time that Rosetta would be used.

![Apple Silicon M1 basic architecture diagram.](/images/blog/00055/apple-silicon.jpg)

The original M1 processor was the first Apple Silicon chip that was released by Apple. For a first generation device, it is extremely impressive and was used to power the following devices:

* iMac (24-inch, M1, 2021)
* iPad Air (5th generation, 2022)
* iPad Pro (11-inch, 3rd generation, 2021)
* iPad Pro (12.9-inch, 5th generation, 2021)
* Mac Mini (M1, 2020)
* MacBook Air (M1, 2020)
* MacBook Pro (13-inch, M1, 2020)

After the release of the M1 processor, Apple released the **M1 Pro**, the **M1 Max** and the **M1 Ultra**. These chips are enhanced versions of the M1 processor and were used in the high-end MacBook Pro and the Mac Studio.

There were many options to choose from, and while I seriously considered getting an iPad Pro (12.9-inch, 5th generation, 2021), I ultimately ended up getting a MacBook Air instead. I also decided against getting the MacBook Pro, and I will go into the details of why I made that decision below.

I have tried using the iPad Pro as a primary device more than once, and while it can be used for most daily tasks, there are many instances where it is not quite there yet. There are a lot of things that it does well, but using it is a "desktop replacement" is not really an option.

## MacBook Air (M1, 2020) ##

There are a few reasons why I went with the MacBook Air (M1, 2020) instead of the MacBook Pro (M1, 2020), and the reasons were not because of cost, but because of the performance that I would get by default without needing to get the MacBook Pro. I compared the specifications of both computers, and they were virtually identical with only a few minor differences (listed in the table below).

I wasn't overly concerned with the GPU specifications, or graphics in general as that is not a deciding factor for me owning a computer. Graphics capabilities have not been a deciding factor in buying a computer for many years for me. I don't play games on computers (and I sure wasn't going to do it on a Mac) or do any type of high intensity tasks that require a GPU. Most of the work that I do on a computer is done remotely on servers or other devices, so the speed of my device is not relevant to me.

Overall, the MacBook Air (M1, 2020) looks similar to the Intel-based MacBook Air from 2018:

![MacBook Air (M1, 2020) in my home office with an ironic background.](/images/blog/00055/macbook-air-m1.jpg)

### Hardware Specifications ###

There weren't too many customization options when selecting the MacBook Air (as per usual with Apple), the only change I made was the size of the SSD storage from the default 256 GB size to 512 GB. I didn't have an issue with the 8 GB of memory and left it as the default option.

Since I was deciding between the MacBook Air and the MacBook Pro, I had to do a quick comparison of the specifications. Compared to the MacBook Pro (M1, 2020), the MacBook Air (M1, 2020) specifications are very similar (the differences are highlighted):

| Component        | MacBook Air                               | MacBook Pro                               |
|:-----------------|:------------------------------------------|:------------------------------------------|
| Model Number     | M1, 2020 (November)                       | M1, 2020 (November)                       |
| Display          | 13.3" 2560 x 1600 pixels (16:10, 227 ppi) | 13.3" 2560 x 1600 pixels (16:10, 227 ppi) |
| Processor        | 3.2 GHz 8-Core Apple M1 CPU               | 3.2 GHz 8-Core Apple M1 CPU               |
| Graphics         | **7-Core Integrated GPU**                 | **8-Core Integrated GPU**                 |
| Memory           | 8 GB LPDDR4X-4266 Unified RAM             | 8 GB LPDDR4X-4266 Unified RAM             |
| Storage          | 256 GB PCIe SSD                           | 256 GB PCIe SSD                           |
| Keyboard         | Magic Keyboard with Touch ID              | Magic Keyboard with Touch ID              |
| Trackpad         | Force Touch Trackpad                      | Force Touch Trackpad                      |
| Camera           | FaceTime HD (720p)                        | FaceTime HD (720p)                        |
| Wifi             | Wi-Fi 6 (802.11 a/b/g/n/ac/ax)            | Wi-Fi 6 (802.11 a/b/g/n/ac/ax)            |
| Bluetooth        | Bluetooth 5.0                             | Bluetooth 5.0                             |
| Connections      | 2 × Thunderbolt 3 (USB-C 4) Ports         | 2 × Thunderbolt 3 (USB-C 4) Ports         |
| Headphone        | 1 × 3.5mm Headphone Jack                  | 1 × 3.5mm Headphone Jack                  |
| Battery          | **43.8 mAh**                              | **58.2 mAh**                              |
| Weight           | **2.8 lb (1.29 kg)**                      | **3.0 lb (1.4 kg)**                       |
| Dimensions       | **11.97" × 8.36" × 0.16" to 0.63"**       | **11.97" × 8.36" × 0.61"**                |
| Base Cost        | **$1,299 (CAD)**                          | **$1,699 (CAD)**                          |

The biggest differences between the two computers were the GPU, the battery and the base cost. The dimensions and weight weren't really an issue, but the MacBook Air is just slightly smaller overall, owing to the iconic shape of the MacBook Air. Specifications such as the screen, camera, connectivity, and input options are identical.

For the storage options, both computers offer 256 GB as standard, with 512 GB, 1 TB and 2 TB as additional options. For memory, 8 GB is standard, and 16 GB is the maximum (the limit of the M1 processor). The SSD and RAM are not upgradeable, and the options chosen at the time of purchase are what you are stuck with for the lifetime of the computer.

At the end of the day, I didn't think the extra $400 for a bigger battery was worth it. The MacBook Pro (at the time) did not come with any additional ports or anything else to really differentiate it from the MacBook Air. I didn't care about the 1 extra GPU core, and I decided I would rather use the $400 for more storage.

### Software ###

The computer shipped with macOS Big Sur (version 11) by default, and since then it has been upgraded to macOS Ventura (version 13). I really don't have much to say about macOS in general, it is a very modern and stable Operating System. It did take a bit of getting used to since I never really used a Mac for an extended period of time, but I have since gotten the hang of it. Since I have been using Linux for almost 20 years, I definitely appreciate the underlying BSD architecture.

There has been a considerable amount of work on getting Linux to run on Apple Silicon devices through the [Asahi Linux](https://asahilinux.org/) project and the results have been very promising, but I have not tested it yet. I want to use the laptop as it was intended, with software that is fully supported by the vendor.

### Limitations ###

The first generation Apple Silicon M1 devices shipped without support for dual monitors (without workarounds), but that wasn't an issue for me since I moved to a single monitor setup around the time that I bought the MacBook Air.

There is also a lack of eGPU support, but that is not an issue for me since I never intended to use this device for gaming, and I don't have an eGPU to use with it anyways.

### Peripherals ###

I don't have a particularly complicated setup with my MacBook Air in my home office, and it consists of the following equipment:

* Apple Magic Mouse
* BenQ EW3270U 32" 4K HDR Monitor
* Dell WD19TBS Thunderbolt Dock
* HyperX Alloy FPS Pro Keyboard
* Microsoft Modern Webcam

The Dell WD19TBS Thunderbolt Dock does occasionally cause issues with the MacBook Air which I have not encountered with other laptops that I use. Whenever the MacBook Air wakes from sleep the external monitor does not always work correctly, and only displays a black screen. The only solution I have ever found is to disconnect the dock and reconnect it, and the external monitor will work again. I have updated the firmware on the dock, so I can only assume that this is an issue related to the MacBook Air. It is more of an annoyance than a major issue, but something that I am aware of.

## Daily Usage ##

The MacBook Air (M1, 2020) has been my daily driver for over 2 full years and has worked exceptionally well for me so far. My workflow is not exceptional in any way, and at the end of the day I don't do anything overly complicated with the laptop.

### Applications ###

Aside from the stock macOS applications that I use on a daily basis (Photos, Notes, Calendar, etc.), I also regularly use the following third-party applications:

* Family Tree Maker 2019
* Foxit PDF Editor
* GIMP
* GitHub Desktop
* KeePassXC
* Microsoft 365 Apps (Excel, OneNote, Teams, Word)
* Microsoft Edge
* OpenVPN Connect
* Parallels Desktop
* Royal TSX
* Visual Studio Code
* VLC

There are also a few other applications that I use on a somewhat regular basis, including [Hugo](https://gohugo.io/) and [MacTeX](https://tug.org/mactex/), which are also available natively for Apple Silicon.

All of these particular applications are running natively on the MacBook Air, and not using Darwin2 at all. Some of those applications were originally not compiled with support for Apple Silicon, but after almost 2 and a half years, all of the applications have been compiled to support it.

The Activity Monitor shows the "Kind" of application that is currently running. On an Apple Silicon computer it will show either "Apple" or "Intel". An Apple application is running natively, and is compiled for Apple Silicon and Intel is using Darwin2 and is being converted to run.

An easy way to check is to sort the "Kind" column to see what type of application is running:

![Activity Monitor showing the kind of application that is running on the MacBook Air.](/images/blog/00055/apple-silicon-cpu.png)

As time has gone on, the number of Intel applications that were running has gone to zero, and my MacBook Air is only running Apple Silicon applications.

Despite my MacBook Air only having 8 GB of memory, I do not find that amount to be too limiting:

![Activity Monitor showing the memory usage on the MacBook Air.](/images/blog/00055/apple-silicon-memory.png)

The only time that I find it limiting is when I am running multiple virtual machines, which I don't do as often anymore as I run most of those workflows in Azure.

### Virtualization Options

I ended up getting a subscription for [Parallels Desktop](https://www.parallels.com/ca/products/desktop/) for virtualization and it works exceptionally well. It is obviously limited by the architecture of the MacBook Air as it uses ARM instead of x64, but that isn't really a problem since there are multiple options that are easy to setup using the Installation Assistant:

* Windows 11
* Ubuntu Linux
* Fedora Linux
* Debian GNU/Linux
* Kali Linux

It also offers a pre-packaged macOS 13 Ventura virtual machine that can be used for testing purposes.

I won't go into how Parallels Desktop works or what the performance is like on the M1 processor, but for running the odd Windows application it works perfectly fine. Since I have a Microsoft 365 subscription, I am able to activate Windows 11 for "free" since it is included in my subscription. Parallels makes it extremely trivial to download and install Windows 11, and you can have it up and running in a few minutes after it is downloaded:

![Windows 11 default desktop.](/images/blog/00055/windows-11-business.png)

Overall, the performance is quite usable and I don't have any complaints. The Task Manager correctly identifies the architecture as Apple Silicon, as well as identifies the CPU details:

![Windows 11 Task Manager - Performance Tab.](/images/blog/00055/windows-11-task-manager.png)

At the end of the day, I only ever use Windows 11 on my MacBook Air to run the odd application, and it is not something that I do very often. It is nice that it is available should I require it, so I usually turn it on every few weeks to ensure that it is up to date.

## Thoughts After 2 Years with Apple Silicon

Since I have been using the MacBook Air (M1, 2020) for just over 2 years, I definitely have some things that I like and dislike about it (in no particular order).

### Likes

* The laptop ditches all of the legacy ports and just uses USB-C, and supports almost any dock solution.
* The laptop holds up to the promise of instant on and instant sleep.
* The battery does not drain when not in use unlike some other laptops.
* The laptop has no fans, and it rarely heats up under heavy usage.
* The battery life is fantastic, even after 2 years of usage.
* All of the apps that I use on a daily basis have been ported to Apple Silicon, no emulation is being used.
* All of my USB-C devices work without any issues. Existing devices such as portable DVD/Blu-ray drives, and USB peripherals also work perfectly.
* With only 8 GB of RAM, the laptop is still extremely responsive. I routinely keep several dozen tabs open in Microsoft Edge, stream media, use Visual Studio Code, Remote Desktop and never have any slowdowns.

I had never owned an Apple device other than an iPhone or iPad, and I never realized how convenient the integration is with things like iMessage and the ability to quickly transfer my AirPods between my laptop and my phone. Normally this is a pain to do on other platforms, but it works very well and very seamlessly.

### Dislikes

* The look of the MacBook Air is somewhat dated, but it is still a professional looking device.
* Having only two USB-C ports is definitely a downside. Using a USB-C dock removes the issue altogether, and I travel with a USB-C dock in my laptop bag (Anker PowerExpand 8-in-1 USB-C) which works perfectly with the laptop.
* It would have been nice to put a third USB-C port on the right side of the device, especially since I sometimes use the laptop in locations where it would be convenient.

I had a bit of a learning curve with macOS as I never used a Mac as my daily driver, and I was used to certain Windows-like shortcuts and features. After a week of using it I got the hang of it and I no longer have any major issues.

## Recent Advancements with Apple Silicon

Since the M1 processor was released in November, 2020, there have been several new versions and iterations of the processor family:

* M1 (November 10, 2020 - Present)
  * M1 Pro (October 18, 2021 - January 17, 2023)
  * M1 Max (October 18, 2021 - Present)
    * M1 Ultra (March 8, 2022 - Present)
* M2 (June 6, 2022 - Present)
  * M2 Pro (January 17, 2023 - Present)
  * M2 Max (January 17, 2023 - Present)

These processors have been used in the iPad Pro tablets, the MacBook Pro, the Mac Mini, the Mac Studio and the iMac. The only remaining computer that has been left out is the Mac Pro, and nothing has yet been announced or released at this time.

As of this writing, the M3 processor is on track to be released at some point in late 2023, and it too will continue to iterate on the performance and capabilities of the M1 and the M2 processor.

## Final Thoughts

The Apple Silicon platform is exactly what I was looking for in an ARM device. It does everything that I want, and everything works exactly as it is supposed to. I am going to continue following what changes with the Apple Silicon platform and what new devices are released using those chips.

I will continue to use my MacBook Air until I encounter a hardware issue with it or encounter some other problem that prevents me from using it. I have no plans to upgrade to a newer MacBook at this time, even though I like that the most recent MacBook Air brought back the MagSafe port which is a welcome improvement.

## Additional Information ##

I have made copies of the technical specifications of the laptops mentioned in this post, should they be modified or become unavailable in the future.

* [MacBook Air (M1, 2020) - Technical Specifications](/docs/blog/00055/macbook-air-m1-2020-technical-specifications.pdf)
* [MacBook Pro (M1, 2020) - Technical Specifications](/docs/blog/00055/macbook-pro-m1-2020-technical-specifications.pdf)

## Links ##

* [Apple ARM Transition](/blog/2020/06/28/apple-arm-transition/)
* [Apple M1](https://en.wikipedia.org/wiki/Apple_M1)
* [Asahi Linux](https://asahilinux.org/)
* [Lenovo Miix 630](/blog/2018/10/04/lenovo-miix-630/)
* [MacBook Air (M1, 2020) - Technical Specifications](https://support.apple.com/kb/SP825?locale=en_CA)
* [MacBook Pro (M1, 2020) - Technical Specifications](https://support.apple.com/kb/SP824?locale=en_CA)
* [Windows on ARM](/blog/2018/08/05/windows-on-arm/)
