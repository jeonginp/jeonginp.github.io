---
layout: individual_work
title: Lecture Review Analysis with LSTM
subtitle: Classifying university lecture reviews by sentiment and assignment load
slug: /projects/lecture-review-analysis-with-lstm
permalink: /projects/lecture-review-analysis-with-lstm/
date: Mar 2022 - Jun 2022
presentation: /assets/img/projects/LSTM.pdf
---

### Overview

Students rely on lecture reviews to choose courses, but reviews are hard to search by criteria such as workload. This project classified reviews on two tasks:

1. **Sentiment**: positive or negative
2. **Assignment load**: *Little*, *Normal*, or *Too Much*

### Approach

- **Data**: Crawled lecture reviews from Everytime (about 400 reviews were accessible)
- **Preprocessing**: Kept Korean and English text, encoded words by frequency, removed rare words, and padded sequences
- **Labels**: Star ratings (1–5) for sentiment; assignment level labeled from review text
- **Model**: Two **LSTM** classifiers, one per task

### Results

| Task | Accuracy |
|------|----------|
| Sentiment (binary) | **0.96** |
| Assignment load (3-class) | 0.61 |

Assignment-load classification was limited by the small dataset and imbalanced classes. More data, and features such as exam frequency or difficulty, would be the next step toward course recommendation.
