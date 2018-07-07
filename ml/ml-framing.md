# Framing

Course link: https://developers.google.com/machine-learning/crash-course/framing/ml-terminology

## Supervised Learning

> ML systems learn how to combine input to produce useful predictions on never-before-seen data.

## Features and Labels

### Labels (y)

是我們想要 predicting 的事物，也可認為是 the y variable in simple linear regression。

### Features (x)

我們輸入的變數，可視為 x，以找垃圾郵件為例 (spam detector example)，Features 可以是:

* words in the email text
* sender's address
* time of day the email was sent
* email contains the phrase "one weird trick."

### Model

> A model defines the relationship between features and label.
> Training means creating or learning the model. 
> Inference means applying the trained model to unlabeled examples.

model 表現了 features and label 之間的關係，Training 就是在找關係間的學習行為。

#### Regression vs. classification

A regression model 預測連續的值，像是某地區房價或是某事件發生機率。A classification model 是預測分離(離散)的值，例如判斷某個email是不是spam，或是某張圖片裡的動物是不是狗。