---
layout: page
title: GatingTree
description: Pathfinding Analysis of Group-Specific Effects in Cytometry Data
category: General Flow Cytometric Tools 
importance: 1
img: assets/img/tocky/GatingTreeBanner1.jpg
og_image: https://monotockylab.github.io/assets/img/tocky/GatingTreeBanner1.jpg
---


# GatingTree: R Package for Pathfinding Analysis of Group-Specific Effects in Cytometry Data 

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/GatingTreeBanner1.jpg"  width="500" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

**Author:** Dr. Masahiro Ono  
**Date:** 24 November 2024

### [Link to the GatingTree Documentation Page](https://monotockylab.github.io/GatingTree/)


<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/MonoLab.jpg"  width="300" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/GatingTree_logo.jpg"  width="300" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>


## Table of Contents

1. [Introduction](#1-introduction)
2. [Installation](#2-installation)
3. [Vignettes](#3-vignettes)
4. [Package Documentation](#4-package-documentation)
5. [Copyright, License, and Citation Guidelines](#5-copyright-license-and-citation-guidelines)

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/GatingTreeBanner1.jpg"  width="500" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>


## 1. Introduction

**GatingTree** is an R package designed to enhance the analysis of group-specific effects in cytometry data.

#### Current Challenges
Advancements in cytometry technologies allow for the simultaneous analysis of numerous markers. However, they also introduce challenges in the data-oriented analysis of biological effects, such as treatment effects, within high-dimensional data.

Traditional methods such as manual gating are insufficient for these demands. While dimensional reduction methods (e.g., UMAP) with or without clustering are increasingly common, they struggle with reproducibility across experiments. Moreover, the cell clusters they identify may not translate effectively into practical gating strategies for laboratory use, further exacerbating the **reproducibility crisis in biological and medical research**.

#### Solutions GatingTree Offers

**GatingTree** offers a distinct approach by **not relying on dimensional reduction**. Instead, it explores the multidimensional marker space through **pathfinding analysis to pinpoint group-specific features**. By deliberately avoiding multidimensional analyses such as PCA and UMAP, as well as clustering algorithms, GatingTree provides straightforward solutions that can be directly applied in downstream applications such as flow cytometric sorting of target populations.

<div class="row mt-3" style="text-align: center;">
     <div class="col-sm mt-3 mt-md-0" style="display: inline-block;">
        {% include figure.liquid loading="eager" path="assets/img/tocky/GatingTreeBanner2.jpg"  width="500" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## 2. Installation

To install **GatingTree**, first ensure that you have the `devtools` package installed:

```R
install.packages("devtools")
```

Then, install **GatingTree** from GitHub:

```R
library(devtools)
install_github("MonoTockyLab/GatingTree", dependencies = TRUE)
```

## 3. Vignettes

The **GatingTree** package includes vignettes to assist users in efficiently applying GatingTree to cytometry data.

- **[Basic Workflow](https://MonoTockyLab.github.io/GatingTree/articles/GatingTree_Workflow.html)**: This vignette provides users with a step-by-step guide to processing and transforming data, applying GatingTree analysis, and visualizing results.

- **[DefineNegatives](https://MonoTockyLab.github.io/GatingTree/articles/DefineNegatives.html)**: This vignette demonstrates how the function `DefineNegatives` can be used to determine positive/negative thresholds for markers, which is a critical preprocessing step for GatingTree analysis.

- **[Using CSV File Inputs](https://MonoTockyLab.github.io/GatingTree/articles/UsingCSVfileInputs.html)**: This vignette shows how to import cytometry sample data as CSV files and initialize a `FlowObject`.

*Note: You can access the vignettes within R using the `browseVignettes("GatingTree")` command after installing the package.*

## 4. Package Documentation

The **GatingTree** package documentation is available online:

- **Website**: [https://MonoTockyLab.github.io/GatingTree/](https://MonoTockyLab.github.io/GatingTree/)

This site includes all the function reference manuals and vignettes (tutorials).

In addition to the HTML manual pages, a PDF manual for the **GatingTree** package is available. You can find it in the installed package directory under `doc/`, or you can access it directly from [GitHub](https://github.com/MonoTockyLab/GatingTree/blob/main/inst/doc/GatingTree_0.1.0.pdf).

<br>

## 5. Copyright, License, and Citation Guidelines

### Copyright

All code and original graphical content within the GatingTree package, including anime-like characters and logos, are copyrighted by [Masahiro Ono](https://monotockylab.github.io/). 

### License

The distribution and modification are governed by the Apache License 2.0, which ensures that all users have the freedom to use and change the software in a way that respects the original authorship. See the [LICENSE](https://github.com/MonoTockyLab/GatingTree/blob/main/LICENSE) file for more information.

### Citing GatingTree

If you use **GatingTree** in your research, please cite:

Masahiro Ono (2024). *GatingTree: Pathfinding Analysis of Group-Specific Effects in Cytometry Data.* arXiv:2411.00129 [q-bio.QM]. Available at:[https://arxiv.org/abs/2411.00129](https://arxiv.org/abs/2411.00129).

#### BibTeX Entry

```bibtex
@article{ono2024gatingtree,
    title={GatingTree: Pathfinding Analysis of Group-Specific Effects in Cytometry Data},
    author={Masahiro Ono},
    year={2024},
    journal={arXiv:2411.00129 [q-bio.QM]},
    url={https://arxiv.org/abs/2411.00129},
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
        {% include figure.liquid loading="eager" path="assets/img/tocky/GatingTreeBanner1.jpg"  width="500" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
