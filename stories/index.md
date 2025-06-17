---
layout: default
title: Stories
---

# Stories

<ul>
  {% for post in site.categories.stories %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> — {{ post.date | date: "%Y-%m-%d" }}</li>
  {% endfor %}
</ul>
