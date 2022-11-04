---
title: "Gentoo Linux on the ThinkPad T470"
slug: "gentoo-linux-on-the-thinkpad-t470"
date: "2020-04-14T20:14:00-05:00"
author: "Matthew Burr"
summary: "Just a quick tutorial on getting Gentoo Linux running on a Lenovo ThinkPad T470 laptop."
tags: [
    "COVID-19",
    "Gentoo",
    "Guides",
    "Lenovo",
    "Linux"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00032/thinkpad-t470-kde.png"
featureImage: "/images/blog/00032/thinkpad-t470-kde.png"
draft: false
---

I have had a bit of downtime due to the entire COVID-19 pandemic, so I decided to try installing some new Operating Systems on a spare laptop that I had brought home for work. I should really be studying for a few Certification exams, but since the testing centres are all closed and I don't really want to do any exams with an online proctor, I had to try and fill the time. I wanted to see if any of the laptops that I had at home was compatible enough to be used as a Hackintosh (which the Lenovo ThinkPad T470 apparently is), but I wanted to setup a laptop with only Linux since it has been a while that I have used Linux as a Workstation and I will be needing one in the next few weeks for a work project.

I was an avid user of Gentoo Linux in the mid 2000's up to around 2011 and I realized that I haven't used Gentoo at all since. I have only ever used Linux in the Enterprise in the last 10 years, and I was using CentOS and RHEL since it was the most widely supported and the easiest to use for Linux Administrators. Obviously if I wanted to use Linux in 2020 there are lots of easier alternatives such as Ubuntu (which supports this laptop 100% out of the box), but where is the fun in that?

I was originally brought to Gentoo years ago due to lack of proper wireless support from the other Distributions at the time, and the general lack of support for laptops that Linux had in the early 2000's. I was able to customize it to function very well on the Compaq Presario V2305CA laptop that I had at the time and I was able to get everything working.

I know Gentoo has changed a lot since 2011, but I know a lot of it has stayed the same. The last time I used it was on a single boot PC with an Intel Core 2 Duo and 8 GB of RAM. I had never used UEFI and I didn't own an SSD because they were expensive. I am very curious to see how much I can remember and if I can get this working without too much trouble. I am not going to be dual booting on this particular laptop since I don’t need to, I am actually swapping out the existing hard drive for a new one just so I can preserve the existing Windows installation.

{{< toc >}}

## Lenovo ThinkPad T470

### Gentoo Installation

I am not going to get into the details on how to perform a valid Stage 3 installation on this laptop, but I will post the relevant details on what needs to be done during installation and after installation in order to get everything working (and what I wasn't able to get working).

### Lenovo ThinkPad T470 Specifications

At the end of the day this is a fairly basic 14" laptop and there isn't really a whole lot to say about it. The build quality feels slightly cheap compared to the more high-end Lenovo laptops such as the Lenovo ThinkPad T480s that I also use for work and the Lenovo ThinkPad P51 that is my daily driver. The port selection is actually very good, it has 3 USB ports, an SD Card slot and Thunderbolt 3 of all things, and even has a built-in Ethernet adapter. The screen is terrible, I can't think of anything positive to say about it. It is low resolution and not very bright, and I find it sometimes hard to read compared to better displays. There is also no backlit keyboard on this particular model, but it is available.

Here are the specifications for the particular model of Lenovo ThinkPad T470 that I am using:

| Component         | Hardware                                                      |
|:------------------|:--------------------------------------------------------------|
| CPU               | Intel Core i5-6300 @ 2.4 GHz                                  |
| Memory            | 8 GB DDR4 @ 2133 MHz (2 x 4 GB)                               |
| Hard Drive        | 500 GB Western Digital SSD (WDS500G2BOA-00SM50)               |
| Graphics          | Intel HD Graphics 520 (up to 512 MB shared memory)            |
| Screen            | 14" HD (1366 X 768) anti-glare screen @ 220 nits              |
| Audio             | Intel HD Audio (integrated speakers and microphone)           |
| Wired Ethernet    | Intel I219-LM 10/100/1000 Network Adapter                     |
| Wireless Ethernet | Intel 8260 802.11AC Wireless Card                             |
| Bluetooth         | Bluetooth 4.1 included with Intel 8260 802.11AC Wireless Card |
| Webcam            | 720p HD Front-facing camera                                   |
| Smart Card Reader | Alcor AU9540 Smartcard Reader                                 |
| SD Card Reader    | Realtek USB 3.0 SD Card Reader                                |
| Internal Battery  | Lenovo 01AV489 3 cell 24Wh capacity                           |
| External Battery  | Lenovo 01AV424 3 cell 24Wh capacity                           |
| Dimensions        | 13.25" x 9.15" x 0.79" / 336.6mm x 232.5mm x 19.95mm          |
| Ports             | <ul><li>3 x USB 3.1 Gen 1 (USB 3.0, one always on)</li><li>1 x Thunderbolt 3 port (USB Type-C)</li><li>1 x 3.5 mm Combo Audio Jack</li><li>1 x HDMI</li><li>1 x RJ45 Gigabit LAN</li><li>1 x CS13 Docking Adapter</li><li>1 x Media Card Reader (SD 3.0, UHS-I)</li><li>1 x Smart Card Reader</li</ul> |

### lscpu

```ini
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
Address sizes:       39 bits physical, 48 bits virtual
CPU(s):              4
On-line CPU(s) list: 0-3
Thread(s) per core:  2
Core(s) per socket:  2
Socket(s):           1
Vendor ID:           GenuineIntel
CPU family:          6
Model:               78
Model name:          Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz
Stepping:            3
CPU MHz:             2800.004
CPU max MHz:         3000.0000
CPU min MHz:         400.0000
BogoMIPS:            4999.90
Virtualization:      VT-x
L1d cache:           32K
L1i cache:           32K
L2 cache:            256K
L3 cache:            3072K
Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb invpcid_single pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp md_clear flush_l1d
```

### lspci

```ini
00:00.0 Host bridge: Intel Corporation Xeon E3-1200 v5/E3-1500 v5/6th Gen Core Processor Host Bridge/DRAM Registers (rev 08)
00:02.0 VGA compatible controller: Intel Corporation Skylake GT2 [HD Graphics 520] (rev 07)
00:14.0 USB controller: Intel Corporation Sunrise Point-LP USB 3.0 xHCI Controller (rev 21)
00:14.2 Signal processing controller: Intel Corporation Sunrise Point-LP Thermal subsystem (rev 21)
00:16.0 Communication controller: Intel Corporation Sunrise Point-LP CSME HECI #1 (rev 21)
00:16.3 Serial controller: Intel Corporation Sunrise Point-LP Active Management Technology - SOL (rev 21)
00:17.0 SATA controller: Intel Corporation Sunrise Point-LP SATA Controller [AHCI mode] (rev 21)
00:1c.0 PCI bridge: Intel Corporation Sunrise Point-LP PCI Express Root Port #1 (rev f1)
00:1c.6 PCI bridge: Intel Corporation Sunrise Point-LP PCI Express Root Port #7 (rev f1)
00:1d.0 PCI bridge: Intel Corporation Sunrise Point-LP PCI Express Root Port #9 (rev f1)
00:1f.0 ISA bridge: Intel Corporation Sunrise Point-LP LPC Controller (rev 21)
00:1f.2 Memory controller: Intel Corporation Sunrise Point-LP PMC (rev 21)
00:1f.3 Audio device: Intel Corporation Sunrise Point-LP HD Audio (rev 21)
00:1f.4 SMBus: Intel Corporation Sunrise Point-LP SMBus (rev 21)
00:1f.6 Ethernet controller: Intel Corporation Ethernet Connection I219-LM (rev 21)
04:00.0 Network controller: Intel Corporation Wireless 8260 (rev 3a)
```

### lsusb

```ini
Bus 0001 Device 0004: ID 13d3:5619 IMC Networks
Bus 0001 Device 0002: ID 058f:9540 Alcor Micro Corp. AU9540 Smartcard Reader
Bus 0001 Device 0003: ID 8087:0a2b Intel Corp.
Bus 0001 Device 0001: ID 1d6b:00002 Linux Foundation 2.0 root hub
Bus 0002 Device 0003: ID 0bda:0316 Realtek Semiconductor Corp.
Bus 0002 Device 0001: ID 1d6b:00003 Linux Foundation 3.0 root hub
```

### Hardware Status

With Gentoo installed and configured, here is the status of all of the hardware after installing all software and configuring the Kernel:

| Device                | Working? | Notes                                           |
|:----------------------|:---------|:------------------------------------------------|
| **Graphics**          | Yes      | i915 module                                     |
| **Audio**             | Yes      | snd_hda_intel module                            |
| **Wired Ethernet**    | Yes      | e1000e module                                   |
| **Wireless Ethernet** | Yes      | iwlwifi module                                  |
| **Bluetooth**         | Yes      | iwlwifi and bluetooth modules                   |
| **Webcam**            | Yes      | uvcvideo module                                 |
| **Smart Card Reader** | Untested | Requires USB support.                           |
| **SD Card Reader**    | Yes      | Requires USB and MMC support.                   |
| **Internal Battery**  | Yes      | Recognized as /sys/class/power_supply/BAT0      |
| **External Battery**  | Yes      | Recognized as /sys/class/power_supply/BAT1      |
| **Docking Adapter**   | Untested | Untested because I don't have a Dock available. |

## Configuration

I am using **gentoo-sources-5.4.28** as the Kernel for this guide. I will post the full Kernel configuration as well.

### Graphics

The Intel HD Graphics 520 support can be enabled in the Kernel, but you will require the **linux-firmware** package to be present. It can be installed easily:

```
emerge sys-kernel/linux-firmware
```

Once the firmware has been installed, it can be enabled by activating the **i915** module along with the other required modules:

```
        Generic Driver Options  --->
           Firmware loader  --->
             (i915/skl_dmc_ver1_27.bin) Build named firmware blobs into the kernel binary
             (/lib/firmware) Firmware blobs root directory
             &#91;*] Enable the firmware sysfs fallback mechanism
        Graphics support  --->
           <M> /dev/agpgart (AGP Support)  --->
               <M> Intel 440LX/BX/GX, I8xx and E7x05 chipset support
           <M> Direct Rendering Manager (XFree86 4.1.0 and higher DRI support)  --->
               [*] Enable legacy fbdev support for your modesetting driver
           <M> Intel 8xx/9xx/G3x/G4x/HD Graphics
               [*] Enable capturing GPU state following a hang
               [*]   Compress GPU error state
               [*]   Always enable userptr support
```

In order to use the Intel module when compiling X, it also requires a modification to the **make.conf** file:

```
VIDEO_CARDS="intel i965"
```

I was able to get output through the HDMI port to work correctly.

### Audio

The Intel HD Audio support can be enabled by activating the ALSA modules and the **snd_hda_intel** modules:

```
    Device Drivers  --->
    <M> Sound card support  --->
        <M> Advanced Linux Sound Architecture  --->
            [*] Enable OSS Emulation
            -*- Dynamic device file minor numbers
            (32) Max number of sound cards
            [*] Support old ALSA API
            -*- Sound Proc FS Support
            [*] PCI sound devices  --->
            HD-Audio  --->
                <M> Build Realtek HD-audio codec support
                <M> Build HDMI/DisplayPort HD-audio codec support
                -M- Enable generic HD-audio codec parser
                (0) Default time-out for HD-audio power-save mode
            (2048) Pre-allocated buffer size for HD-audio driver
```

Audio works correctly through the speakers and through the headphone jack. With HDMI output, I was not able to get the audio working correctly. I believe this is a configuration issue and not an issue with the Kernel. I will try and fix this later.

### Wired Ethernet

The Wired Ethernet card can be enabled by activating the **e1000e** module:

```
    Device Drivers  --->
    [*] Network device support  --->
        [*] Network core driver support
        [*] Ethernet driver support  --->
            [*] Intel devices
            <M>   Intel(R) PRO/1000 PCI-Express Gigabit Ethernet support
            [*] Support HW cross-timestamp on PCH devices
```

### Wireless Ethernet and Bluetooth

The Wireless Ethernet card also contains the Bluetooth card for the laptop and can be enabled at the same time. It can be enabled by activating the **iwlwifi** and **bluetooth** modules and by enabling Bluetooth support:

```
    Device Drivers  --->
    [*] Network device support  --->
        [*] Network core driver support
        [*] Wireless LAN  --->
            [*] Intel devices
            <M>   Intel Wireless WiFi Next Gen AGN - Wireless-N/Advanced-N/Ultimate-N (iwlwifi)
            <M> Intel Wireless WiFi DVM Firmware support
            <M> Intel Wireless WiFi MVM Firmware support
            [*] Enable broadcast filtering

[*] Networking support  --->
    <M> Bluetooth subsystem support  --->
        [*] Bluetooth Classic (BR/EDR) features
        <M>   RFCOMM protocol support
        <M>   BNEP protocol support
        [*] Multicast filter support
        [*] Protocol filter support
        <M>     HIDP protocol support
        [*]     Bluetooth High Speed (HS) features
        [*]   Bluetooth Low Energy (LE) features
        [*]   Enable LED triggers
        [*]   Bluetooth self testing support
        [*]     ECDH test cases
        [*]     SMP test cases
        [*]   Export Bluetooth internals in debugfs
        Bluetooth device drivers  --->
           <M> HCI USB driver stem support
           [*]   Broadcom protocol support
           [*]   MediaTek protocol support
           [*]   Realtek protocol support</code></pre>
```

I was able to test Bluetooth by pairing a Bluetooth mouse to the laptop. I also tested pairing to my iPhone and my AirPods, which supported Audio output.

I was having an issue with the Wifi disconnecting constantly, but it turns out I had misconfigured the WPA Supplicant package at the time of testing. It is working perfectly now that it is configured correctly.

### Webcam

The Webcam can be enabled by activating the **uvcvideo** module:

```
    Device Drivers  --->
    <M> Multimedia support  --->
        [*] Cameras/video grabbers support
        [*] Media USB Adapters  --->
            <M> USB Video Class (UVC)
                [*] UVC input events device support
        [*] Autoselect ancillary drivers (tuners, sensors, i2c, spi, frontends)
```

You can quickly test that the Webcam is working by using the **luvcview** package.

### Smart Card Reader

The Smart Card Reader is an embedded USB device and requires basic USB 3.0 support in order to function. It also requires an additional package to be installed in order to function:

```
emerge sys-apps/pcsc-lite
```

Unfortunately I do not have any Smart Cards to test with it, so I cannot verify that it works correctly. The device shows up as being available, so I left it at that.

### SD Card Reader

The SD Card Reader requires a few modules to be enabled in order to function, along with basic USB 3.0 support that should be already included in the Kernel configuration:

```
    Device Drivers  --->
    <M> MMC/SD/SDIO card support  --->
        <M> MMC block device driver
```

I tested this using a 2 GB SD Card, which showed up on the laptop as **/dev/sdb**.

### Batteries

This may seem like an odd entry to put in here, but since this laptop has two batteries present (one internal and one external) I wanted to make sure that they were both showing up:

```bash
thinkpad-t470 ~ # cat /sys/class/power_supply/BAT0/uevent
POWER_SUPPLY_NAME=BAT0
POWER_SUPPLY_STATUS=Unknown
POWER_SUPPLY_PRESENT=1
POWER_SUPPLY_TECHNOLOGY=Li-poly
POWER_SUPPLY_CYCLE_COUNT=3
POWER_SUPPLY_VOLTAGE_MIN_DESIGN=11400000
POWER_SUPPLY_VOLTAGE_NOW=12875000
POWER_SUPPLY_POWER_NOW=0
POWER_SUPPLY_ENERGY_FULL_DESIGN=23940000
POWER_SUPPLY_ENERGY_FULL=23930000
POWER_SUPPLY_ENERGY_NOW=23700000
POWER_SUPPLY_CAPACITY=99
POWER_SUPPLY_CAPACITY_LEVEL=Normal
POWER_SUPPLY_MODEL_NAME=01AV489
POWER_SUPPLY_MANUFACTURER=LGC
POWER_SUPPLY_SERIAL_NUMBER= 5753

thinkpad-t470 ~ # cat /sys/class/power_supply/BAT1/uevent
POWER_SUPPLY_NAME=BAT1
POWER_SUPPLY_STATUS=Full
POWER_SUPPLY_PRESENT=1
POWER_SUPPLY_TECHNOLOGY=Li-poly
POWER_SUPPLY_CYCLE_COUNT=1
POWER_SUPPLY_VOLTAGE_MIN_DESIGN=11400000
POWER_SUPPLY_VOLTAGE_NOW=12698000
POWER_SUPPLY_POWER_NOW=0
POWER_SUPPLY_ENERGY_FULL_DESIGN=24050000
POWER_SUPPLY_ENERGY_FULL=22440000
POWER_SUPPLY_ENERGY_NOW=22440000
POWER_SUPPLY_CAPACITY=100
POWER_SUPPLY_CAPACITY_LEVEL=Full
POWER_SUPPLY_MODEL_NAME=01AV424
POWER_SUPPLY_MANUFACTURER=Celxpert
POWER_SUPPLY_SERIAL_NUMBER= 4394
```

I am not sure how to setup the batteries to drain in parallel or having the external battery drain first, that is something that I will need to check later.

### Other Devices

Aside from the standard hardware, there are a few other hardware components that I should mention:

* The TrackPoint and the associated buttons work correctly without any additional configuration.
* The Function lock key on the keyboard works correctly.
* The special keys (Mute, Volume Down, Volume Up, Microphone On/Off, Brightness Down, Brightness Up, Wireless On/Off, Bluetooth On/Off) work correctly.
* The Thunderbolt port works correctly for charging the laptop, however I do not have any Thunderbolt devices to test it with. For USB-C devices, I was able to test an ASUS MB16AC Portable Monitor and it worked correctly (using the DisplayLink Kernel Module).
* The Docking Port on the laptop appears to function (the Audio Drivers recognize that one is present), but I cannot test it right now because I don't have a Dock available.
* The Smart Card port appears to work, however I don't have a card available to test it with.

## References

* [https://wiki.gentoo.org/wiki/Handbook:AMD64](https://wiki.gentoo.org/wiki/Handbook:AMD64)
* [https://wiki.gentoo.org/wiki/Quick_Installation_Checklist](https://wiki.gentoo.org/wiki/Quick_Installation_Checklist)
* [https://wiki.gentoo.org/wiki/Intel](https://wiki.gentoo.org/wiki/Intel)
