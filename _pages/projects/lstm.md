---
layout: individual_work
title: Lecture Review Analysis with LSTM
slug: /projects/lecture-review-analysis-with-lstm
permalink: /projects/lecture-review-analysis-with-lstm/
date: Mar 2022 - Jun 2022
presentation: ../../assets/img/projects/LSTM.pdf
---

## Motivation & Background

This project was motivated by the need to efficiently search and classify lecture reviews based on specific criteria, such as the amount of assignments or exams involved. Since lecture reviews provide valuable insights from students, this project aims to leverage these reviews to offer recommendations and categorize lectures based on their characteristics.

Key questions include:
1. How can lectures be classified?
2. How can students receive recommendations for courses that suit their needs?

<br>

## Related Works

This project builds on previous research, such as:
- Sentiment Analysis: Using word vectors and sentiment analysis for movie reviews (similar to IMDB review analysis).
- Lecture Evaluation Sentiment Analysis: Studies focusing on analyzing lecture evaluations using word embeddings and neural networks, providing a framework for this project’s approach to lecture reviews.

<br>

## Problem Definition

The project focuses on two main goals:
1. **Sentiment Classification**: Determine whether a review is positive or negative.
2. **Assignment Level Classification**: Classify reviews based on the perceived amount of assignments in the course, categorized as "Little," "Normal," or "Too Much."


<br>

## Solving Approach

1. **Data Collection**: \\
Lecture reviews were crawled from popular platforms (e.g., Everytime).
A multi-step process involved:
  - Gathering lecture links.
  - Crawling each lecture’s review section.
  - Extracting text data for analysis.


2. **Data Preprocessing**: 
- Filtering: Kept only Korean and English text, removing unnecessary symbols.
- Text Encoding: Converted words into integer form based on frequency.
- Data Cleaning: Removed rare words, applied padding to ensure uniform length across samples.

3. **Labeling**: \\
Reviews were labeled with stars (1 to 5) for sentiment analysis and categorized into assignment levels ("Little," "Normal," "Too Much") based on the text content.

4. **Model Design**: \\
**LSTM (Long Short-Term Memory)** was chosen for text classification due to its ability to retain context over sequential data.
Two separate models were designed:
      - Binary Sentiment Classification: Positive or negative review.
      - Assignment Level Classification: Predicts the amount of assignments required for the course.


<br>

## Evaluation

The models were evaluated based on accuracy:
- Sentiment Classification achieved high accuracy (~0.9588), indicating effective differentiation between positive and negative reviews.
- Assignment Classification had moderate accuracy (~0.6082), suggesting challenges in categorizing assignment levels accurately.

**Examples**:
- The model provided specific examples of classification outputs for both tasks, demonstrating the performance across diverse reviews.


<br>

## Lessons Learned & Conclusion

1. **Challenges with Data Size**: The dataset contained over 8,000 lecture reviews, but only around 400 were accessible, limiting the model’s ability to generalize.
2. **Accuracy Differences**: While sentiment classification achieved high accuracy, assignment classification was less effective, possibly due to imbalanced data across categories.

**Future Directions**:
- Improving data quantity and quality, potentially by gathering more reviews, would enhance model performance.
- Further research could expand the model to recommend lectures based on various features beyond assignments, such as exam frequency or lecture difficulty.
