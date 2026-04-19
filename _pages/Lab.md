---
layout: page
title: Lab
permalink: /lab/
description: Complementary research bases in London and Kumamoto
nav: true
nav_order: 2
news: true
selected_papers: true
social: true
og_image: https://monotockylab.github.io/assets/img/MonoTockyLab.png
images:
  compare: true
  slider: true
---

The Ono Lab operates across two complementary research bases in **London** and **Kumamoto**, linked by a shared interest in immune dynamics and by common experimental and computational frameworks.

The **UK Lab** focuses on cancer immunology and immunotherapy, with particular emphasis on how T-cell receptor signalling, Foxp3-associated programs, immune checkpoint pathways, and cytokine-responsive processes change over time in the tumour microenvironment.

The **Japan Lab** develops broader work on immune dynamics, with emphasis on the temporal regulation of immune responses and on the development of experimental and computational frameworks for analysing immune cell state transitions.

## UK Lab (London)

The UK Lab is centred on cancer immunology and immunotherapy. Its work examines how immune cell states emerge, persist, and change over time during anti-tumour responses and immune checkpoint blockade.

### Cancer Immunology and Immunotherapy

Our research focuses on cancer immunology and immunotherapy, with particular emphasis on understanding immune responses as dynamic processes evolving over time rather than as static cell categories.

In particular, we study how T-cell receptor signalling, Foxp3-associated programs, immune checkpoint pathways, and cytokine-responsive processes are regulated, integrated, and reshaped over time in the tumour microenvironment. This is addressed through a combination of experimental immunology and computational analysis.

Building on the Tocky system based on Fluorescent Timer proteins, we aim to capture not only the current state of immune cells, but also their recent stimulation history and the trajectory of their responses during anti-tumour immunity and immunotherapy.

Current research themes include:

- temporal mechanisms of T-cell fate in cancer
- immune checkpoint biology
- immunotherapy response trajectories
- Foxp3-associated regulatory programs in tumour immunity
- time-resolved single-cell analysis of tumour-infiltrating immune cells

<div class="row mt-3">
     <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/lab/lab.jpg" width="250" height="auto"  zoomable=false %}
    </div>
</div>
## Japan Lab (Kumamoto)

The Japan Lab, **免疫・感染ダイナミックス分野** at Kumamoto University, provides a broader base for studying immune dynamics in vivo.

Its work focuses on the dynamic regulation of immune cell states, signalling history, and gene regulatory programs through the integration of experimental immunology and computational analysis. This includes the development of Tocky-based approaches and related analytical frameworks for resolving immune responses over time.

<div class="row mt-3">
     <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/lab/kumamoto.jpg" width="250" height="auto"  zoomable=false %}
    </div>
</div>


---

## Research Overview

Anti-tumour immunity is shaped by continuously changing cellular states in the tumour microenvironment.

Our work focuses on the temporal regulation of immune responses in cancer, aiming to understand state transitions, differentiation processes, adaptation to persistent stimulation, immune checkpoint-mediated regulation, and gene expression control over time.

Major areas of interest include cancer immunology, immunotherapy, immune checkpoint biology, Foxp3-associated regulatory programs, and dynamic immune responses in tumour settings.

---

## Research Themes

### Temporal Dynamics of T-cell Receptor Signalling in Cancer

We analyse how T cells respond to tumour-associated antigen stimulation in terms of both intensity and duration.
Rather than treating activation as a binary state, we aim to understand it as a continuous temporal process within the tumour microenvironment.

### Immune Checkpoint Pathways and Immunotherapy Response

We investigate how immune checkpoint pathways are induced and regulated over time, and how they influence immune cell states during checkpoint blockade and related immunotherapies.

### Dynamics of Foxp3 and Immune Regulatory Molecules in Tumours

We study how Foxp3 expression, immune checkpoint molecules, and cytokine-related pathways are induced, maintained, and modulated under TCR signalling and other signalling inputs in tumour-associated immune cells.
Our goal is to understand immune regulation as a dynamic molecular network rather than a fixed classification of cell types.

### Immune Cell State Transitions in the Tumour Microenvironment

We aim to characterise how immune cells change over time in tumours, and to understand both productive anti-tumour responses and dysfunctional or suppressed states.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid path="assets/img/lab/kougi.jpg" width="400" height="auto" zoomable=false %}
  </div>
</div>

---

## Technical Platforms

### Tocky

We use Fluorescent Timer proteins to visualise temporal information in intracellular events and immune signalling dynamics.

<div class="row mt-3">
  <div class="col-12 d-flex justify-content-center">
    <img
      src="{{ '/assets/img/research/cd4_cd8_tocky_time.png' | relative_url }}"
      alt="CD4-CD8 Differentiation x Tocky Time"
      style="width:min(350px, 70vw); height:auto;"
    >
  </div>
</div>

<p class="caption">
Figure from our bioRxiv preprint:
<a href="https://www.biorxiv.org/content/10.64898/2026.03.16.711988v1">Canonical Analysis of Fluorescent Timer-Anchored Transcriptomes Resolves Joint Temporal and Developmental Progression</a>.
</p>

---

### Flow Cytometry

We use high-dimensional flow cytometry to analyse immune cell states at high resolution.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid path="assets/img/research/aria.jpg" width="400" height="auto" zoomable=false %}
  </div>
</div>

---

### Single-Cell Analysis

We analyse immune cell heterogeneity and state transitions using single-cell transcriptomics and flow cytometry.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    <img
      src="{{ '/assets/gif/flowtimer.gif' | relative_url }}"
      alt="FlowTimer animation"
      style="width:min(300px, 90vw); height:auto;"
    >
  </div>
</div>

---

### Integration of Machine Learning and Immune Data Analysis

We develop analytical methods for Tocky and flow cytometry data using machine learning and multidimensional analysis.
These methods are shared broadly to support the development of a robust analytical ecosystem and research infrastructure for dynamic immune profiling.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid path="assets/img/tocky/TockyML_intro.jpg" width="600" height="auto" zoomable=false %}
  </div>
</div>

<p class="caption">
Figure modified from Irie et al., <em>Nature Communications</em> (2025):
<a href="https://www.nature.com/articles/s41467-025-61279-y">Machine learning-assisted decoding of temporal transcriptional dynamics via fluorescent timer</a>.
</p>

---

## Collaboration and Opportunities

We welcome collaborative research in cancer immunology, immunotherapy, flow cytometry, single-cell analysis, and computational approaches to dynamic immune profiling.

We also welcome students and early-career researchers interested in combining experimental biology with quantitative and data-driven analysis.

---

## Contact

<div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">

  <a href="mailto:m.ono@imperial.ac.uk" title="Email">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle-icons-mail.svg" alt="Email" width="50" height="50">
  </a>

  <a href="https://github.com/MonoTockyLab" title="GitHub">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50">
  </a>

  <a href="https://twitter.com/MonoTockyLab" title="Twitter">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" width="50" height="50">
  </a>

  <a href="https://www.linkedin.com/in/masahiro-ono-ab262b132/" title="LinkedIn">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="50" height="50">
  </a>

</div>