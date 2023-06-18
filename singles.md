---
layout: layouts/site_page.njk
title: Singles
breadcrumb:
  - path: /
    title: Home
---

# Singles

This is the archive of all my "singles" pages: one-offs, persistent records of things, etc:

{% for post in collections.singles -%}
- [{{ post.data.title }}]({{ post.url }}) ({% blogDate post.date %})
{% endfor %}