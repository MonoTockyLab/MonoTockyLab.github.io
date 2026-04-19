---
layout: page
title: Research
permalink: /research/
description: Introducing key publications and computational tools from the Ono lab. Find hidden magical creatures on this page!
nav: true
nav_order: 1
display_categories: [primary research, review and opinion]
horizontal: false
og_image: https://monotockylab.github.io/assets/img/MonoTockyLab.png
twitter_image: https://monotockylab.github.io/assets/img/MonoTockyLab.png
---

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid
       path="assets/img/tocky/TockyMouse.jpg"
       width="200"
       height="auto"
       zoomable=true %}
  </div>

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

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category | slugify }}" href="#{{ category | slugify }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
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
{% assign sorted_projects = site.projects | sort: "importance" %}
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

<hr class="mt-5 mb-5">

<h1 id="computational-tools">Computational Tools</h1>

<p>
Our Tocky software and general flow cytometry tools support analysis of Tocky data as well as broader flow cytometric datasets.
The tools listed under <em>General Flow Cytometric Tools</em> are applicable to any flow cytometric data.
Find a hidden magical Turtle (“Kame-san”) in this section!
</p>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    <object
      class="svg-figure"
      type="image/svg+xml"
      data="{{ '/assets/svg/kamesan2.svg' | relative_url }}"
      aria-label="Kame-san draw animation"
      style="max-width:300px; width:150%; height:auto;">
    </object>
  </div>
</div>

{% assign tocky_categories = "Tocky,General Flow Cytometric Tools" | split: "," %}

<div class="projects">
{% if site.enable_project_categories %}
  {% for category in tocky_categories %}
  <a id="{{ category | slugify }}" href="#{{ category | slugify }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_tocky_items = site.tocky | where: "category", category %}
  {% assign sorted_tocky_items = categorized_tocky_items | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-2">
    {% for tocky_item in sorted_tocky_items %}
      {% include tocky_item_horizontal.liquid tocky_item=tocky_item %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for tocky_item in sorted_tocky_items %}
      {% include tocky_item.liquid tocky_item=tocky_item %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}
{% else %}
{% assign sorted_tocky_items = site.tocky | sort: "importance" %}
{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-2">
    {% for tocky_item in sorted_tocky_items %}
      {% include tocky_item_horizontal.liquid tocky_item=tocky_item %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="grid">
    {% for tocky_item in sorted_tocky_items %}
      {% include tocky_item.liquid tocky_item=tocky_item %}
    {% endfor %}
  </div>
{% endif %}
{% endif %}
</div>

<div class="row mt-3">
  <div class="col-12 d-flex justify-content-center">
  <object
      class="svg-figure"
      type="image/svg+xml"
      data="{{ '/assets/svg/kamesan2.svg' | relative_url }}"
      aria-label="Kame-san draw animation"
      style="max-width:900px; width:450%; height:auto;">
    </object>
  </div>
</div>
