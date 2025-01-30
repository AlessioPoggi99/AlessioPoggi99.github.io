---
title: "Automatic chess move recognition"
description: "A Python program that uses a camera to detect chess moves on a physical board. It enables two players to track their game or play against a chess AI. The program processes images to recognize piece movements and updates the game state in real-time, bringing a seamless blend of physical and digital chess interaction!"
pubDate: "Sep 26 2024"
updatedDate: "Sep 26 2024"
heroImage: "/acmr/hero.png"
tags: ["python", "opencv", "scikit-learn"]
---

<div align='center'>
  <h1 class="main-title">Automatic chess move recognition</h1>
</div>

A Python program that uses a camera to detect chess moves on a physical board. It enables two players to track their game or play against a chess AI. The program processes images to recognize piece movements and updates the game state in real-time, bringing a seamless blend of physical and digital chess interaction!

## 🎯 Motivation and Objective

This project aims to develop a system capable of recognizing chess moves played on a physical chessboard using a camera or webcam. The ultimate goal is to allow users to play a game against a chess engine on their own board or to record the moves of a two-player game, whether it's a live match or a video recording.

The initial idea was to develop the project using Hall effect sensors connected to an Arduino or Raspberry Pi. However, as the project evolved into my university thesis, it shifted towards a more software-driven approach, incorporating some machine learning techniques.

## 📚 Stack

- <a href="https://www.python.org" target="_blank">Python</a> - A high-level, general-purpose programming language
- <a href="https://opencv.org" target="_blank">OpenCV</a> - An open-source computer vision library for image and video processing
- <a href="https://python-chess.readthedocs.io/" target="_blank">Python-chess</a> - A Python library for handling chess rules, move validation, and AI integration
- <a href="https://scikit-learn.org/" target="_blank">Scikit-learn</a> - A machine learning library for data analysis and predictive modeling
- Others: NumPy, Pandas, Matplotlib, Seaborn, SciPy, Joblib, CairoSVG and Stockfish.

## 📌 Project Phases

1. ### Calibration

   In this phase, the goal is to detect and isolate the chessboard within an image. From now on, we will refer to images or frames, as a video is simply a sequence of images.

   To achieve this, we use an OpenCV method called <strong class="tag">findChessboardCorners()</strong>, which identifies patterns in an image, the intersection points of a series of horizontal and vertical lines, forming a grid. The 49 detected points are highlighted in the bottom-left image.

   Using these points, we can define the plane containing the internal area of the chessboard. Finally, using another OpenCV method called <strong class="tag">findHomography()</strong> we can compute the transformation that maps the detected inner chessboard corners to a predefined set of points. This transformation corrects perspective distortions and allows the chessboard to appear as if viewed from above. By applying the resulting homography matrix to the original image we obtain the final adjusted image shown in the bottom-right.

    <img alt="calibration" class="rounded-md no-shadow" src="https://www.alessiopoggi.org/acmr/calibration.png"/>

2. ### Image Pre-Processing

   After calibration, every new frame captured by the webcam undergoes a series of transformations to optimize processing speed and accuracy. First, the image is <strong>scaled down by 50%</strong>, reducing both its size and resolution. This step minimizes computational load, making subsequent operations faster. Additionally, the frame is converted to <strong>grayscale</strong>, simplifying image analysis by removing unnecessary color information.

   Once these pre-processing steps are applied, the perspective transformation determined during calibration is used to warp the image, aligning the chessboard into a fixed, top-down view. With this corrected perspective, it becomes straightforward to extract and isolate each individual square of the chessboard for further analysis.

    <img alt="pre-processing" class="rounded-md no-shadow" src="https://www.alessiopoggi.org/acmr/preprocessing.png"/>

3. ### Hand Detection

   To determine when a move is made, we focus on when the player's hand overlaps with the chessboard, moves a piece, and then exits the frame. This is achieved using a technique called <strong class="tag">background subtraction</strong>, implemented with OpenCV. Background subtraction works by comparing consecutive frames and generating a mask, as shown in the image below.

    <img alt="background-subtraction" class="rounded-md no-shadow" src="https://www.alessiopoggi.org/acmr/handdetection1.png"/>

   In the mask:

   - <strong>Black pixels</strong> represent static objects — the background that hasn't changed between frames (like the table and chessboard).
   - <strong>White pixels</strong> represent changes between frames, which in this case indicates dynamic objects, such as the player's hand.

   Since the table and chessboard don't move during the game, they are considered static objects and are not detected as changes. Similarly, chess pieces are moved one at a time, and once they settle in a new position, they remain static for several seconds, so they too are not identified as dynamic changes.

   Therefore, the only truly dynamic object in the video is the player's hand. When the hand overlaps with the chessboard, we can detect it by isolating the white pixel area in the mask. By counting the white pixels and comparing the count to a threshold, we can determine when the hand enters and exits the frame.

   The graph below shows the number of white pixels in the mask over the course of an entire game. The sharp <strong>spikes</strong> indicate the moments when the player's hand enters and exits the frame, corresponding to the action of moving pieces.

    <img alt="white-pixels" class="rounded-md no-shadow" src="https://www.alessiopoggi.org/acmr/handdetection2.png"/>

4. ### Classification

   When the hand exits the frame, we expect that a move has been made, and we capture a key frame to analyze. The next challenge is to determine the positions of the pieces, classifying each individual square on the chessboard to identify whether it contains a white piece, a black piece, or is empty.

   To tackle this, I trained a <strong>classifier</strong> using data obtained from images of individual chessboard squares. Specifically, the features used for classification are:

   - <strong>Color of the square</strong>, which is known after calibration.
   - <strong>Entropy</strong>, a value representing the distribution of the grayscale histogram.
   - <strong>9 grayscale histograms</strong>, calculated for each square divided into a 3x3 grid.

    <img alt="histograms" class="rounded-md no-shadow" src="https://www.alessiopoggi.org/acmr/classification1.png"/>

   These features help the classifier distinguish between squares that contain pieces and those that only have the projection of an adjacent piece. Since we’ve applied a <strong>perspective transformation</strong> and the camera is not perfectly aligned above the board, but positioned at an angle, tall pieces like rooks and queens may project their top (head) onto adjacent squares. The classifier must be able to correctly differentiate these projections from actual pieces.

   I created a dataset of approximately <strong>150.000</strong> images of individual squares, extracted the relevant features, and split them into training and test sets. Using this data, I trained a <strong class="tag">Support Vector Classifier (SVC)</strong> with an RBF kernel (Radial Basis Function). After testing several models with different kernels, the RBF kernel yielded the highest accuracy, achieving over <strong>99% accuracy</strong>.

   The image on the left shows the <strong>confusion matrix</strong>, while the plot on the right visualizes the training data in a 2D space using the t-SNE algorithm. The background colors of the image represent an approximation of the classifier’s <strong>decision boundaries</strong>.

    <p align="center" class="img-grid">
        <img width="49%" height="auto" alt="confusion-matrix" class="rounded-md no-shadow" src="https://www.alessiopoggi.org/acmr/classification2.png"/>
        <img width="49%" height="auto" alt="decision-boundary" class="rounded-md no-shadow" src="https://www.alessiopoggi.org/acmr/classification3.png"/>
    </p>

5. ### Move Detection

   This will be updated soon. Thank you for reading this far! 😊

## 📂 Project structure

```sh
$PROJECT_ROOT
│   # Classifier folder and script
├── classifier
│   │   # Image dataset folder
│   └── dataset
│
│   # Summary jupyter notebook
└── summary
│   └── images
│
│   # Python scripts
├── utils
│
│   # Main program file
└── main.py
```
