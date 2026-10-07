---
layout: individual_work
title: Question-Answer-and-Connect
subtitle: A system using LLMs to resolve question-answer matching and reduce information overload in large group chats.
slug: /projects/question-answer-and-connect
permalink: /projects/question-answer-and-connect/
date: Mar 2024 - June 2024
github: https://github.com/ZzeongB/Question-Answer-and-Connect
presentation: /assets/img/projects/QuAC.pdf
---

## Project Overview

The "Question, Answer, and Connect" project addresses two major issues commonly encountered in large group chat settings:
1. **Information Overload**: With a large volume of messages, essential information often gets buried, making it difficult for users to find relevant details.
2. **Repetitive Questions**: Users frequently ask similar questions, leading to redundant answers and wasted time for participants.

Our solution offers an intelligent response system that can **automatically identify and connect questions with relevant answers** within a chat. This system is designed to reduce repetitive inquiries and facilitate easy access to valuable information, making group communication more efficient.


<br>

## Target Users and Personas

The primary users of this project are members of large group chats, such as university students in online courses, interns in corporate environments, and new employees in training programs. We developed personas to better understand the needs of these users:

1. **Students**: University students participating in large online courses often struggle to find specific answers amidst general discussions. This system helps them quickly locate answers to questions related to course logistics and assignments.

2. **Teaching Assistants (TAs) and Instructors**: These users must handle a high volume of questions, many of which are repetitive. Our system helps by reducing redundant inquiries, allowing TAs and instructors to focus on more critical or complex questions, which enhances the learning environment's efficiency.


<br>

## Implementation

Our solution utilizes a **React-based web interface** connected to OpenAI's ChatGPT-4 API. The process involves:
1. **Question Identification**: The system differentiates between questions and answers.
2. **Keyword Matching**: By analyzing keywords, the system links new questions to existing answers when possible.
3. **Answer Retrieval**: If a relevant answer exists, the system presents it; otherwise, users receive prompts to either search the chat history or await a new answer.

This architecture allows users to access specific information efficiently and ensures that important answers are more accessible to everyone in the group.

![Diagram](../../assets/img/projects/quac/diagram.png)

<br>

## Prototyping and Design

During the brainstorming phase, we explored various ways to structure and present responses within a large group chat. Using Miro for ideation and prototyping, we tested multiple design approaches and refined our final model based on user feedback. Key design features included:
- **Simplified Keyword-Based Search**: Users can search for keywords to locate relevant messages easily.
- **Structured Interface**: We designed an organized layout for question-answer interactions to ensure clarity and readability.

<p float="left">
    <img src="../../assets/img/projects/quac/demo1.png" width="30%" />
    <img src="../../assets/img/projects/quac/demo2.png" width="30%" />
    <img src="../../assets/img/projects/quac/demo3.png" width="30%" />
</p>


<br>

## Evaluation

To evaluate the system, we conducted qualitative user testing with 8 participants, focusing on:
1. **Think Aloud Protocol**: Users vocalized their thoughts while navigating the system, helping us identify usability improvements.
2. **Constructive Interaction**: Users worked in pairs, engaging with each other while using the system. This method allowed us to observe collaborative interactions and evaluate system efficiency.

**Results**:
- Users appreciated the system's ability to retrieve previous answers based on keywords.
- Some participants suggested refining keyword matching to capture a broader range of queries.
- The feedback highlighted a desire for more accurate matches for complex questions.


<br>

## Conclusion

The "Question, Answer, and Connect" project provides a practical solution to the challenges of managing information in large group chats. By leveraging an AI-based response system, it simplifies the process of retrieving relevant answers, reduces the frequency of repetitive questions, and enhances overall communication efficiency. This project has the potential to be expanded with improved keyword matching and broader integration into various group chat platforms, ultimately helping users to save time and streamline information sharing in large, collaborative environments.