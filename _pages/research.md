---
layout: page
title: research
permalink: /research/
description: Introducing key publications from the Ono lab. Find a hidden magical Tocky mouse on this page!
nav: true
nav_order: 3
display_categories: [primary research, review and opinion]
horizontal: false
og_image: https://monotockylab.github.io/assets/img/MonoTockyLab.png
twitter_image: https://monotockylab.github.io/assets/img/MonoTockyLab.png
---

<div class="row mt-3">
  <!-- First image: JPEG -->
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid
       path="assets/img/tocky/TockyMouse.jpg"
       width="200"
       height="auto"
       zoomable=true %}
  </div>

  <!-- Second image: SVG animation -->
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    <object
      class="svg-figure"
      type="image/svg+xml"
      data="{{ '/assets/svg/mouse.svg' | relative_url }}"
      aria-label="Tocky draw animation"
      style="max-width:300px; width:150%; height:auto;">
    </object>
  </div>
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
