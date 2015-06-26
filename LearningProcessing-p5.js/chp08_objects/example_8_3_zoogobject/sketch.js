// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 8-3
var zoog;

function setup() {
  createCanvas(640,360);
  zoog = new Zoog(width/2,height/2,60,60,16);
}

function draw() {
  background(51);
  // mouseX position determines speed factor
  var factor = constrain(mouseX/10,0,5);
  zoog.jiggle(factor);
  zoog.display();
}

// Zoog constructor
function Zoog(tempX, tempY, tempW, tempH, tempEyeSize) {
  // Zoog's variables
  this.x = tempX;
  this.y = tempY;
  this.w = tempW;
  this.h = tempH;
  this.eyeSize = tempEyeSize;

  // Move Zoog
  this.jiggle = function(speed) {
    // Change the location of Zoog randomly
    this.x = this.x + random(-1,1)*speed;
    this.y = this.y + random(-1,1)*speed;
    // Constrain Zoog to window
    this.x = constrain(this.x,0,width);
    this.y = constrain(this.y,0,height);
  }
  
  // Display Zoog
  this.display = function() {
    // Set ellipses and rects to CENTER mode
    ellipseMode(CENTER);
    rectMode(CENTER);
    // Draw Zoog's arms with a for loop
    for (var i = this.y - this.h/3; i < this.y + this.h/2; i += 10) {
      stroke(255);
      line(this.x-this.w/4,i,this.x + this.w/4,i);
    }
    // Draw Zoog's body
    stroke(255);
    fill(175);
    rect(this.x,this.y,this.w/6,this.h);
    // Draw Zoog's head
    stroke(255);
    fill(255);
    ellipse(this.x,this.y-this.h,this.w,this.h);
    // Draw Zoog's eyes
    fill(0);
    ellipse(this.x - this.w/3,this.y - this.h,this.eyeSize,this.eyeSize*2);
    ellipse(this.x + this.w/3,this.y - this.h,this.eyeSize,this.eyeSize*2);
    // Draw Zoog's legs
    stroke(255);
    line(this.x - this.w/12,this.y + this.h/2,this.x - this.w/4,this.y + this.h/2 + 10);
    line(this.x + this.w/12,this.y + this.h/2,this.x + this.w/4,this.y + this.h/2 + 10);
  }
}



