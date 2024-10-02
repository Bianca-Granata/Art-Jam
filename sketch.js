
/**Art Jam
 * Bianca Granata
 * 
 * a weird old TV, with moving the mouse around allows for the colors to change as well as the movement 
 * of the screen.
 */

// This creates the canvas

"use strict";
//the illusion
let drawIllusion = {
  x: 350,
  y: 220,
  size: 1,
  minSize: 0,
  maxSize: 400

}
function setup() {
  createCanvas(860, 480);
}

//the black background
function draw() {
  background(0, 0, 0);
  drawTv();
  drawScreen();
  drawIlusion();
  // this is meant for the  illusion to get bigger 
  drawIllusion.size = drawIllusion.size + 1;
  drawIllusion.size = constrain(drawIllusion.size, drawIllusion.minSize, drawIllusion.maxSize);

}

// the magnificent construction of the TV
function drawTv() {

  //the tv box
  push();
  stroke(92, 92, 92);
  fill(192, 192, 192);
  rect(100, 50, 500, 380);
  pop();

  //the yellow border of the tv
  push();
  stroke(255, 255, 0);
  strokeWeight(5);
  noFill();
  rect(100, 50, 500, 380);
  pop();

  //The non-functional buttons 
  push();
  stroke(245, 8, 108);
  fill(8, 48, 245);
  circle(520, 390, 50, 25);
  pop();

  //outer button
  push();
  stroke(245, 8, 108);
  noFill();
  circle(520, 390, 60, 25);
  pop();

  //smaller button
  push();
  stroke(245, 8, 103);
  fill(63, 8, 245);
  circle(450, 390, 35, 25);
  pop();

  //left button
  push();
  stroke(55, 8, 245);
  fill(245, 8, 111);
  circle(170, 390, 35, 25);
  pop();

  //outer of the small left button
  push();
  stroke(8, 48, 245);
  noFill();
  circle(170, 390, 50, 25);
  pop();

}
function drawScreen() {
  //The screen 
  push();
  stroke(92, 92, 92);
  fill(mouseX, mouseY, 255);
  rect(150, 100, 400, 250);
  pop();
}

// draws the illusion inside the screen
function drawIlusion() {
  // draws each circle in the TV
  push();
  stroke(0, 0, 0);
  strokeWeight(15);
  fill(mouseX, mouseY, 255);

  circle(350, 220, 300, 40);
  circle(350, 220, 250, 40);
  circle(350, 220, 200, 40);
  circle(350, 220, 150, 40);
  circle(350, 220, 100, 40);
  circle(350, 220, 50, 40);
  circle(350, 220, 5, 40);

  pop();
}

