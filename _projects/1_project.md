---
layout: page
title: Tocky Publication 2018 (1)
description: The original report on Tocky from the Ono Lab
img: assets/img/tocky/FlowTockyModel.jpg
importance: 1
category: primary research
related_publications: true
---
#### In 2013, Masahiro Ono launched his groundbreaking project to develop a novel methodology for analyzing the temporal dynamics of T-cell activities using a Fluorescent Timer protein—**T**imer-**o**f-**c**ell-**k**inetics-and-activit**y** (**Tocky**).

This culminated in a [seminal publication](https://rupress.org/jcb/article/217/8/2931/39442/A-timer-for-analyzing-temporally-dynamic-changes) in 2018 {% cite RN55 %}.

---
#### Discovery of Nr4a3 as a Reliable Reporter Gene for Cognate Antigen Signaling

Upon establishing my laboratory at University College London in **2013**, I embarked on developing an entirely new approach to comprehend T-cell dynamics in vivo.

Through Canonical Correspondence Analysis, Nr4a3 emerged as the gene with the highest correlation to T-cell receptor (TCR) signaled T-cells in both the thymus and periphery.

Crucially, Nr4a3 is not expressed in resting T-cells or B-cells. However, antigen signaling (specifically, cognate antigen signaling) triggers Nr4a3 expression in both T-cells and B-cells.

---
#### Development of Nr4a3-Timer Reporter Mice (Nr4a3-Tocky)

The inception of the Timer method led to a dedicated project in my isolated lab—I forged ahead solo, without hiring any staff, to maximize time and resources for developing a new animal model.

The development of Nr4a3-Timer reporter mice, *Nr4a3-Tocky*, utilized the Bacterial Artificial Chromosome approach for several reasons, which will be detailed in a future post. My extensive experience with transgenic mouse strains in Japan facilitated the successful development of Nr4a3-Timer mice in 2013.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tocky/bacnr4a3.jpg" title="Nr4a3-Tocky Construct" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

In 2014, I expanded the transgenic colony by hiring a research technician, followed by the recruitment of a post-doc in 2015.

Upon TCR stimulation, Nr4a3-Tocky T cells exhibit initial timer blue fluorescence within the first hours, progressively maturing into red fluorescence. This transition signifies protein maturation, drawing a diagonal line between the Blue and Red axes.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/gif/flowtimer.gif" width="250" height="auto" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

--- 
#### Rejection and Resilience 

Despite a smooth start, we encountered significant obstacles—neither editors nor reviewers were able to recognize the importance of the Timer system. Interestingly, many claimed that the Timer approach was _"not novel."_

### Now, I take pride in the fact that our paper was rejected nearly 20 times, which is a robust testimony for the true novelty of the Tocky approach. 

I should accurately count the exact number and compile their comments for future reference.

--- 
#### Development of Novel Tocky Data Analysis Method

This challenge prompted my second innovation: developing a novel, data-oriented analysis method for analyzing Timer fluorescence data.

As demonstrated in the gif above, Timer fluorescence data are continuous, indicating that the traditional gating approach cannot fully leverage the Timer's capabilities. A data-oriented analysis was crucial. Thus, to quantitatively analyze Timer fluorescence data, I devised a novel trigonometric data transformation (Timer Angle) approach. This enables seamless analysis of T-cell dynamics from newly induced TCR signals (the Timer New locus) to the status of T-cells that have experienced TCR signaling and been removed from stimulation (the Arrested locus).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tocky/FlowTockyModel.jpg" width="250" height="auto" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

Tocky represents a transformative technology for understanding the immune system by tracking T-cell activity over time. Employing a color-changing protein, this method has shed light on the pathway of T-cell activation and