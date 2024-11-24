---
layout: page
title: TockyLocus
description: Quantitative Method for Fluorescent Timer Reporters
category: Tocky
importance: 1
img: assets/img/tocky/TockyLocus.png
og_image: https://monotockylab.github.io/assets/img/tocky/TockyLocus.png
---

# TockyLocus: Quantitative Analysis Methods for Flow Cytometric Fluorescent Timer Data

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/TockyLocus_banner.png"  width="650" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

**Author:** Dr. Masahiro Ono  
**Date:** 24 November 2024

### [Link to the TockyLocus Documentation Page](https://monotockylab.github.io/TockyLocus/)

## Introduction: Fluorescent Timer as Experimental Tool and Development of the Tocky Concept

### The potential of Fluorescent Timer proteins

Fluorescent Timer proteins uniquely alter their emission spectra over time, making them powerful tools for monitoring dynamic cellular processes. These proteins are pivotal for understanding the intricate temporal dynamics of cellular events. Despite their potential, analyzing Timer fluorescence data in flow cytometry is often hampered by variability in instrument settings and the lack of standardized data preprocessing methods.

### Tocky: A Breakthrough in Fluorescent Timer Analysis

A significant advancement was made in 2018 when the Ono lab introduced **Tocky**, a novel concept for analyzing Fluorescent Timer data. This approach encompasses data normalization and transformation methods (see [Introduction](https://monotockylab.github.io/TockyPrep/articles/Introduction.html)). However, a computational implementation of this methodology was not yet available.

The breakthrough in the anslysis of Fluorescent Timer data was the introduction of the polar coordinate, or trigonometric transformation of Timer fluorescence data, which produces the key variables: _Timer Angle_ and _Timer Intensity_.

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/Angleconversion.jpg"  width="300" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

However, to effectively use the approach, a dedicated computational tool was required to normalize and transform Timer fluorescence data. To address these challenges, we have recently developed the [**TockyPrep**](https://monotockylab.github.io/TockyPrep/) package. This R package provides a comprehensive suite of tools designed to automate the preprocessing, normalization, and trigonometric transformation of Timer fluorescence data. **TockyPrep** specifically addresses the normalization of immature and mature Timer fluorescence as a critical step for robust downstream analysis.

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/TockyPrep.png"  width="300" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## TockyLocus: The R Package for Quantitative Analysis of Fluorescent Timer Data

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/TockyLocus_logo.jpg"  width="500" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

### Aim of the TockyLocus Package

The aim of the **TockyLocus** package is to standardize quantitative analysis and visualization techniques for flow cytometric Fluorescent Timer data. It focuses on data categorization using Timer Angle data, which represents the temporal maturation dynamics of Timer proteins.

### Features of the TockyLocus Package

**Timer Data Categorization Method**:

- This feature enables quantitative analysis and effective visualization of Timer fluorescence dynamics. Precisely, Timer Angle data is categorized into the five loci. This allows quantitative analysis of cell dynamics across Timer loci, enabling effective visualization and statistical analysis.

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/PlotTockyLocusLegend.png"  width="300" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

**Visualization Tools**:

- The package includes functions to visualize Tocky Locus.

**Statistical Analysis Methods**:

- Dedicated statistical methods are implemented for group-wise comparison of Tocky Locus data.

#### Availability

- **TockyLocus** is freely available for distribution via GitHub:

Link to the repository: [TockyLocus on GitHub](https://github.com/MonoTockyLab/TockyLocus)

## Getting Started with TockyLocus

To begin using **TockyLocus**, install the package from GitHub using the following command:

```R
# Install TockyLocus from GitHub
devtools::install_github("MonoTockyLab/TockyLocus")
```

## 4. Package Documentation

The **TockyLocus** package documentation is available online:

- **Website**: [https://MonoTockyLab.github.io/TockyLocus/](https://MonoTockyLab.github.io/TockyLocus/)

This site includes all the function reference manuals and vignettes (tutorials).

In addition to the HTML manual pages, a PDF manual for the **TockyLocus** package is available. You can find it in the installed package directory under `doc/`, or you can access it directly from [GitHub](https://github.com/MonoTockyLab/TockyLocus/blob/main/inst/doc/TockyLocus_0.1.0.pdf).

<br>

## 5. Copyright, License, and Citation Guidelines

### Copyright

All code and original graphical content within the TockyPrep package, including anime-like characters and logos, are copyrighted by [Masahiro Ono](https://monotockylab.github.io/).

### License

The distribution and modification are governed by the Apache License 2.0, which ensures that all users have the freedom to use and change the software in a way that respects the original authorship. See the [LICENSE](https://github.com/MonoTockyLab/TockyLocus/blob/main/LICENSE) file for more information.

### Citing TockyLocus

If you use **TockyLocus** in your research, please cite:

Masahiro Ono (2024). _TockyLocus: Quantitative Analysis Methods for Flow Cytometric Fluorescent Timer Data._ arXiv:2411.09386 [q-bio.QM]. Available at:[https://arxiv.org/abs/2411.04111](https://arxiv.org/abs/2411.09386).

#### BibTeX Entry

```bibtex
@article{ono2024TockyLocus,
    title={TockyLocus: Quantitative Analysis Methods for Flow Cytometric Fluorescent Timer Data},
    author={Masahiro Ono},
    year={2024},
    journal={arXiv:2411.09386 [q-bio.QM]},
    url={https://arxiv.org/abs/2411.09386},
}
```

#### Why Citation Is Important

Citing software you've used is crucial for acknowledging contributions and ensuring reproducibility, which are critical for scientific progress.

- Giving credit to the developers and researchers who have contributed to the tools you utilize respects and acknowledges their intellectual contributions.
- Proper citations allow other researchers to access the same tools and versions, thus replicating and verifying your scientific results.

Citations are integral to the scientific ecosystem; they help trace the evolution of ideas and enable others to build upon existing research.

We kindly remind our users that **citing software is as important as citing academic articles in maintaining the integrity of the scientific record.**

#### Further Resources

For additional guidance on citation practices and maintaining research integrity, we recommend visiting the [Committee on Publication Ethics (COPE)](https://publicationethics.org/), which offers valuable resources and support for adhering to ethical practices in scholarly publishing.

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/TockyLocus_logo.jpg"  width="500" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
