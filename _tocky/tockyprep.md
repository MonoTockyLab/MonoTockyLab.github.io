---
layout: page
title: TockyPrep
description: Data Preprocessing for Fluorescent Timer Reporters Using the Timer-Of-Cell-Kinetics-of-activitY (Tocky)
category: Tocky
importance: 1
img: assets/img/tocky/TockyPrep.png
og_image: https://monotockylab.github.io/assets/img/tocky/TockyPrep.png
---

# TockyPrep: Data Preprocessing Methods for Fluorescent Timer Reporter Data

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/tockyprepbanner.jpg"  width="500" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

**Author:** Dr. Masahiro Ono  
**Date:** 24 November 2024

### [Link to the TockyPrep Documentation Page](https://monotockylab.github.io/TockyPrep/)

## Introduction - The R Package for Fluorescent Timer Data Analysis

### The potential of Fluorescent Timer proteins

Fluorescent Timer proteins uniquely alter their emission spectra over time, making them powerful tools for monitoring dynamic cellular processes. These proteins are pivotal for understanding the intricate temporal dynamics of cellular events. Despite their potential, analyzing Timer fluorescence data in flow cytometry is often hampered by variability in instrument settings and the lack of standardized data preprocessing methods.

### A Breakthrough in Fluorescent Timer Analysis

A significant advancement was made in 2018 when the Ono lab introduced **Tocky**, a novel concept for analyzing Fluorescent Timer data. This approach encompasses data normalization and transformation methods (see [Introduction of the TockyPrep Package](https://monotockylab.github.io/TockyPrep/articles/Introduction.html)). However, a computational implementation of this methodology was not yet available.

### Aim of the TockyPrep Package

To address these challenges, the **TockyPrep** package has been developed. This R package provides a comprehensive suite of tools designed to automate the preprocessing, normalization, and trigonometric transformation of Timer fluorescence data, facilitating more accurate and reproducible analyses.

The **TockyPrep** package aims to standardize the analysis of Timer fluorescence to improve reproducibility and accuracy across various experimental setups. It specifically addresses the normalization of immature and mature Timer fluorescence as a critical step for robust analysis. This approach is central to understanding the maturation dynamics of Timer proteins, and is implemented using advanced trigonometric transformations.

## The **TockyPrep** R Package

The **TockyPrep** R package provides data preprocessing methods for Fluorescent Timer data for analyzing temporal dynamics in cellular activities using flow cytometry.

#### Key Features of **TockyPrep**

Specifically, the **TockyPrep** package provides essential data preprocessing methods for analyzing Fluorescent Timer data:

1. **Timer Fluorescence Normalization**:

   - This feature corrects for any instrumental biases that may affect the fluorescence readings, ensuring that the measurements of Timer Blue and Timer Red fluorescence are accurate and comparable across different experimental setups. This normalization is crucial for accurate assessment of the maturation state of the Timer protein, as it adjusts for variability in the signal intensity between different cells and samples.

2. **Timer Fluorescence Thresholding**:

   - To enhance the reliability of Timer data analysis, this method filters out background noise by setting thresholds that distinguish between Timer-positive and Timer-negative cells. This is vital for focusing the analysis on cells that express the Timer protein, thereby eliminating data points that could distort the interpretation of temporal dynamics.

3. **Trigonometric Transformation**:

   - This transformation computes two new metrics, Timer Angle and Timer Intensity, from the normalized fluorescence data. These metrics are pivotal for quantifying the dynamics of Timer protein maturation within cells, providing insights into the timing and progression of cellular events.

4. **Sample Definition**:

   - **TockyPrep** aids in organizing and labeling flow cytometry data files for streamlined analysis. It automates the identification of sample groups and control samples, facilitating more efficient subsequent data analyses.

5. **Visualization Tools**:
   - The package includes functions to visualize both raw and transformed Timer fluorescence data. These tools allow users to generate plots that illustrate the distribution of Timer fluorescence within samples or to track the transformation results, such as plotting Timer Angle versus Timer Intensity. These visualizations are crucial for preliminary data assessment, enabling researchers to quickly identify trends or anomalies that warrant further investigation.

#### Availability

- **TockyPrep** is freely available for distribution via GitHub:

Link to the repository: [TockyPrep on GitHub](https://github.com/MonoTockyLab/TockyPrep)

#### The scehametic figure below provides an overview on the workflows within TockyPrep.

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/tockyprepoverview.jpg"  width="600" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## Getting Started with TockyPrep

To begin using **TockyPrep**, install the package from GitHub using the following command:

```R
# Install TockyPrep from GitHub
devtools::install_github("MonoTockyLab/TockyPrep")
```

## 4. Package Documentation

The **TockyPrep** package documentation is available online:

- **Website**: [https://MonoTockyLab.github.io/TockyPrep/](https://MonoTockyLab.github.io/TockyPrep/)

This site includes all the function reference manuals and vignettes (tutorials).

In addition to the HTML manual pages, a PDF manual for the **TockyPrep** package is available. You can find it in the installed package directory under `doc/`, or you can access it directly from [GitHub](https://github.com/MonoTockyLab/TockyPrep/blob/main/inst/doc/TockyPrep_0.1.1.pdf).

<br>

## 5. Copyright, License, and Citation Guidelines

### Copyright

All code and original graphical content within the TockyPrep package, including anime-like characters and logos, are copyrighted by [Masahiro Ono](https://monotockylab.github.io/).

### License

The distribution and modification are governed by the Apache License 2.0, which ensures that all users have the freedom to use and change the software in a way that respects the original authorship. See the [LICENSE](https://github.com/MonoTockyLab/TockyPrep/blob/main/LICENSE) file for more information.

### Citing TockyPrep

If you use **TockyPrep** in your research, please cite:

Masahiro Ono (2024). _TockyPrep: Data Preprocessing Methods for Flow Cytometric Fluorescent Timer Analysis._ arXiv:2411.04111 [q-bio.QM]. Available at:[https://arxiv.org/abs/2411.04111](https://arxiv.org/abs/2411.04111).

#### BibTeX Entry

```bibtex
@article{ono2024TockyPrep,
    title={TockyPrep: Data Preprocessing Methods for Flow Cytometric Fluorescent Timer Analysis},
    author={Masahiro Ono},
    year={2024},
    journal={arXiv:2411.04111 [q-bio.QM]},
    url={https://arxiv.org/abs/2411.04111},
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
        {% include figure.liquid loading="eager" path="assets/img/tocky/Tocky_sapling.jpg"  width="300" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/TockyPrep_logo.jpg"  width="300" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
