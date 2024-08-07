---
title: "CrowdStrike Incident"
slug: "crowdstrike-incident"
date: "2024-07-23T18:39:00"
author: "Matthew Burr"
summary: "I woke up on Friday July 19, 2024, and read that there was a massive IT outage in progress that was affecting airlines, financial institutions, and various other businesses worldwide. I was aware of CrowdStrike prior to this outage, and it was not surprising to me at all that something like this finally happened at this scale. While I have never been a customer of CrowdStrike, I have used products in the past that worked in a similar manner, and they always made me nervous how they deployed updates. These updates have the potential to cripple all workstations and servers in an organization with only one minor issue, and that is exactly what happened."
tags: [
    "BSoD",
    "CrowdStrike",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00067/crowdstrike-logo.png"
draft: false
---

I woke up on Friday July 19, 2024, and read that there was a massive IT outage in progress that was affecting airlines, financial institutions, and various other businesses worldwide. I was aware of CrowdStrike prior to this outage, and it was not surprising to me at all that something like this finally happened at this scale. While I have never been a customer of CrowdStrike, I have used products in the past that worked in a similar manner, and they always made me nervous how they deployed updates. These updates have the potential to cripple all workstations and servers in an organization with only one minor issue, and that is exactly what happened.

The issue occurred because of a bad update that was deployed to the CrowdStrike Falcon Sensor product, which caused millions of Windows workstations and servers to crash resulting in a BSoD. The [issue](https://www.crowdstrike.com/blog/falcon-update-for-windows-hosts-technical-details/) with the CrowdStrike Falcon Sensor software prevented those devices from restarting and it required manual intervention to correct the issue (automated processes are also available). According to a [blog post](https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/) from Microsoft, approximately 8.5 million Windows devices were affected due to this issue from CrowdStrike. This is potentially the largest IT outage in history (so far), and it demonstrates how a single vendor can cripple critical infrastructure.

Full disclosure, I have never worked with CrowdStrike before, but I am familiar with their software. The solutions that they provide are not unique, and there are other vendors that provide similar software. Because it is 2024 all these solutions are somehow "AI integrated", at least from their marketing teams.

Since this is an on-going event, I will update this post as more information is revealed. The CrowdStrike CEO has been called to testify in Congress about the incident, so that will be interesting to see if it happens.

**July 24, 2024 Update:** CrowdStrike has released a [Preliminary Post Incident Review (PIR)](https://www.crowdstrike.com/wp-content/uploads/2024/07/CrowdStrike-PIR-Executive-Summary.pdf) regarding the issue.

**July 30, 2024 Update:** Microsoft has released an [update](https://www.microsoft.com/en-us/security/blog/2024/07/27/windows-security-best-practices-for-integrating-and-managing-security-tools/) regarding the incident, and how the corrupted file was able to cause the issue in the Windows kernel in the first place.

**August 6, 2024 Update:** CrowdStrike has released the [RCA Exec Summary](https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf) for the incident.

{{< toc >}}

## What Happened? ##

A lot of information has been written about this, so I will sum this up as quickly as possible:

* CrowdStrike Falcon Sensor is a vulnerability scanner that is available for the Linux, macOS and Windows operating systems. This issue was only present on Windows, although it has been revealed that a similar issue happened with Linux systems earlier in 2024.
* CrowdStrike pushes updates to the software as required, with definition updates and signatures to identify zero-day attacks.
* The CrowdStrike Falcon software installs itself as a Windows kernel driver, which gives it visibility and access to the entire operating system.
* The kernel driver loads the files that are provided from CrowdStrike, which happens without any interaction from the user.
* The driver was configured as a **boot driver**, which means that the operating system will not start if there is an issue. This is important, as this caused the issue with Windows not being able to boot properly.
* On July 19, 2024, CrowdStrike pushed an update that was corrupt and invalid, and that caused the operating system to crash.
* Since the faulty update was present on the Windows device and the software was configured as a boot driver, the operating system was not able to start.

I am a fan of Dave Plummer's YouTube channel ([Dave's Garage](https://www.youtube.com/@DavesGarage)), and he posted a video explaining the issue and why the CrowdStrike Falcon Sensor software caused Windows to crash and require recovery:

{{< youtube wAzEJxOo1ts >}}

Dave Plummer posted a follow-up video about this topic on July 24, 2024:

{{< youtube ZHrayP-Y71Q >}}

At the end of the day this was a massive failure on CrowdStrike's part:

* They pushed an update which was invalid. The CrowdStrike QA team should have found this issue.
* They pushed an update to all clients at the same time, and not staggered.
* The Falcon Sensor kernel driver did not have adequate error checking in place.

I am not here to defend Microsoft, but the amount of negative press that they have received about this issue is unwarranted. Everything in the Windows operating system worked as it was supposed to, but the software from CrowdStrike caused the issues.

### Remediation ###

Microsoft has posted instructions on how to fix the issue with CrowdStrike in two articles, [KB5042421](https://support.microsoft.com/en-us/topic/kb5042421-crowdstrike-issue-impacting-windows-endpoints-causing-an-0x50-or-0x7e-error-message-on-a-blue-screen-b1c700e0-7317-4e95-aeee-5d67dd35b92f) and [KB5042426](https://support.microsoft.com/en-us/topic/kb5042426-crowdstrike-issue-impacting-windows-servers-causing-an-0x50-or-0x7e-error-message-on-a-blue-screen-0d7741f7-aca1-4487-8a54-bd431cb49455), and CrowdStrike has also posted [instructions](https://www.crowdstrike.com/falcon-content-update-remediation-and-guidance-hub/) as well. Microsoft has also created a recovery tool that can automate the process with a bootable USB drive, and details about it can be found in the [KB5042429](https://support.microsoft.com/en-us/topic/kb5042429-new-recovery-tool-to-help-with-crowdstrike-issue-impacting-windows-devices-d3928eaa-160c-4b19-ae64-930e2fa68194) article.

Fixing the issue is straightforward, and at a high-level has the following steps:

1. Boot Windows into Safe Mode.
2. Navigate to the **C:\Windows\System32\drivers\CrowdStrike** folder.
3. Delete the file with the **C-00000291\*.sys**​​​​​​​ name.
4. Reboot the device.

Some people were also able to resolve the issue by rebooting the Windows device upwards of fifteen times.

There are a few things that can complicate this recovery, and that includes BitLocker Recovery (or any third-party encryption software), and whether the user can login in Safe Mode. A lot of organizations use tools to manage the local administrator account (such as LAPS), and a regular user would not have credentials to login. Even if they did have credentials, they may have a limited account that cannot delete files in the Windows directory.

## How to Avoid This in the Future? ##

There are a few ways to avoid this issue in the future, the most obvious method is to stagger the deployment of updates so that bad updates can be limited to a smaller subset of users. At the same time, the company that is deploying the software should ensure that the QA process finds these catastrophic issues in the testing phase and avoid the issue altogether.

The most obvious way to avoid an issue like this in the future is to avoid using the same security product on workstations and servers. More diversity is required to ensure that a single vendor is not able to crash all devices in the organization at the same time. The problem with this approach is that security companies are aggressive in the sales phase and want their software on everything.

Only time will tell on how this outage will affect the IT landscape.

## Links ##

* [CrowdStrike](https://www.crowdstrike.com/)
* [CrowdStrike - Preliminary Post Incident Review (PIR) - July 24, 2024](https://www.crowdstrike.com/wp-content/uploads/2024/07/CrowdStrike-PIR-Executive-Summary.pdf) ([Local Version](/docs/blog/00067/crowdstrike_pir_executive_summary.pdf))
* [CrowdStrike - Root Cause Analysis](https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf)  ([Local Version](/docs/blog/00067/crowdstrike_channel_file_291_incident_root_cause_analysis_08.06.2024.pdf))
* [CrowdStrike - Technical Details: Falcon Content Update for Windows Hosts](https://www.crowdstrike.com/blog/falcon-update-for-windows-hosts-technical-details/) ([Local Version](/docs/blog/00067/crowdstrike_technical_details_falcon_update_for_windows_hosts.pdf))
* [Dave's Garage - CrowdStrike IT Outage Explained by a Windows Developer](https://www.youtube.com/watch?v=wAzEJxOo1ts)
* [Dave's Garage - CrowdStrike Update: Latest News, Lessons Learned from a Retired Microsoft Engineer](https://www.youtube.com/watch?v=ZHrayP-Y71Q)
* [Dave's Garage - YouTube Channel](https://www.youtube.com/@DavesGarage)
* [KB5042421](https://support.microsoft.com/en-us/topic/kb5042421-crowdstrike-issue-impacting-windows-endpoints-causing-an-0x50-or-0x7e-error-message-on-a-blue-screen-b1c700e0-7317-4e95-aeee-5d67dd35b92f) ([KB5042421 Windows 10](/docs/blog/00067/kb5042421_windows_10.pdf)) ([KB5042421 Windows 11](/docs/blog/00067/kb5042421_windows_11.pdf))
* [KB5042426](https://support.microsoft.com/en-us/topic/kb5042426-crowdstrike-issue-impacting-windows-servers-causing-an-0x50-or-0x7e-error-message-on-a-blue-screen-0d7741f7-aca1-4487-8a54-bd431cb49455) ([KB5042426 Hyper-V Hosts](/docs/blog/00067/kb5042426_hyper-v_hosts.pdf)) ([KB5042426 Physical Hosts](/docs/blog/00067/kb5042426_physical_hosts.pdf))
* [KB5042429](https://support.microsoft.com/en-us/topic/kb5042429-new-recovery-tool-to-help-with-crowdstrike-issue-impacting-windows-devices-d3928eaa-160c-4b19-ae64-930e2fa68194) ([KB5042429 Windows PE](/docs/blog/00067/kb5042429_windows_pe.pdf)) ([KB5042429 Safe Mode](/docs/blog/00067/kb5042429_safe_mode.pdf))
* [Microsoft Blog - Helping our customers through the CrowdStrike outage](https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/) ([Local Version](/docs/blog/00067/microsoft_blog_helping_our_customers_through_the_crowdstrike_outage.pdf))
* [Microsoft Blog - Windows Security best practices for integrating and managing security tools](https://www.microsoft.com/en-us/security/blog/2024/07/27/windows-security-best-practices-for-integrating-and-managing-security-tools/) ([Local Version](/docs/blog/00067/windows_security_best_practices_for_integrating_and_managing_security_tools.pdf))
* [Remediation and Guidance Hub: Falcon Content Update for Windows Hosts](https://www.crowdstrike.com/falcon-content-update-remediation-and-guidance-hub/) ([Local Version](/docs/blog/00067/falcon_content_update_remediation_and_guidance_hub.pdf))
