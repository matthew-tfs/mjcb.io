---
title: "Windows Server 2025 RTM"
slug: "windows-server-2025-rtm"
date: "2024-11-18T23:03:00"
author: "Matthew Burr"
summary: "Windows Server 2025 was released to manufacturing on November 1, 2024, after being in public preview for most of the year. This is a major release, and there are many changes to the core features of Windows Server. This is also the first version of Windows Server to be available on the ARM architecture, which will allow for some interesting deployment options for the operating system. Windows Server 2025 is a LTSC (Long-Term Servicing Channel) release and will be supported until October 10, 2034."
tags: [
    "ARM",
    "Microsoft",
    "VMware",
    "Windows Server"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00069/windows-logo.png"
toc: true
draft: false
---

Windows Server 2025 was released to manufacturing on November 1, 2024, after being in public preview for most of the year. This is a major release, and there are many changes to the core features of Windows Server. This is also the first version of Windows Server to be available on the ARM architecture, which will allow for some interesting deployment options for the operating system. Windows Server 2025 is a LTSC (Long-Term Servicing Channel) release and will be supported until October 10, 2034.

Windows Server 2025 is available in **Standard** and **Datacenter** versions for on-premise servers. It is also offered in Azure as the **Datacenter: Azure Edition** version. The **Essentials** version that was available in Windows Server 2019 is long gone.

## Currently Supported Windows Server Versions ##

There are currently four Windows Server versions that are being supported by Microsoft, all in various stages in their support lifecycle:

| Windows Server Version | Availability | Latest Build[^1] | Mainstream End Date | Extended End Date |
|:-----------------------|:-------------|:-----------------|:--------------------|:------------------|
| Windows Server 2025    | 2024-11-01   | 26100.2314[^2]   | 2029-10-09          | 2034-10-10        |
| Windows Server 2022    | 2021-08-18   | 20348.2849       | 2026-10-13          | 2031-10-14        |
| Windows Server 2019    | 2018-11-13   | 17763.6532       | Ended               | 2029-01-09        |
| Windows Server 2016    | 2016-08-02   | 14393.7515       | Ended               | 2027-01-12        |

[^1]: Latest Windows Server builds as of November 18, 2024.
[^2]: The RTM version of Windows Server 2025 is 26100.1742.

## New Features in Windows Server 2025 ##

I won't get into the specifics of what features are new in Windows Server 2025, that has been discussed at length on other sites. The [What's new in Windows Server 2025](https://learn.microsoft.com/en-us/windows-server/get-started/whats-new-windows-server-2025/) page that Microsoft has provided lists the new features in great detail.

## Issues with Windows Server 2025 ##

The main issue that was affecting organizations is the fact that Windows Server 2025 was being offered as an optional update for Windows Server 2019 and Windows Server 2022. This means that installing a certain update (KB5044284) would perform an in-place upgrade to Windows Server 2025. Obviously, this is an issue since this is being done without proper testing on a newly deployed operating system, and the upgrade does not include licensing.

## Windows Server 2025 on ARM ##

There is no official release of Windows Server 2025 on ARM at this time, but it has been in testing for some time and is available for download from [UUP Dump](https://uupdump.net/). I have not done extensive testing of this particular version of Windows Server 2025, but I can only assume that there are issues that are preventing it from being finalized.

I normally use Hyper-V to virtualize all of my virtual machines, but I decided to give [VMware Fusion](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion/) a test on my MacBook Air since VMware [released](https://blogs.vmware.com/teamfusion/2024/05/fusion-pro-now-available-free-for-personal-use.html) it for free for personal use earlier in 2024. I would never use this for anything important, but it is interesting to see Windows Server running natively on an Apple Silicon device:

![The default desktop for Windows Server 2025. Looks and feels like Windows 11.](/images/blog/00069/vmware-fusion-windows-server-2025-01.png)

The system properties even shows the correct processor type:

![The system information for Windows Server 2025 running on ARM using VMware Fusion Professional 13.6.1. The Windows build version is 26311.5000, which is a pre-release test version downloaded from UUP Dump.](/images/blog/00069/vmware-fusion-windows-server-2025-02.png)

## Windows 11 on ARM ##

On an unrelated note (but sort of related), on November 14, 2024, Microsoft finally [released](https://www.microsoft.com/en-us/software-download/windows11arm64) Windows 11 on ARM (version 24H2) in an ISO format on their website. They also [released](https://learn.microsoft.com/en-us/windows/arm/iso) information on how to use the ISO image, and what it is compatible with. This is a welcome release from Microsoft, as I was getting tired of relying on third-party solutions for acquiring an ARM-based ISO image of Windows 11. I would frequently use [UUP Dump](https://uupdump.net/) to download these ISO images, but I was never happy about using images from a third-party, even though the files were all downloaded from Microsoft.

I have been using [UTM](https://mac.getutm.app/) for daily virtualization tasks on my MacBook Air, and Windows 11 on ARM works perfectly:

![The default desktop for Windows 11 24H2 running on UTM 4.5.4.](/images/blog/00069/utm-windows-11-24h2-01.png)

## Links ##

* [Microsoft Learn - Features removed or no longer developed starting with Windows Server 2025](https://learn.microsoft.com/en-us/windows-server/get-started/removed-deprecated-features-windows-server-2025/) ([Local Version](/docs/blog/00069/features_removed_or_no_longer_developed_starting_with_windows_server_2025_microsoft_learn.pdf))
* [Microsoft Learn - What's new in Windows Server 2025](https://learn.microsoft.com/en-us/windows-server/get-started/whats-new-windows-server-2025/) ([Local Version](/docs/blog/00069/whats_new_in_windows_server_2025_microsoft_learn.pdf))
* [Microsoft Learn - Windows 11 Arm ISO files overview](https://learn.microsoft.com/en-us/windows/arm/iso/) ([Local Version](/docs/blog/00069/windows_11_arm_iso_files.pdf))
* [Microsoft Learn - Windows Server release information](https://learn.microsoft.com/en-us/windows/release-health/windows-server-release-info) ([Local Version](/docs/blog/00069/windows_server_release_information.pdf))
* [Microsoft Software Downloads - Download Windows 11 for Arm64](https://www.microsoft.com/en-us/software-download/windows11arm64/)
* [UTM](https://mac.getutm.app/)
* [UUP Dump](https://uupdump.net/)
* [VMware Fusion and Workstation](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion/)
* [VMware Fusion Pro: Now Available Free for Personal Use](https://blogs.vmware.com/teamfusion/2024/05/fusion-pro-now-available-free-for-personal-use.html) ([Local Version](/docs/blog/00069/vmware_fusion_pro_now_available_free_for_personal_use.pdf))
