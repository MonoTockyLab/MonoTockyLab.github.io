---
layout: page
title: Tocky
permalink: /tocky/
description: Introducing our computational packages for analysing Tocky and General Flow Cytometric Data.
nav: true
nav_order: 4
display_categories: [Tocky, General Flow Cytometric Tools]
horizontal: false
og_image: https://monotockylab.github.io/assets/img/MonoTockyLab.png
twitter_image: https://monotockylab.github.io/assets/img/MonoTockyLab.png
---

The software tools listed under 'General Flow Cytometric Tools' are applicable to any flow cytometric data.
Find a hidden magical Turtle ('Kame-san') on this page!

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
      data="{{ '/assets/svg/kamesan2.svg' | relative_url }}"
      aria-label="Tocky draw animation"
      style="max-width:300px; width:150%; height:auto;">
    </object>
  </div>
</div>
<!-- pages/tocky.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized items -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_tocky_items = site.tocky | where: "category", category %}
  {% assign sorted_tocky_items = categorized_tocky_items | sort: "importance" %}
  <!-- Generate cards for each Tocky item -->
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

<!-- Display Tocky items without categories -->

{% assign sorted_tocky_items = site.tocky | sort: "importance" %}

  <!-- Generate cards for each Tocky item -->

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
