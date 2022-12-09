---
title: "Practical Guide to PKI with Windows Server - One Year Later"
slug: "practical-guide-to-pki-with-windows-server-one-year-later"
date: "2022-09-27T15:57:00-05:00"
author: "Matthew Burr"
summary: "I published my book, Practical Guide to PKI with Windows Server on September 22, 2021 and it has now been over a full year since I made it generally available for purchase. I wanted to reflect on what I have learned since releasing the book, what issues I have encountered, and what the next steps are."
tags: [
    "ADCS",
    "Books",
    "Microsoft",
    "Windows"
]
categories: [ "Blog" ]
thumbnail: "/images/publications/pki-book/pki-book-thumbnail.png"
featureImage: "/images/publications/pki-book/pki-book-featured.png"
draft: false
---

I published my book, [Practical Guide to PKI with Windows Server](/publications/practical-guide-to-pki-with-windows-server/) on September 22, 2021 and it has now been over a full year since I made it generally available for purchase. I wanted to reflect on what I have learned since releasing the book, what issues I have encountered, and what the next steps are.

Overall it has been a great experience, but I want to be fully transparent on any issues I have encountered so that anyone who is looking to write their own book will know what to expect.

{{< toc >}}

## Statistics ##

I won't get into the in-depth details on my total book sales, but I can share some statistics. I currently offer the book for sale in three different formats:

* Paperback from Amazon KDP (Kindle Direct Publishing).
* Digital eBook from Amazon Kindle.
* Digital eBook from Gumroad.

Overall, the total sales breakdown for each format is as follows:

* Paperback - **49%**
* Kindle eBook - **30%**
* Gumroad eBook - **21%**

The most surprising statistic is how many people have purchased the book in Paperback format. I expected the Paperback format to sell the least overall, as the eBook format is easier for copying commands needed to complete the steps in the book.

## Building a Certificate Authority in Windows Server 2019 ##

I created a condensed guide version of the book, called [Building a Certificate Authority in Windows Server 2019](/publications/building-a-certificate-authority-in-windows-server-2019/), which is essentially the last chapter of the book that has been slightly changed. I created this guide to provide a sample of the book, and to create a more complete version of the [Building a Certificate Authority in Windows Server 2019](/blog/2020/03/09/certificate-authority-windows-server-2019/) guide series that I posted back in early 2020.

Creating this downloadable guide worked out fairly well, and I have had many people download the guide and then buy the book afterwards. I published this guide on Gumroad, and one of the things that I like about that platform is the instant notifications that content has been purchased or downloaded. It is very common for me to see someone download the guide and then a few hours later buy the complete book.

## Practical Guide to PKI with Windows Server - Second Edition ##

I told myself that this book project would be a one-time deal, and I would probably not do any type of follow-up for it. I was happy with the book that I had created, and I wrote about it in the [Practical Guide to PKI with Windows Server - Behind the Scenes](/blog/2021/09/23/practical-guide-to-pki-with-windows-server-behind-the-scenes/) post. If the book was successful and I received positive feedback for it, I would try and write another book on a few other topics that I have been thinking about.

Since publishing the book, Microsoft released Windows Server 2022 and Windows 11. While not drastically different from Windows Server 2019 and Windows 10, there were still some slight differences that require some changes in the process of creating a PKI.

Despite editing the book and looking for any small errors, the book ended up being over 85,000+ words in total, so small typos and grammatical errors still ended up in the book. I had several customers email me about small errors in the book, and I found a few of them myself. Fortunately, they were not major errors and didn't result in issues with deploying a Certificate Authority, but were still errors that I wanted to fix.

So I have decided to create a Second Edition of the book, and I am already working on it. I have decided to make updates to the existing content as well as add much more content based on user feedback.

At a minimum, I am making the following changes and additions to the book:

* Update the PKI infrastructure steps from Windows Server 2019 to Windows Server 2022.
* Update the Certificate Deployment steps to use Windows 11, and newer versions of iOS, macOS and Android.
* Update the CLI options to use PowerShell whenever possible, and change the formatting to better differentiate between the Command Prompt and PowerShell.
* Update the book to prioritize CLI over GUI deployments and configurations.
* Add additional information to the book Appendix, including additional Certificate commands and options.
* Add migration options for earlier versions of Windows Server.
* Add deployment options for One-Tier and Three-Tier Certificate Authorities.
* Add complete scripting options to rapidly deploy a Certificate Authority.

I will also try and offer the book in Hardcover format through Amazon KDP, should anyone be interested in it. This will require changes to the page dimensions, and now that I have a better understanding of LaTeX, this is much easier for me to do.

I believe that I can make these changes in around 4 months, so I will give myself 8 months because that is usually what happens in projects like this. Hopefully, by the beginning of Summer 2023 I will be able to release the book.

At the same time, when creating the Second Edition of the book I will also update the free version of the guide and create a Windows Server 2022 version of it. The original multi-part guide that I posted on this website will not be updated, and I probably won't post another multi-part guide like that for this subject.

## Future ##

As of this writing the EOL for Windows Server 2022 is in late 2026 for mainstream support, and in 2031 for extended support. Since Microsoft won't be releasing a new version of Windows Server for several years, this will definitely be the last time I go into this particular subject in book form.

My next book project will be about a completely different topic, and I will be hoping to start that project in the fall of 2023.

## Links ##

* **Amazon**: [https://www.amazon.com/dp/B09HHLZ36L](https://www.amazon.com/dp/B09HHLZ36L)
* **Gumroad**: [https://mjcb.gumroad.com/l/pki-book](https://mjcb.gumroad.com/l/pki-book)
