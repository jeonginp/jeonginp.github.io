---
layout: individual_work
title: Ko-Radiology-GPT
subtitle: A Korean language model for real-time Q&A on chest X-ray radiology reports
slug: /projects/ko-radiology-gpt/
permalink: /projects/ko-radiology-gpt/
date: Mar 2024 - Jun 2024
role: Co-Developer · Data Analysis
github: https://github.com/ZzeongB/Ko-Radiology-GPT
---

### Overview

Radiology reports are written for clinicians and are hard for patients to read, and Korean resources in this domain are scarce. **Ko-Radiology-GPT** lets non-experts ask questions about a chest X-ray report in Korean and get clear answers, supporting **summarization**, **information extraction**, **paraphrasing**, and **acronym expansion**.

### My Role

- **Data collection**: Sourced the additional Korean medical corpora from AI Hub
- **QA generation**: Built the question–answer pairs used for fine-tuning
- **Evaluation**: Co-defined the four criteria and evaluation prompts, and analyzed results against baselines
- **Demo & manual**: Built the conversational demo interface and wrote the user manual

### Approach

**Data**

- **MIMIC-CXR** reports, translated into Korean (no large Korean radiology dataset was available)
- About **4,000** radiology-related samples from **AI Hub** Korean medical corpora
- Question–answer pairs generated with **GPT-3.5-turbo** for each task, stored as JSONL

**Model**

- Fine-tuned **Llama2-7B-chat** with **LoRA** and **8-bit quantization** so training and inference fit on a single GPU (Colab A100)
- **Gradio** interface for interactive Q&A

<img src="/assets/img/projects/kogpt/diagram.png" alt="Training pipeline" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />

### Results

Responses were scored (0–4) on **accuracy, conciseness, consistency, and understandability**. Ko-Radiology-GPT outperformed both the base **Llama2** and the English medical model **Hippo** on all four criteria, e.g. accuracy **3.21** vs. about 2.5 (Llama2) and 1.4 (Hippo).

<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; margin: 20px 0;">
  <img src="/assets/img/projects/kogpt/result.png" alt="Evaluation results" style="flex: 1.62 1 260px; min-width: 0; height: auto;" />
  <img src="/assets/img/projects/demo2.png" alt="Demo" style="flex: 1.28 1 220px; min-width: 0; height: auto;" />
</div>
