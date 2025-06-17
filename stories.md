---
layout: default
title: Stories
permalink: /stories/
---

# Stories

<ul>
{% for post in site.posts %}
  {% if post.categories contains "stories" %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
