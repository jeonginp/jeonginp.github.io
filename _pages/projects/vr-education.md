---
layout: individual_work
title: VR-Based Geometry Learning Application
subtitle: A Vision Pro–based spatial reasoning learning tool for elementary education
slug: /projects/vr-education
permalink: /projects/vr-education/
date: Dec 2024 - May 2025
role: Principal Investigator · Funded by an independently secured USD 15,000 grant
---

### Overview

Elementary geometry teaches spatial reasoning with physical stacking cubes, which are hard to scale and offer no feedback on projections. This project built an immersive **Vision Pro** application that teaches 3D geometry through interactive cube manipulation, projection-based visualization, and curriculum-aligned problem solving.

**Target users**

- **Elementary students** needing hands-on spatial reasoning practice
- **Teachers** seeking curriculum-aligned digital tools that extend traditional block-based activities

### My Role

- **Principal Investigator**: Proposed the project and secured a **USD 15,000 grant** to fund it
- Led system design, development, and the teacher evaluation

### Approach

- Built with **Unity 6** and the **visionOS toolkit**
- Hand-tracking interactions for grabbing, snapping, grouping, and rotating cubes
- Projection UI showing **top / front / side** views of the current structure
- In-app problem sets sourced from elementary textbooks

### Demo

<div class="video-container" style="position: relative; width: 100%; aspect-ratio: 16 / 9; margin: 20px 0;">
  <iframe src="https://www.youtube.com/embed/qkqCtI9GuBA" title="VR Geometry Learning Demo" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 8px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Results

Semi-structured interviews with **4 elementary school teachers** (ratings on a 5-point scale).

<style>
.eval-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0; }
@media (max-width: 600px) { .eval-grid { grid-template-columns: 1fr; } }
.eval-card { background: #fafafa; border: 1px solid #eee; padding: 16px; }
.eval-card h4 { margin: 0 0 12px 0; font-size: 0.95em; color: #333; }
.eval-bar { display: flex; align-items: center; margin: 8px 0; font-size: 0.8em; }
.eval-label { width: 80px; color: #666; flex-shrink: 0; }
.eval-track { flex: 1; height: 12px; background: #e0e0e0; position: relative; }
.eval-fill { height: 100%; background: linear-gradient(90deg, #f5a623, #e88e0c); }
.eval-score { width: 30px; text-align: right; color: #666; margin-left: 8px; }
</style>

<div class="eval-grid">
  <div class="eval-card">
    <h4>Interaction</h4>
    <div class="eval-bar"><span class="eval-label">Manipulation</span><div class="eval-track"><div class="eval-fill" style="width:90%"></div></div><span class="eval-score">4.5</span></div>
    <div class="eval-bar"><span class="eval-label">Combining</span><div class="eval-track"><div class="eval-fill" style="width:96%"></div></div><span class="eval-score">4.8</span></div>
    <div class="eval-bar"><span class="eval-label">Rotation</span><div class="eval-track"><div class="eval-fill" style="width:94%"></div></div><span class="eval-score">4.7</span></div>
  </div>
  <div class="eval-card">
    <h4>Problem-Solving UI</h4>
    <div class="eval-bar"><span class="eval-label">Difficulty</span><div class="eval-track"><div class="eval-fill" style="width:86%"></div></div><span class="eval-score">4.3</span></div>
    <div class="eval-bar"><span class="eval-label">Variety</span><div class="eval-track"><div class="eval-fill" style="width:80%"></div></div><span class="eval-score">4.0</span></div>
    <div class="eval-bar"><span class="eval-label">Validation</span><div class="eval-track"><div class="eval-fill" style="width:88%"></div></div><span class="eval-score">4.4</span></div>
  </div>
  <div class="eval-card">
    <h4>Projection UI</h4>
    <div class="eval-bar"><span class="eval-label">Accuracy</span><div class="eval-track"><div class="eval-fill" style="width:94%"></div></div><span class="eval-score">4.7</span></div>
    <div class="eval-bar"><span class="eval-label">Relevance</span><div class="eval-track"><div class="eval-fill" style="width:92%"></div></div><span class="eval-score">4.6</span></div>
    <div class="eval-bar"><span class="eval-label">Usefulness</span><div class="eval-track"><div class="eval-fill" style="width:96%"></div></div><span class="eval-score">4.8</span></div>
  </div>
  <div class="eval-card">
    <h4>Classroom Feasibility</h4>
    <div style="font-size: 0.85em; color: #555; line-height: 1.5;">
      <div>✓ All 4 teachers rated positively for real classroom use</div>
      <div>✓ Aligns with Korea's 2022 curriculum & AIDT initiatives</div>
      <div>✓ Enables quick adoption and extended learning</div>
    </div>
  </div>
</div>

The result is a teacher-validated, classroom-ready alternative to traditional stacking-cube activities.
