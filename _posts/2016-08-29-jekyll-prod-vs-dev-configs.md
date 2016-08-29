---
layout: post
title:  "Jekyll Prod vs. Dev Configs"
date:   2016-08-29 11:45:00 -04:00
#image: http://i.imgur.com/GUxlgZf.jpg
tags: [jekyll, tips]
#summary: "The top 2015 most used password have been released, and I hope you aren&rsquo;t using anything from this list!<br><br>Don&rsquo;t be like Lord Dark Helmet, change your password if it&rsquo;s on this list."
comments: true
---

Here is a quick tip when working with Jekyll. I was having issues related to Google Analytics because of how I do my jekyll deploys. Basically, Analytics was loading and adding to my counts even on my development setup. This was skewing my numbers.

What I discovered is pretty convenient. You can have multiple configs, for example your main *_config.yml*, and a *_config_prod.yml*. In the *_config.yml*, I have `analytics: false`, and in *_config_prod.yml*, I have `analytics: true`. 

So, with my Analytics code wrapped in `{% raw %}{% if site.analytics %}...{% endif %}{% endraw %}`, when I `jekyll s`, Analytics doesn't load. 

You can have one or more config file specified in a serve or build. So on my deploy script, I have it doing `jekyll b --config _config.yml,_config_prod.yml`. This works because the right most config file overwrites conflicts in the files to the left.

What does this all mean? Well, you could use it as simply as I am to make sure stuff doesn't show up in your development, such as Analytics. You could also use it to set your url and baseurl accordingly to your development and production environments. This is nice because you don't have to remember to adjust your *_config.yml* before you accidentally deploy an incorrect configuration, hindering your site.

Let me know if you have come up with other great use cases for this.