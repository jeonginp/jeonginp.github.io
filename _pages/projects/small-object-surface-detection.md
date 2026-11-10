---
layout: individual_work
title: Small Object Surface Detection for Mobile AR
subtitle: A lightweight, depth-only pipeline for detecting small planar surfaces in augmented reality
slug: /projects/small-object-surface-detection
permalink: /projects/small-object-surface-detection/
date: Nov 2025 - Dec 2025
---

*A lightweight pipeline for object-level geometry recovery on mobile AR devices*

### Motivation

Current AR systems rely on global RANSAC-based plane detection, which captures large surfaces (floors, walls, desks) but **misses small object-level planes** like book tops, box lids, and monitor stands.

<img src="/assets/img/projects/sosd/motivation.png" alt="Motivation Examples" style="width: 100%; margin: 20px 0;" />

### Method

Our pipeline consists of five stages:

<img src="/assets/img/projects/sosd/method.png" alt="Pipeline Overview" style="width: 100%; margin: 20px 0;" />

1. **Raw depth acquisition** from Meta Quest 3 stereo sensors
2. **World point cloud reconstruction**
3. **Dominant plane removal** (floors, walls, desks)
4. **Object-aware DBSCAN clustering**
5. **Per-cluster RANSAC** with multi-scale thresholds

### Key Insight

By isolating object-level clusters *before* plane fitting, small planes become **locally dominant** within their clusters—making them detectable without semantics, RGB, or neural networks.

<img src="/assets/img/projects/sosd/cluster.png" alt="Clustering Results" style="width: 100%; margin: 20px 0;" />

### Evaluation

| Method | Plane Recall (Scene 1) | Plane Recall (Scene 2) | Runtime |
|--------|------------------------|------------------------|---------|
| Baseline (Global RANSAC) | ~0.14 | ~0.10 | 0.39–0.63s |
| Ours (Single-scale) | 0.71 | 0.71 | 0.54–0.99s |
| Ours (Multi-scale) | **0.79** | **0.86** | 0.75–0.92s |

<img src="/assets/img/projects/sosd/qualitative_result.png" alt="Qualitative Results" style="width: 100%; margin: 20px 0;" />

### Conclusion

A **depth-only, geometry-only** approach can effectively recover small-object surfaces for mobile AR—without dense reconstruction or learned models. This enables richer object-centric interactions on commodity hardware.
