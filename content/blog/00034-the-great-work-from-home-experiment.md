---
title: "The Great Work From Home Experiment"
slug: "the-great-work-from-home-experiment"
date: "2020-06-23T16:40:00-05:00"
author: "Matthew Burr"
summary: "To say that 2020 has not been going well would be a big understatement. The COVID-19 Pandemic came out of nowhere and it has rapidly disrupted the lives of hundreds of millions of people. Entire countries were and still are under full or partial lock down, air travel is virtually non-existent and manufacturing is seriously impacted. I won’t even get into the economic repercussions since that will take a long time to determine once the Pandemic is finally over."
tags: [
    "COVID-19",
    "WFH"
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00034/this-is-fine.jpg"
featureImage: "/images/blog/00034/this-is-fine.jpg"
draft: false
---

To say that 2020 has not been going well would be a big understatement. The COVID-19 Pandemic came out of nowhere and it rapidly disrupted the lives of hundreds of millions of people. Entire countries were and still are under full or partial lock down, air travel is virtually non-existent and manufacturing has been seriously impacted. I won’t even get into the economic repercussions since that will take a long time to determine once the Pandemic is finally over. When this is all over, many businesses that closed as a result of COVID-19 will likely never open their doors again. Businesses that were "already on the brink" will likely not survive as well. With the expectation that a "Second Wave" will hit in the Fall or Winter, that makes it very difficult to do any sort of planning within an IT Department.

There is going to be a lot of very interesting side effects once this Pandemic is over. Some of these are already apparent. A lot of companies were completely unprepared for shifting their entire workforce from their Corporate Offices to their Employee's homes. I personally received a lot of calls in the first few weeks of March from Recruiters that were desperate to find people who knew how to implement VPN services and people who knew how to scale it out rapidly. At least for me and the company I have been working with since early 2019, I took care of that long before it became an issue and it has been mostly smooth sailing.

## Let's Send Everyone Home and Figure Out the Details Later? ##

For the first time, all of the laptops that have been issued to Employees are being used at home during work hours since their offices should be closed. Remote access systems that were only ever used part of the time or used for only a small number of people are actually being utilized by a majority of employees during regular business hours. I have been working remotely on and off for most of my career so going to 100% remote was not really that big of a deal for me, but it has definitely been a learning experience for a lot of people.

One of the things that came up seemed to come out of nowhere for a lot of people and has caused a lot of headaches for Systems Administrators and IT Staff everywhere, and that is video conference solutions. If you are lucky enough to not familiar with Zoom, I envy you. The one thing that causes a lot of issues in an IT Department is Shadow IT, where Employees take it upon themselves to setup a new solution without consulting anyone. It is very important to not allow users to use alternative programs, especially if your organization has gone to the trouble of providing a solution already. If you are a Teams shop, don’t let individuals use Slack. If you provide WebEx, don’t let them use Zoom. If you use Office 365, don't let them use LibreOffice. I could go on, but that is what needs to be done.

End users do not dictate what software or solutions are used. They are welcome to let IT know, but it is ultimately not their decision. I don't say this because I am a control freak or because I have to do everything myself, but as a member of the IT Department it is my job to make sure that people are able to do their jobs as easily and effectively as possible. However, implementing solutions requires careful considerations that users do not always necessarily understand.

Let me explain in case you are not familiar. Picking any software or hardware solutions is difficult. It is way more difficult than you think. Here is what you need to consider when picking anything in IT:

* Is it compatible with our existing systems?
* Does it support secure authentication? Does it support MFA?
* Does it integrate with our existing authentication systems? Does it integrate with ADDS? Does it integrate with Office 365?
* Is it secure? Is it secure? Is it secure? (Yes, I asked if it was secure 3 times).
* What is the companies plan for security?
* What is the roadmap for the solution? Is it going to be supported 1 year from now? 3 years? 5 years?
* Does it require an application to be deployed to end users?
* Where does the data that it collects on users reside?
* Who is deploying it? The vendor or the IT Department?

I could go on, but bottom line, it is not easy to implement a new solution quickly or easily.

## What's Next? ##

Well, it has been a few months since this all began, and your mileage will vary depending on what company you work for. Here is what we know at least:

* Employers now know that their employees can work remotely and still get their jobs done.
* Employees will come to expect the right to work from home now that they know the tools are in place and they can be productive while not in the office.
* It is more important to ever to invest properly in Critical IT Infrastructure. Companies that were completely unprepared to allow their entire workforce the ability to work remotely will need to be prepared. If your organization has 1000 laptops in the field, your VPN server should have the same capacity.
* The standard practice of buying only workstations is likely over. I have heard so many reasons in the last 10 years about why some people will never need a laptop, until they actually need one.
* Having a Business Continuity Plan (BCP) is now more important than ever. Don't forget that Disaster Recovery (DR) is a part of any BCP plans that a company should have at all times.

I guess we will need to wait and see what happens in the next 6 months with COVID-19. If you weren't prepared for the initial lockdown, it is definitely time to get ready for the next one.

Cover image credited to Gunshow ([http://gunshowcomic.com/648](http://gunshowcomic.com/648)).
