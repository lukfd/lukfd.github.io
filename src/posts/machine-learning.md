---
date: "2025-05-04"
draft: false
title: "Machine Learning: My Personal Guide"
description: "A personal guide to machine learning, covering key concepts, tools, and resources."
tags: ["machine learning", "ai", "artificial intelligence"]
---

# Machine Learning: My Personal Guide

I am closing the deal. In a week I will have my final Machine Learning exam. So I thought, what better way to prepare than to write a blog post about it? This is my personal guide to machine learning, covering the key concepts, tools, and resources that have helped me along the way.

For the final exam, I have drawn a graph to condense the major topics that we have covered in class.

![Machine Learning Notes](/photos/blog/machine_learning_notes.jpg)

# Basics

There is a heirarchy of terms:

1. **Artificial Intelligence (AI)**: The broadest term, encompassing any technique that enables computers to mimic human behavior.
2. **Machine Learning (ML)**: A subset of AI that focuses on the development of algorithms that allow computers to learn from and make predictions based on data.
3. **Deep Learning (DL)**: A subset of ML that uses neural networks with many layers (deep networks) to analyze various factors of data.

## Terms

**Feature**: An individual measurable property or characteristic of a phenomenon being observed. For example, in a dataset of houses, features could include the number of bedrooms, square footage, and location.

**Label**: The output variable that the model is trying to predict. In supervised learning, the label is known for the training data.

**Independent/Dependent Variables (X, y)**: In a dataset, the dependent variable is the output or label that we are trying to predict, while independent variables (or features) are the inputs used to make that prediction.

**Loss function**: A function that measures how well the model's predictions match the actual labels. The goal of training is to minimize this loss function.
An example of a loss function is Mean Squared Error (MSE), which calculates the average squared difference between predicted and actual values.

**Optimizer**: An algorithm used to adjust the weights of the model during training to minimize the loss function. Common optimizers include Gradient Descent (GD).

**Overfitting**: A modeling error that occurs when a model learns the training data too well, capturing noise and outliers instead of the underlying pattern. This leads to poor performance on unseen data.
Solutions to overfitting include:
- Using simpler models (e.g., linear regression instead of polynomial regression).
- Regularization techniques (e.g., L1 or L2 regularization).
- Noise reduction techniques (e.g., removing outliers or using robust statistics).

**Underfitting**: A modeling error that occurs when a model is too simple to capture the underlying pattern in the data. This leads to poor performance on both training and unseen data.
Solutions to underfitting include:
- Using more complex models (e.g., polynomial regression instead of linear regression).
- Better feature selection (e.g., adding interaction terms or polynomial features).
- Reducing constraints.

# Data Preprocessing

For the data preparation, we have discussed the normalization, standardization, and 

# Feature Selection
Feature selection is the process of selecting a subset of relevant features for use in model construction. It helps improve model performance and reduce overfitting.

- Backward elimination: Start with all features and remove the least significant ones iteratively.
- Forward selection: Start with no features and add the most significant ones iteratively.
- Stepwise selection: A combination of backward elimination and forward selection, adding or removing features based on significance.
- All subsets selection: Evaluate all possible combinations of features and select the best one based on a chosen criterion.

# Regularization
Regularization is a technique used to prevent overfitting by adding a penalty term to the loss function. It discourages complex models that fit the training data too closely.
- `L1` regularization (**Lasso**): Adds the absolute value of the coefficients as a penalty term to the loss function.
- `L2` regularization (**Ridge**): Adds the square of the coefficients as a penalty term to the loss function.

# Things I understood later

Before moving on to learn the models.

I did not understand:
- Training error is related to the variance of the model.
- Testing error is related to the bias of the model.

Just... why?

Also, confusion matrix.

- Recall: The ratio of true positive predictions to the total actual positives.
- Precision: The ratio of true positive predictions to the total predicted positives.
- F1 score: The harmonic mean of precision and recall.



