---
layout: layouts/site_page.njk
title: Home
---

# Juniper's website

Welcome to my website!

This is a little space I made to gather and share the things that bring me joy, the throwaway thoughts and rabbit-holes of research I end up down. It is likely of no practical use to you whatsoever.

Day-to-day, I'm a software engineer. Outside of that, I love a great many things and pick up lots of hobbies. I find that often the best way for me to learn is to write down what I find out, so that's largely what I put here: bits of music theory, facts I pick up, how bits of electronics work, anything really.

Have a browse if you like.

## Blog

Posts about things that go on in my life and other bits and bobs I find interesting.

[Browse the entire blog archive](/blog/), or jump to some recent posts:

{% for post in collections.recentBlogPosts -%}
- [{{ post.data.title }}]({{ post.url }}) ({% blogDate post.date %})
{% endfor %}

## Singles

Standalone pages on specific topics, or persistent logs and archives which I update over time.

[Browse the entire archive here](/singles/).
