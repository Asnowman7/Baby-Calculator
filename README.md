# Baby-Calculator

A Simple Calculator

## Getting Started

After cloning the repository, just open up calc.html with your preferred html viewer.

## Design

This project contains: background.js and calc.html

calc.html provides a simple calculator interface, comprised of a title, header, a calculator "screen" element, and buttons for all numbers, the five main arithmetic operators (+,-,x,/,=), and a decimal point.

background.js handles the back-end functionality of the calculator. All buttons present on calc.html call a function defined in background.js, which save all input in a global string buffer and a secondary buffer named currentNumber. Whenever a number is input, background.js concatenates the string of that number to both buffer and currentNumber. When a new operator is input, the string of said operator is added to buffer and currentNumber is cleared. background.js updates the html screen element accordingly after each input.

## Authors

* **Alex Snow** - *Front-end and Back-end*
