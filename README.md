
![Favicon]('./img/favicon.ico') 
# Harry Potter Quiz

## Introduction

This Harry Potter quiz aims to test your knowledge about the Harry Potter world.

The HTML and CSS files were validated by the followings validators  without any errors or warnings.
- [W3C HTML Validator](https://jigsaw.w3.org/css-validator/)
- [W3C CSS Validator](https://validator.w3.org/)

## Overview

This project is organized as follows:
 - index.html 
 - README.md 
 - /css
   - style.css -> style sheet 
 - /img
   - favicon.png -> my logo
   - larm-rmah-151478-unsplash.jpg -> background for the header
 - /js
   - app.js -> vanilla JavaScript file

## How does it work?

- Starting the quiz
  - The `startQuiz()` function is an IIFE and renders the 'Start quiz' `button`.
  - Clicking on the 'Start quiz' `button` invokes the `showQuestion()` function.
  - The `showQuestion()` function shows each of the questions stored in the `questions` object and invokes `getAnswer()` function each time one of the option button is clicked.
- Storing the user's answers
  - `getAnswer()` function stores the clicked options in the `userAnswers` array and invokes `showQuestion()` for the next question or `finishQuiz()` function if the questions are over.
- Finishin game
  - `calculateResult()` function compares the `userAnswers` array with the `correctAnswers` array and returns how many correct answers the user got from the total of questions.
  - `finishQuiz()` function invokes `calculateResult()` and renders a 'Play again' `button` to reload the page and restart the game.
  

## How to install and use it?

Considering it uses only vanilla JavaScript, HTML and CSS, it is not necessary to install additional features. 
Just download the files and double click on the index.html file.
It works fine in Chrome (Version 73.0.3683.86), Firefox (Version 66.0.2) and Safari (Version 12.0.3).
This game works in different sizes of screens as well.

## References

- [MDN Documentation](https://developer.mozilla.org)
- [CSS3 Animate](http://cssanimate.com/)
- larm-rmah-151478-unsplash.jpg - by Larm Rmah from [Unsplash](https://unsplash.com/photos/sMs2M-yiqCY)
