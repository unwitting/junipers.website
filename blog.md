---
layout: layouts/site_page.njk
title: Blog
breadcrumb:
  - path: /
    title: Home
---

# Blog

This is the archive of all blog posts on the site.

{% for post in collections.blog -%}
- [{{ post.data.title }}]({{ post.url }}) ({% blogDate post.date %})
{% endfor %}