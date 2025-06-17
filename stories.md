---
layout: default
title: Stories
permalink: /stories/
---

<section class="content">
  <h1>Stories</h1>
  <ul>
    {% for post in site.posts %}
      {% if post.categories contains "stories" %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
</section>
