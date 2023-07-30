---
title: "Practical Guide to PKI with Windows Server - Behind the Scenes"
slug: "practical-guide-to-pki-with-windows-server-behind-the-scenes"
date: "2021-09-23T09:08:00-05:00"
author: "Matthew Burr"
summary: "I wanted to go into the details on why I wrote this book and focus on what I learned while writing it. I will also go into the details on the process of writing the book and what tools I used. Writing a book was definitely much harder than I ever thought it would be, but I wanted to document the process as best as I could should other people be interested in doing the same. As difficult as it was, I would certainly do it again now that I know what to expect."
tags: [
    "Books",
    "LaTeX",
]
categories: [ "Blog" ]
thumbnail: "/images/blog/00038/pki-book-vscode.png"
featureImage: "/images/blog/00038/pki-book-vscode.png"
draft: false
---

I wanted to go into the details on why I wrote this book and focus on what I learned while writing it. I will also go into the details on the process of writing the book and what tools I used. Writing a book was definitely much harder than I ever thought it would be, but I wanted to document the process as best as I could should other people be interested in doing the same. As difficult as it was, I would certainly do it again now that I know what to expect.

For the page for the book, go to [Practical Guide to PKI with Windows Server](/publications/practical-guide-to-pki-with-windows-server/).

{{< toc >}}

## Writing a Book ##

I have gone back and forth over the last few years about writing a book on a networking topic, but could never really get started on it. At the end of 2019 I finally decided that I wanted to attempt to write a book and made it a goal in 2020 to actually write one (not exactly a New Year's Resolution, but more of a goal). I didn't think I would actually get to publish anything in a year (which turned out to be true), but I wanted to at least get started on a book. I knew that once I got started I would be motivated to finish it, regardless of the amount of time that it took me.

I brainstormed a few topics on networking and security but I could not come up with something that I thought I could write a complete book about. Some of those topics will end up as posts on this site one day, but that is all that came of them. At the same time this was all happening I was putting together the [Building a Certificate Authority in Windows Server 2019](/blog/2020/03/09/certificate-authority-windows-server-2019/) guide in a simple Word document, but I wasn't actually planning on using that as a topic for a book. Eventually I ended up deciding on an unrelated topic for a book, which then lead to several weeks of writing an informal outline of the book in OneNote and deciding on the overall focus and goals of it.

At the same time, a few things happened all at once. COVID-19 forced a lockdown in Ontario in March 2020. My employer put an immediate stop to all projects until further notice, and I just ended up having a lot of free time all of a sudden in the evenings and weekends. If I was going to actually write a book now was the time to do it, and it was mostly to give myself something to do. It turns out that this was easier said than done.

## Getting Started ##

After a few weeks of working on the book I started to run into a few issues. Before I even started working I read several guides on the best process for writing a technical book, what to do and what to avoid. As expected, a lot of things came up that were causing me issues:

* Scope creep
* Too much information or not enough information
* Structure issues with the book

I wasn’t happy with the way the book was coming together and I was constantly going back and changing things to make it work. I was using JIRA to track my progress and I was spending more time working with JIRA instead of writing anything for the book.

I decided to take a break to figure out what I should do and if I could salvage anything that I have written. I came to the realization that it was far too ambitious to go from never writing a book to writing one that was extremely complex and covered multiple topics. I decided to rethink the topic to focus on something that I knew very well instead as a first book so that I could learn what to do.

This was around August 2020 when I was answering a few questions about my PKI guide that I had written for the site. I realized that I should use that a basis for a first book instead because I already knew the content and it was already available. It also had a basic framework that I could easily follow and expand upon. There were a lot of things to expand upon:

* The guide was basic and only contained the bare minimum needed to create a PKI.
* There was no background information on PKI or what it was used for and how it worked.
* There was a lot of details missing, especially on why certain tasks were done.
* There were no screenshots or diagrams.
* There were no additional configuration options such as CLI.

A few months prior I had created a PDF version of the guide in LaTeX, but I had not uploaded it yet to the site. I checked what I had already done on that version in Git, and copied it to a new repository to get started.

I looked at a few examples of technical book templates to ensure that the format and structure of the book made sense. I wanted to get that part of the process figured out before I started writing anything else.

## Original Guide and Statistics ##

In early 2020 I wrote a 9 part guide called [Building a Certificate Authority in Windows Server 2019](/blog/2020/03/09/certificate-authority-windows-server-2019/) and published it to my site. I wrote this guide since I had recently created a Two-Tier Certificate Authority for a contract I was doing at the time, and I wanted to create a complete guide for any future projects that I might be doing. I had created multiple Certificate Authorities since 2010, and I had notes on how to create them starting from Windows Server 2008 R2 all the way up to Windows Server 2019. I spent a few weeks formalizing the process, and once I was done creating the guide I wanted to release it for anyone to use. I had not seen too many “complete” guides online that showed the Certificate Authority process from start to finish that went into any details on the process. I also found that some guides were missing a lot of important details, and I like to be thorough and not assume that everyone will understand every single step.

The guide was a huge success. As of this writing, I have received over 40,000 page views for the entire guide, which certainly makes it the most popular series of posts I have ever written. That amount of views may not seem like much to some people, but I was quite amazed as to how popular it was. I had written a smaller guide around a month earlier called [Visual Studio Code with LaTeX](/blog/2020/01/23/visual-studio-code-with-latex/), which is the second most popular guide on my site with around 10,000 total views.

One of the drawbacks to using WordPress for creating a guide like this is embedding screenshots into the guide. During the writing process I ended up taking over 450 screenshots of various steps and created multiple diagrams, which would have been extremely difficult to manage using WordPress. I have never found any useful tools for managing that number of screenshots with that platform, and even on smaller posts I have written in the past, images sometimes "disappear" or break for no reason at all. If you have ever looked at the guide, that is the main reason why it is mostly devoid of any images.

I intentionally disable comments on my site as I don't have any interest in attempting to moderate them, but I did have a few people send me feedback about the guide which was very helpful. They had found a few spelling mistakes and small typos, which made the guide much more complete and accurate.

## Tools for Writing the Book ##

There were several tools that I used for creating the book:

* **VS Code** - Main development environment for the book
* **MiKTeX** - LaTeX distribution
* **Atlassian Bitbucket** - For version control with Git
* **Atlassian JIRA** - For tracking issues and tasks to be completed
* **Hyper-V** - For testing the steps in the book and taking screenshots
* **Visio** - For creating basic diagrams
* **GIMP** - For creating the cover page template

I only ever intended on using LaTeX for writing the book, so I used the same VS Code environment that I have used in the past since I was familiar with it. Combined with Bitbucket, it worked exceptionally well:

![VS Code with all LaTeX and Atlassian extensions.](/images/blog/00038/pki-book-vscode.png)

I could do commits to Git right from VS Code, which was quite convenient. For large commits I would use Atlassian Sourcetree, which made the commits much easier.

I had to redo all of the screenshots to ensure that they were consistent, and that the sizes were more or less the same. I ended up putting together a small style guide for the book as well to ensure consistency, especially for all Command Line screenshots. All screenshots were done on Hyper-V and using the steps directly from the book.

Creating the cover page was not easy for me. I am not an artist and I have always had issues with making things like this. Fortunately, since I eventually would like to use the KDP service through Amazon, I was able to find some very helpful guides for making the cover page without too much hassle:

![Front and Back Cover for the Book, plus the Spine text.](/images/blog/00038/first-edition-cover-lowres.png)

Even though I am not an artist, I think it turned out and is certainly usable. In the future, I would likely consider getting someone else to create the cover page.

For the ISBN numbers and Copyright, that was all done through several Canadian government websites. I was able to register an ISBN for the digital version of the book, and another one for the print version.

Editing the book was a whole other story. I tried my best to correct issues as they came up, but when working on something this complex, there are always issues present. Once a week I would export the PDF to DOCX format and use Microsoft Word to do a spelling and grammar check to make sure there were no obvious issues. I tried to avoid printing out copies of the book unnecessarily, as I did not want to waste paper, but I did print out the final draft version and read it from cover to cover making corrections:

![Final draft edits.](/images/blog/00038/pki-book-draft.jpg)

I read the book cover to cover twice looking for any issues. I did find a lot of issues, but they were mostly grammar issues that Word didn't find. I had to come to realization that I was never going to make the book perfect, and unless I had a professional editor look at it there would always be minor issues with it.

## Publishing the Book ##

I ended up going with Gumroad for the first release of the book. The platform allowed for easy publishing of PDF files (which is the current book format) and was the easiest to use. I was going to use WooCommerce through WordPress, but I was having some issues getting it setup. I will likely release the book on other platforms in the near future, if there is any demand.

With Kindle Direct Publishing (KDP), I am able to offer the book in a printed edition. I was able to order a few author copies to verify that the book printed correctly, and I was quite happy with the results:

![Front Cover](/images/blog/00038/pki-book-front-cover.jpg)

![Back Cover](/images/blog/00038/pki-book-back-cover.jpg)

![Spine](/images/blog/00038/pki-book-spine.jpg)

## Final Statistics ##

I am not sure how much total time I spent working on the book, but working on it for around 6 hours a week for 12 months puts the total time at around 300 hours. There were some days when I worked on it for only 1 hour and some where I did for more than 2 or 3 hours, but that is when I was "on a roll", so the total time was likely much longer. I did end up taking a few weeks off from writing once or twice due to other commitments. In the future, should I write another book I will track my time better.

I checked the statistics for the book on the day that I finalized it, it is definitely the most I have ever written:

![Statistics for the book.](/images/blog/00038/pki-book-word-count.png)

## Lessons Learned ##

**Don't write a book!**

In all seriousness, my first lesson learned is to not underestimate the amount of time required to write a book from start to finish. In hindsight, I am glad that I did it and I had the time to do it, but in the future I will definitely set my expectations a bit better in regards to how much time is required. It was an interesting exercise, and even though I don't think the book will be popular at all, I am glad that I did it.

## Links ##

* [Amazon Book Profile](https://www.amazon.com/dp/B09HHLZ36L)
* [Gumroad Book Profile](https://mjcb.gumroad.com/l/pki-book)
