---
layout: page
title: Tocky
permalink: /tocky/
description: This page introduces our computational packages designed for analysing Tocky and beyond. The software tools listed under 'General Flow Cytometric Tools' are applicable to any flow cytometric data.
nav: true
nav_order: 4
display_categories: [Tocky, General Flow Cytometric Tools]
horizontal: false
og_image: https://monotockylab.github.io/assets/img/MonoTockyLab.png
twitter_image: https://monotockylab.github.io/assets/img/MonoTockyLab.png
---

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
