// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 4-4: Many variables

// We've got 8 variables now!  All  of type float.
var circleX = 0;
var circleY = 0;
var circleW = 50;
var circleH = 100;
var circleStroke = 255;
var circleFill = 0;
var backgroundColor = 255;
var change = 0.5;

// Your basic setup
function setup() {
  createCanvas(640,360);
}

function draw() {
  // Draw the background and the ellipse
  // Variables are used for everything: background, stroke, fill, location, and size.
  background(backgroundColor);
  stroke(circleStroke);
  fill(circleFill);
  ellipse(circleX,circleY,circleW,circleH);

  // Change the values of all variables
  // The variable change is used to increment and decrement the other variables.
  circleX = circleX + change;
  circleY = circleY + change;
  circleW = circleW + change;
  circleH = circleH - change;
  circleStroke = circleStroke - change;
  circleFill = circleFill + change;
}

