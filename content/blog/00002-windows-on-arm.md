---
title: "Windows on ARM"
slug: "windows-on-arm"
date: "2018-08-05T14:31:00"
author: "Matthew Burr"
summary: "Not a lot of people realize that Windows can be used on more than just x86 and x64-based hardware. Windows NT was designed from day one to be portable on multiple hardware platforms and was supported at one time on the MIPS, Alpha, PowerPC, and Itanium platforms."
tags: [
    "ARM",
    "Microsoft",
    "Surface",
    "Windows",
    "WoA",
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00002/surface-rt.jpg"
draft: false
---

I have been thinking about this topic for a long time and I was trying to think of what I really wanted to say. One of things that really bothers me with technology (and I guess other parts of life as well), is that people are not always well informed on what is going on. I have been working in IT for almost a decade and the amount of false information and misconceptions that I hear on an almost nearly basis is absolutely maddening. I have heard so much incorrect information on Windows, Linux, Networking, the Cloud and Security and I have probably spent more time correcting people instead of fixing things or implementing new solutions for them.

I am not a Microsoft apologist (as I have been accused of in the past by some people), but I feel as though the misconceptions and unfair criticism of Windows 10 and Windows 10 S is unjustified and I want to try and give a fair rundown on where Windows as a platform is going and why it is a good thing that Microsoft is going in that direction. Windows on ARM is an interesting development and I am very interested in it.

{{< toc >}}

## Windows NT and Non-x86 Platforms ##

Not a lot of people realize that Windows can be used on more than just x86 and x64-based hardware. Windows NT was designed from day one to be portable on multiple hardware platforms and was supported at one time on the MIPS, Alpha, PowerPC, and Itanium platforms. I am not 100% certain if Windows on ARM (WoA) is the latest hardware platform that Windows has been ported to (I admit that Windows IoT as a platform is not something I follow too closely), but it seems to be the most talked about over the last year with Microsoft's announcement about their partnership with Qualcomm ([https://www.zdnet.com/article/microsoft-to-pc-makers-lets-make-some-windows-10-arm-based-pcs/](https://www.zdnet.com/article/microsoft-to-pc-makers-lets-make-some-windows-10-arm-based-pcs/)) and the actual release of devices with this architecture.

There has been a mixed reception on these initial devices that have been released so far, but only time will tell if the platform is successful or not.

It has been a few years since I have used a non-x86 device running Windows, and that is excluding the many Windows Phone 8/8.1 devices (ARM) that I used between 2012 to 2016 and my Xbox 360 console (PowerPC) that I owned around the same time. I had the opportunity to manage a few Itanium servers running Windows around 2010 which had some unique challenges that I was not really used to at the time.

The first device that I ever used running Windows in a normal sense (Windows desktop/shell) on a non-x86 platform was the first-generation Surface running Windows RT.

## Windows on ARM (Round One - First-Generation Surface) ##

When the Surface line was first announced I was very excited, I bought the original Surface the day it became available for pre-order back in early October 2012. At the time it was certainly an interesting device, and the specifications are modest in comparison to devices that are available today:

| Component                  | Hardware                                                      |
|:---------------------------|:--------------------------------------------------------------|
| Operating System           | Windows RT (Based on Windows 8)                               |
| Processor                  | Nvidia Tegra 3 @ 1.30GHz                                      |
| Memory                     | 2 GB                                                          |
| Dimensions                 | 10.81 width X 6.77 height X 0.37 depth inches                 |
| Weight                     | 1.5 lbs                                                       |
| Integrated Storage         | 32 GB or 64 GB                                                |
| Screen Resolution and Size | 1366 x 768 pixels/10.6 inches (16:9) with 5-point multi-touch |
| Interfaces                 | <ul><li>1 x USB 2.0 Port</li><li>1 x Micro SDXC Card Reader</li><li>1 x 3.5 mm Headphone Jack</li><li>1 x Micro HDMI</li><li>1 x Surface Cover Port</li></ul> |
| Connectivity               | WiFi (802.11a/b/g/n) Bluetooth 4.0                            |
| Battery                    | 31.5 Wh (up to 8 hours)                                       |
| Camera and Audio           | <ul><li>Front and Rear 720p HD Camera</li><li>Stereo Speakers and Microphone</li></ul> |
| Other                      | <ul><li>Ambient Light Sensor</li><li>Accelerometer</li><li>Gyroscope</li><li>Magnetometer</li></ul> |

The most interesting detail that was announced with it was Windows RT. It essentially was just Windows 8 but compiled on the ARM architecture. Only programs that shipped with Windows RT would work (File Explorer, Internet Explorer, Notepad, Office, etc.) and only applications available through the Windows Store (now Microsoft Store) would work on the device. Microsoft pitched this as a benefit since a device like this would not be susceptible to problems such as malware or viruses that other platforms had. This did not deter me from buying the device at the time, I was willing to try it with those limitations.

Things were a lot different back then when Microsoft released the first Surface device. Windows RT was a bit of a mess, which I found odd because I never had a problem with Windows 8. The Windows Store at the time was essentially a barren wasteland and was missing basic applications that you would expect to be available for any platform. Universal apps were not around yet, which meant that apps that I could run on a Windows Phone would not run on Windows RT, even though they were the same architecture. I can't say anything bad about the Surface hardware itself, it worked very well and was pleasant to use. It was also nice to get Office for free on the device as well since I did not have an Office 365 subscription at the time.

![My original Surface RT with Touch Keyboard (taken with my iPhone 4S)](/images/blog/00002/surface-rt.jpg)

I really enjoyed using the Surface RT when I had it. It functioned well as both a laptop and as a tablet and I always preferred it over using an iPad. I never had a problem with using Internet Explorer as the only browser, since Chrome was not available on the platform and Edge did not yet exist (yes, I like Edge, it is a great browser in my opinion).

As time went on there were some fun little workarounds to the limitations that people discovered. I remember a few months after launch the ability to side load certain apps such as PuTTY with a minor workaround. I also played around with published Remote Desktop applications at the time which allowed me to load applications such as Visio on a device that was never really meant to support it. It wasn't a bad device, but it wasn't quite ready for the masses, and it was most definitely a first-generation device. Since it was the first Surface device, the kickstand only had one position unlike the newer Surface tablets that can go to any position.

After a few months I ended up selling it and buying an ASUS Ultrabook instead since I ran into several issues with some applications that I absolutely needed on a portable Windows device. Obviously, the Surface brand went on to be quite successful for Microsoft and my personal daily driver is a Surface Laptop, which I think is a fantastic device.

Years later I ended up getting another Surface RT tablet from eBay just so that I could have one for nostalgia purposes.

## Chromebooks, ChromeOS and the iPad Pro ##

Between the time I had my first Surface device and today my work life has changed quite a bit. I decided to move on from full time roles and moved into contract and consulting work. Since I was never sure where I would be working every day and I was using transit, I wanted a device that was small and lightweight but also had all day battery life. For connectivity, LTE would be nice to have, but not necessarily a deal breaker since I always had my cell phone with me.

I was always interested in Chromebooks for several reasons. I liked the fact that it was Linux based and had many of the security features that I am used to in a Linux environment. I also liked the fact that it was simple, just being a browser, which I basically do most of my work in (through Office 365). The latest Chromebooks and ChromeOS versions offer more and more features, such as the Google Play Store apps being available.

I picked the ASUS Chromebook Flip C302CA because it was very positively reviewed and met a lot of my requirements, and I wanted to see if I could use it for work. I tried using it for several tasks that I would normally use my Windows 10 laptops for, and to really try it out I took it on vacation for 2 weeks rather than my Surface Laptop. I found it worked exceptionally well for most of the tasks that I needed it for. It supported the Google Play store which allowed me to load many of the essential apps that I needed, it had USB-C which easily allowed me to connect peripherals such as Ethernet and HDMI cables and I was able to easily backup my iPhone photos. The battery life was exceptional, plus I could connect MicroSD cards. I was disappointed in Chromecast versus Miracast that my Microsoft Wireless Adapter provided since it did not require WiFi to operate. Where I was staying didn't have WiFi, but I don't think most people would have this issue.

The issues I ran into were mostly with the few applications that I needed to run. RDP applications are not that good on Android, and none of the applications that I used were not able to display at the proper resolution despite my best efforts. I wanted to try installing one of the Linux distributions on it, but I decided against it. I don't like the idea of turning off Secure Boot, which to me that defeated the point of having a Chromebook in the first place. I also just wanted a device that just worked, and that required too much effort and introduced potential issues that I usually did not have time to resolve. I expect my devices to just work and time that I am spending fixing my own devices is time that I am not spending on training or billing my clients.

After trying out a Chromebook I wanted to also try out the iPad Pro. I will say first off that it is an amazing tablet. I am fairly invested in the iOS platform, so I found it very convenient to be able to sign in with my Apple ID and just have everything available. There was only one issue with the iPad Pro that I found, and it was a deal breaker for me; it is not a laptop. The most frustrating thing for me was the lack of mouse support, which made some tasks completely impossible for me. The Apple Pen was actually very nice to use, but not necessary for me. The built-in LTE was a great feature, but it was not enough to keep me on the platform.

As a side note, why did I not just get the Surface Pro with LTE? The cost is pretty much the main reason (over $2300 CAD with a keyboard), so I never even really considered it because of that.

## Windows on ARM (Round Two - Qualcomm) ##

When the announcement for WoA came out I was a bit skeptical that it would ever produce any actual results. Microsoft announces new products and partnerships all the time, but it does not always mean that a product will make it to market. I knew that it depended on a lot of different parties coming together; Microsoft, Qualcomm, and OEM partners to produce a WoA device. This is part of Microsoft's Always Connected PC initiative, and the first devices that were released were running the Qualcomm Snapdragon 835 SoC. The other question that I and a lot of other people had was about everything would work and would it be a repeat of Windows RT?

Windows on ARM will be different because of x86 (not x64 at this time) emulation. ARM64 applications will run natively and UWP apps from the Microsoft Store will run without any issues. On the surface, the version of Windows 10 that runs on the ARM architecture is no different from the regular x86 version of Windows 10.

By using the Qualcomm SoC hardware there are many advantages over regular x86 devices:

* Instant on capability
* Cool and fan-less design
* Multi-day battery life
* Integrated LTE modem for Always Connected PC
* Low powered standby with the big.LITTLE architecture (allows for background notifications while using minimal power)

There are a few Windows on ARM limitations that you should be aware of:

* ARM64 Drivers are required for devices
* x64 Applications are not supported (maybe in the future)
* Some games with OpenGL may not work
* Shell Extensions won't work
* Windows Phone apps may not work correctly
* No Windows Subsystem for Linux support
* Hyper-V is not supported

These are not necessarily issues for some people. Depending on your workload and how you use these devices, these are probably not issues for most people. For one I couldn't imagine using Hyper-V (or any virtualization) on a device with these specifications. Since Windows 10 on ARM will be using emulation for non ARM64 applications and non UWP apps, there will be a slowdown depending on the application that is running. To expect a large application such as Photoshop to run at the same speed as x86 is unreasonable, but a smaller and simpler application such as Notepad++ should run at the same speed as an x86 device of similar specifications.

## Windows 10 S ##

I talked about the original Surface earlier for a reason, because a lot of things have changed in 6 years on the Windows platform and the Microsoft Store. Even though it seems as though Windows 10 S is the same as Windows RT, this is no longer the case, and the limitations can be easily removed if you want.

There are limitations with Windows 10 S, but it really depends on what you are doing with the device. If you are aware of the limitations, then you are probably going to be fine using a device running in S mode. One benefit is that you can switch to Windows 10 Home/Pro (depending on the device), usually for free. I however typically like to remain in S mode for a few reasons:

* I want the security of S mode since only authorized applications will run
* Extended battery life (x86 apps are a bigger drain on system resources because of background services and emulation)
* Most of the work that I do in Windows is through a web browser, so separate applications are not needed for my workloads

I believe that the last point really applies to most people, and only a few exceptions. No, you cannot use Chrome, but I will defend Edge on its capabilities. It is a perfectly capable browser that supports modern web standards and support plugins for things like Ad Blocking, so I think people should give it a proper chance.

Some annoying restrictions that are a bit of a pain on S mode are lack on Command Line support, but Microsoft is supposed to be working to resolve this in future updates to the platform.

## The Future of Windows on ARM ##

All I can say is that I hope the platform continues to evolve. The Snapdragon 1000 was announced, and Qualcomm released their roadmap up until 2023. Since Qualcomm basically never releases a roadmap, this was certainly a surprise to me. Intel has been struggling for the last few years with their product line, and since ARM does not have the same legacy baggage that x86 does, it may be possible for ARM to overtake Intel in the future.

Microsoft also is planning on retiring the Windows 10 S branding, since it is confusing to people. They are going to enhance the S mode functionality and make it easier to go back and forth between this mode without the need to reinstall the operating system.

## My Experience with Windows on ARM ##

There are only a few options right now on what devices you can use with the Windows on ARM platform. The HP Envy was pretty much the first to market and it had a lot of negative comments for performance, mostly concerning the choice of SSD in the device.

I ended up trying out the Lenovo Miix 630 which I was testing for a contract that I am working on, and I will be posting a comprehensive review shortly since I have been using it for over a month.

## Links ##

* [Lenovo Miix 630](/blog/2018/10/04/lenovo-miix-630/)
