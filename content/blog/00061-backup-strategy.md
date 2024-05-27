---
title: "Backup Strategy"
slug: "backup-strategy"
date: "2024-04-09T20:22:00"
author: "Matthew Burr"
summary: "World Backup Day was a few days ago and I wanted to go into the details on my current backup strategy, and the reasons behind the way that I handle the backups of my important data. While it is not overly complex compared to other backup strategies that I have seen, it is important to have a formal process in place to ensure that data is being backed up and correctly protected. It is very easy to just assume that everything is being backed up and that is the end of it, but not properly scheduling, validating, or tracking your backups is what usually causes data loss."
tags: [
    "Backups",
    "Guides",
    "macOS",
    "Windows",
    "VeraCrypt"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00061/backups.png"
draft: false
---

World Backup Day was a few days ago and I wanted to go into the details on my current backup strategy, and the reasons behind the way that I handle the backups of my important data. While it is not overly complex compared to other backup strategies that I have seen, it is important to have a formal process in place to ensure that data is being backed up and correctly protected. It is very easy to just assume that everything is being backed up and that is the end of it, but not properly scheduling, validating, or tracking your backups is what usually causes data loss.

Last fall I spent a lot of time going through my backup process to ensure that everything important was being backed up correctly, which is a task that I haven't done for some time. Putting a more formal process and procedure in place was overdue, and I think the results work well for my needs. I documented the process when I did everything, but I wanted to go into why I made certain decisions. The main goal of redoing my backup strategy was to ensure that it was simple to do, but also was robust enough to avoid data loss under multiple scenarios.

It has been sometime since I have personally dealt with data loss that has seriously impacted me, but I do know some people who have lost a significant amount of data over the last few years. The reasons for losing their data have varied, some of them had hardware failures on their only computer, and some have had their computers stolen while they were travelling. I have also dealt with a lot of people who lost their phones with all their photos, and it was because they never manually backed up any of those photos. In most cases they never had a backup service in place to protect those photos from being lost, even though it has never been easier to set something like that up.

There are more options than I can count that you can use to backup your files automatically, but if you don't use those tools properly then the solution is ultimately worthless. I could give real world examples when enterprise grade backup solutions failed a company, but all you need to know is that data loss from misconfigured backups happens more than you might think, and it is extremely disruptive to a company to lose data from production systems. What usually always happens is that backups are setup by a single person, it is not well understood or documented, that person leaves the company, and the people left behind just assume that the backups are being taken care of. It is only when an attempt is made to restore data that it is discovered that there is an issue with their backups, and they have to attempt to recover whatever they can.

I have always kept backups of my important data, but it was never really a formal procedure until recently. I wasn't performing complete backups often enough to protect all my data, which left gaps in the process and that was causing me some anxiety once I realized that. Recently, I discovered several old backups of my data that I made between in 2001 and 2004 that I had stored at a family members house without realizing it. This was an interesting surprise, and I found out that I have files on my current laptop that I have been shuffling around for over 20 years. I didn't decide to formalize my backup strategy because of data loss or some issue, it was just a task that I had been putting off and I finally got around to doing it.

{{< toc >}}

## World Backup Day ##

March 31st is **World Backup Day**, which is an official/non-official day to ensure that you have backed up your data. It is meant to create awareness for people who don't create backups or who haven't created a backup in a long period of time. To learn more about this initiative you should take time to visit the [World Backup Day](https://www.worldbackupday.com/) website. There is a list of suggested backup solutions listed on the [site](https://www.worldbackupday.com/en/best-backup-software) that would be appropriate for most people, and it is certainly worth looking at if you are looking for an automatic backup solution and you are not sure where to start.

## Home Network and Daily Drivers ##

I have considerably simplified my home network over the last few years, and in the process, I have reduced the number of computers that I use daily. I used to have a full homelab for testing software and working on various projects, but I moved to a new place a few years ago and didn't really have room for it anymore so I slowly got rid of it. I also got tired of constantly maintaining virtual machines and hardware that I only occasionally used. I figured that I did that for a living, and I didn't want to continue spending my personal time doing that, and there were better solutions available for most of the functionality that I was looking for.

A few years ago I also migrated almost entirely to macOS, and at the time of this writing I am using a MacBook Air (M1, 2020) as my [primary computer](/blog/2023/05/22/apple-silicon-two-years-later-part-2/). I have a Dell Inspiron 14 2-in-1 (7435) that I use for certain Windows related tasks that I don't like to virtualize. I have a Synology DS420+ NAS with 18 TB of capacity that I use for storing files locally in my home. There are several volumes on this NAS, one of which is an encrypted volume that I only use for backing up critical data. This volume is only ever mounted if I am backing up data, or if I am copying that data to an external device (I will discuss this later in this post).

For my critical virtual machines that I rely on, those can all be found in Azure. I also have an HP EliteDesk 600 G3 Mini that I use for certain projects that use Hyper-V. I use this computer only for testing, and there is nothing critical on it and if the computer stopped working it would not cause any actual problems.

## 3-2-1 Backup Rule ##

I have written about this rule before, but in a nutshell the 3-2-1 backup rule means having your data backed up and available in the following manner:

* Create one primary backup and two copies of your data.
* Save your backups to two different types of media.
* Keep at least one backup offsite.

Not that this is a particularly useful diagram explaining the workflow, but on a high-level it looks something like this:

![The 3-2-1 backup rule in a simplified workflow.](/images/blog/00061/321-backup-rule.png)

There are a few ways to interpret this backup strategy, but it isn't very difficult to understand:

1. Always have three copies of your important data, at least one primary and two backups. This may seem redundant if those backups are onsite, but having multiple copies can help prevent corruption issues on different backup types and gives you the ability to compare backup data should the question of data corruption ever arise. It also allows you to rapidly recover data if you already have access to it while it is onsite.
2. Always use two different types of media to store your backups. Every media type deteriorates over time, so it is important to use different media types if possible. Just to put it in perspective, storing your data on a traditional spinning HDD and an SSD could be interpreted as different storage media, since they both behave differently and are completely different architectures.
3. Always keep a backup offsite and offline. This protects the data from being destroyed if you have a fire, flood, or other damage to your residence/office. Keeping it offline prevents the data from changing, which can help with the first step of allowing the backup data to be compared if needed. Despite what some people say about the matter, having your data stored online with Google Drive, iCloud or OneDrive technically counts as being offsite, but it doesn't really count as a backup.

I took these rules and created a backup strategy that works the best for me. I have heard various arguments that the 3-2-1 backup rule is outdated and that it is not entirely necessary anymore, but it is just a guideline. It is up to the user to determine what works best for them and how to adapt it for their environment.

### Why Isn't Google Drive, iCloud, or OneDrive a Proper Backup Solution? ###

Despite how they are advertised, Google Drive, iCloud and OneDrive are syncing solutions, and they are not proper backup solutions. Assuming that they behave as a traditional backup can lead to unexpected issues down the road if you are not aware of the limitations with those services. A syncing solution allows you to access your files across multiple devices for the sake of convenience, and those changes are supposed to be synchronized in a short period of time when a file is changed or created. A convenient feature that most of these services support is the ability to have photos taken on your phone to be automatically uploaded so that you can view them on your computer using a browser or an application (such as Photos in macOS).

There are a few things to be aware of with these syncing solutions:

* **Account Compromise** - If your Apple ID or Microsoft account is compromised, you will potentially lose access to your data permanently with limited options to recover those accounts.
* **Limited Space** - Google Drive, iCloud and OneDrive have limitations on how much can be stored using that service, and if you run out of space you must delete data to make room, or risk not having newer files synchronized. You have the option in some cases to purchase additional space, but that can become expensive depending on which service is being used.
* **Network Issues** - If there is an issue with connecting a device to the internet, then the file synchronization will not occur at all. If you are working with an unstable internet connection, then getting access to your files can be extremely difficult or cumbersome.
* **Retention Time Frames** - Online services do not have long retention policies for restoring old versions of files that were modified or deleted, and the policies are not well defined or can change at any time. Some services offer longer retention periods and change controls (such as Office 365) with documents instead of regular files.
* **Security Considerations** - While OneDrive does have features such as ransomware detection and the ability to roll back to a certain degree, it is not a perfect solution for certain scenarios.
* **Synchronization Issues** - If there is an issue with a file being synced because there is an issue with the synchronization service, or the file is locked, it can cause problems with sending the file. Programs that use databases as backends are vulnerable to file locking issues (by design) and may not synchronize until the application closes the file.

These synchronization solutions are better than nothing, but you should never depend on these solutions as your only copy of your data. It is important to ensure that you always have separate backups in the event of issues with these services. These solutions can be used as one copy of your data, but they should never be your only copy of your data.

## Backup Strategy ##

I wanted to have several backups at any given time, some stored at home, and I wanted more than one offsite backup for several reasons. Before I started, I needed to figure out exactly what I was working with, as there are a few things to consider when determining what to backup and what to use for that backup.

### Backup Requirements ###

The first step was to look at what my main file locations and determine what I wanted to backup due to the importance of the data:

* I have my **primary working files** on iCloud, and those files are updated daily as I work on them. These are synced automatically from my MacBook Air and iPhone in (near) real time.
* I also have my **secondary working files** on OneDrive, and those are updated on a somewhat daily basis. These are synced automatically from my Dell Inspiron in (near) real time. Sometimes these files can go a week or more without any changes occurring.
* I have **media files and software** stored locally on my Synology DS420+ NAS. This NAS has multiple volumes on it for various purposes and some volumes are more important than others.
* I have my **main project files** on GitHub, and those are updated as changes are made to any of those repositories. Anything that I am working on typically gets committed every day, regardless of the size of the changes that I have made.
* I have my **primary email** stored in Office 365.

I try to store all files on my laptops in the iCloud and OneDrive folders, that way I know they are being synced to those services. I assume that if a file is located outside of that folder that it is not important, and I can potentially lose the file at any time. I have various online services that I have data stored in, and I do occasionally export that data for backup purposes. Some data is less important than others, and if I lost that data, it would not be the end of the world. I categorized my important data into two main groups, and it is just **Documents** and **NAS Media**:

* A full backup of my **Documents** is around 150 GB in size. This data is critical and contains all important documents.
* A full backup of my **NAS Media** is around 5 TB in size. This data is non-critical, but I want it backed up regardless.

Since my primary computer is a MacBook Air, I would like to utilize Time Machine for daily backups of that computer as well. Time Machine is extremely trivial to setup and maintain, and this backup will always be maintained onsite. I don't want to just have one copy of my data on the backup drives, so I will keep adding data to the backup as long as there is space available and eventually remove the oldest copy when disk space becomes an issue.

Aside from the Time Machine backups, the remaining backups will all be offline and only connected if they are required, or if a backup is being made. Since I want backups to be stored offsite, that means that all backups will be in pairs, with one device onsite and the other offsite, and those will be cycled whenever a backup is made. When the old offsite backup is returned, it will be backed up with the same data that was just sent offsite. This means that all backup drives will always have the same backup data on them.

To simplify the process, I don't want to use any dedicated backup software for creating and managing my backups. I don't want to have to deal with custom software or licensing, I just want the backups to be on a storage device that can be easily written to and read by another device. This reduces complexity but does make the process of creating the backups a manual process (not that it is difficult to do). By making the process of creating a backup simple, it reduces the burden of having to perform the backup and prevents "putting off" the backup. It also allows a restoration of the data to be done without the need for custom software (minus the encryption software). Time Machine is the only exception since it is natively supported within macOS and there is no additional licensing required to use it. For full disk encryption, [VeraCrypt](https://veracrypt.fr/) is open-source and free, and BitLocker is supported natively within the Windows operating system (both on the server and client versions).

The other reason that I don't want to use any backup software is that I don't want to deal with incremental/partial backups. I only want full backups of my data. This is not an efficient use of disk space, but I would rather waste disk space on full backups then save space on incomplete backups that end up not being usable because of missing data.

For offsite backups, I want there to be two locations for those backups, one geographically close to where I live and the other geographically far from where I live. This may seem excessive for everything, but I want there to be a copy of my critical data to be in at least two locations for redundancy. On my Synology NAS is a 2 TB volume that is dedicated for storing backups. It is an encrypted volume that is only ever mounted when a backup is being compiled, and when it is being copied to an external backup drive. This will be talked about later in this post on why I am using this setup. I did consider setting up a NAS at a remote location, but I want all my backups to be offline, so it doesn't make sense to set something like that up.

### Backup Encryption ###

All backups need to be encrypted with no exceptions. It makes no difference if the backup is stored locally or remotely, they should not be readable by anyone unless an encryption key is provided. I always assume that once a backup has been made it can simply disappear, whether it be lost, stolen, or sometimes damaged. I almost always used BitLocker for many years when I exclusively used Windows for all my devices, but since I have mostly moved to macOS I needed to find a cross-platform encryption solution that will work for me.

I decided to use [VeraCrypt](https://veracrypt.fr/) for all primary backups, since it is open-source and works on all platforms. To ensure that any backup disks are readable by either Windows or macOS I am using exFAT as the file system since it works on both platforms and supports large partitions. Even though I use VeraCrypt for my primary backups, I will still use BitLocker for one set of backups so that I am not just depending on one encryption technology.

### Backup Encryption Passwords ###

I won't go into too much on this, but I have a system for tracking encryption passwords for all backup drives. All devices that I use for backups have a unique encryption password and no password is ever reused. If you do not have a system for creating and storing the encryption passwords (or keys) for your backups, then you are potentially going to run into issues in the future when it comes time to use those backups.

### Backup Tracking ###

This may seem like a small detail, but tracking your backups is extremely important and it is easy to lose track of things if you don't have a system in place. I keep a digital version as well as a written version of my list of backups to ensure that I don't lose track of them. I also make sure that the following has been done with every backup drive that is in my inventory:

* All backup drives are labelled with a unique ID number, plus their serial number.
* I track when I first purchased the backup drive and when I first started using it.
* I track which encryption software was used to create the backup drive and what version is being used (if applicable).
* I track when the last time a backup occurred.
* I track the location of the backup drives, specifically which sets of them are onsite or offsite.

Most importantly, whenever I retire a backup drive, I keep a record of it and how I disposed of it. Over the years I have stopped using several drives due to their age, and if the capacity of the drives became too small for them to be practical for backup purposes.

### Backup Equipment ###

There are a few things that I need for my backup strategy to work correctly:

* I need at least one onsite backup of my critical data (**Documents**), and two offsite backups of my critical data (**Documents**).
* I need at least one onsite backup of my non-critical data (**NAS Media**), and one offsite backup of my non-critical data (**NAS Media**).
* I use a MacBook Air as my primary computer, so I will use Time Machine to backup my critical data (**Documents**).

This means at a minimum I will require at least **seven** backup drives for backing up my data:

* Four drives for critical data for offline backups. Two drives will use regular SATA HDD drives, and the other two drives will use SATA SSD drives.
* Two drives for non-critical data for offline backups. These will use regular SATA HDD drives.
* One drive for Time Machine for daily backups of critical data on my MacBook Air.

This means that I will always have three backup drives offsite at any given time, and four backup drives always onsite. I have already determined my storage requirements above, and I want to have older copies of backups on the backup drives. This means that if I find out I need a file from several months ago, I should be able to get that file from an older copy of my data. The amount of data that I have is 150 GB for one backup set, and 5 TB for the other backup set. For the size of the backup drives that are needed and how much data can be stored at once, it should be something like this:

* For my **Documents** backup, it is around 150 GB. I can fit that data at least ten times on a 2 TB drive.
* For my **NAS Media** backup, it is around 5 TB. I can fit that data twice on a 12 TB drive.

To make my backup solution work, I ended up purchasing the following hard drives for backups:

* **Two 3.5" 2 TB HDD** - For **Documents**, formatted using exFAT, encrypted using VeraCrypt.
* **Two 2.5" 2 TB SSD** - For **Documents**, formatted using exFAT, encrypted using BitLocker.
* **Two 3.5" 12 TB HDD** - For **NAS Media**, formatted using exFAT, encrypted using VeraCrypt.
* **One 2.5" 2 TB HDD** - For **Time Machine**, formatted using APFS, encrypted using APFS.

I considered choosing different manufacturers for each pair of backup drives, but since they are always offline, I am not overly concerned about them both failing simultaneously. I also ended up purchasing the following equipment to assist with backups:

* Three external ORICO USB-C SATA hard drive enclosures for the 2.5" drives.
* Three AmazonBasics cases for the external 2.5" drives. This is so I can also keep a USB cable with each drive.
* One external USB hard drive dock for 2.5" and 3.5" hard drives (ORICO 6619US3).

For one set of offsite backups, I purchased a **Turtle HD-3 Case** to ensure that those backup drives were being securely stored. Overall, I think that it works quite well:

![Turtle HD-3 Case (closed).](/images/blog/00061/turtle-hd-3-case-closed.jpg)

![Turtle HD-3 Case (opened).](/images/blog/00061/turtle-hd-3-case-opened.jpg)

For storing backup hard drives while onsite I purchased several 3.5" protective cases from ORICO to make it easier to store those drives:

![ORICO Hard Drive Protective Cases.](/images/blog/00061/orico-hard-drive-cases.jpg)

Since I am not using any dedicated backup software, the only process needed to prepare the backup drives is to format them with the exFAT file system, encrypt them, and then record the necessary details as stated in the [Backup Tracking](#backup-tracking) section.

## Backup Process ##

Despite everything that has been talked about up until this point, there is actually very little to do to perform a backup of my data. This is a good thing, and that is by design. The only thing to factor in while performing backups is the time required, and keeping track of what step is being performed to ensure that nothing is being skipped.

The overall process for backing up the required data and where that data will reside can be seen in this simplified workflow diagram:

![Backup workflow with all backup drives and locations where they are stored.](/images/blog/00061/backup-workflow.png)

In the workflow the locations for the backup drives, the status of those drives, and all relevant file locations can be seen. There are two offsite backup locations where 3 of the backup drives are located at any given time, plus the onsite backups which are always stored locally.

### Backup Frequency ###

I do daily and monthly backups of all my important data:

* I backup my MacBook Air and iCloud files daily using Time Machine. This process is entirely automated and requires no user intervention to start the backup process.
* I perform a full backup once a month of all files. This includes all **Documents** and **NAS Media** files that were defined earlier in this post.

I also utilize [Active Backup for Microsoft 365](https://www.synology.com/en-global/dsm/feature/active_backup_office365) for backing up data in my Office 365 tenant to my Synology NAS. This is an automated process that occurs on it's own schedule.

Whenever a full backup is performed of my data, at least one of the offsite backups is swapped as soon as possible and the previously offsite backup is updated.

### Backup Automation ###

I don't really use automation for backing up anything, I just have a checklist. There is so little to do it isn't really required, plus it requires the physical swapping of backup disks, so automation would require breaks in the process to work correctly.

### Backup Procedure ###

There are two cloud services that I need to backup manually first, and that is for GitHub and for Office 365:

* Download copies of all Git repositories and all GitHub data:
    * Go to the [GitHub Admin Page](https://github.com/settings/admin), create a new export and download when it is ready (takes less than 10 minutes).
    * If I have only made changes to one or two repositories, I will just export the changed repositories and not bother with a full backup.
    * These files are stored with my **Documents** files and are backed up with those files.
* Export my Office 365 mailboxes to PST files:
    * I use Active Backup for Microsoft 365 with my Synology NAS, but I still want an offline backup of my email.
    * I don't bother doing this from the Office 365 Admin portal, I just use Outlook to export the mailboxes because it is faster, and the data is already downloaded.
    * As much as PST files are hated by systems administrators, they are the most convenient way to export entire mailboxes in a convenient manner and can be backed up in a matter of minutes.
    * These files are stored with my **Documents** files and are backed up with those files.

For creating a full backup of my **Documents** data, I perform the following steps:

1. Mount the encrypted backups volume on the Synology NAS.
2. Create a new folder in the encrypted backups volume with the date when the backup was started.
3. Copy the current iCloud data to the backups folder.
4. Copy the current OneDrive data to the backups folder.
5. Copy the latest backup folder from the encrypted backups volume to both offsite backups that are currently onsite.
6. Unmount the encrypted backups volume.

It usually takes a few hours to perform the backups to the NAS, and then the backups to the two hard drives. Since the process is mostly just clicking and waiting, I start the process in the morning, and it is usually done in the early afternoon.

For the **NAS Media** which holds my non-critical data, it is just a matter of copying the data that needs to be backed up to the offsite backup drives.

When either pair of offsite drives returns, I copy the latest backup from the encrypted backup volume to the backup drive so that it matches the backup that recently went offsite.

## Does the Backup Strategy Work? ##

I believe that I have everything covered according to the 3-2-1 backup rule:

* Create one primary backup and two copies of your data.
    * I have at least 1 primary copy, and at least 4 copies of my data at any given time.
    * Backups are stored locally and offsite, so data recovery is not an issue should it arise.
* Save your backups to two different types of media.
    * Backups are stored on two different types of hard drives.
    * I am planning on adding backups to Blu-ray disks at least twice a year, so that will introduce a third type of backup media.
* Keep at least one backup offsite.
    * I am storing 2 backups offsite, both offline and encrypted.

I have tested the backups more than once and I know that everything works, so I am satisfied with the results. I have not yet had to do a recovery from any of these backup drives because of data loss that I have experienced. For maintenance purposes and for stability, I will cycle out backup drives as they get to be a certain age, or if the capacity becomes an issue.

## Links ##

* [VeraCrypt](https://veracrypt.fr/)
* [World Backup Day](https://www.worldbackupday.com/)
