---
layout: post
title:  "Working with timezones in Jekyll"
date:   2015-10-14 08:01:00 -04:00
# image: http://i.imgur.com/cfajk6r.jpg
tags: [jekyll, blog, tips]
summary: "I was working on implementing a subscribe in my blog when I realized that my timestamps were being factored from UTC, and not EDT/EST. If you are experiencing the same thing, make sure you are setting your timezone offset."
comments: true
---

I was working on implementing a subscribe in my blog when I realized that my timestamps were being factored from UTC, and not EDT/EST.

If you are experiencing the same thing, make sure you are setting your timezone offset in your blog posts Front Matter: 

`date:   2015-10-14 07:40:00 -04:00`

Also, make sure you set your timezone in your _config.yml:

`timezone: America/New_York`.

Rebuild, and it should be good to go now!