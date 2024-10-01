/**
 * Art Jam 
 * 
 * Bianca Granata
 */
/**Art Jam draft
 * Bianca Granata
 * 
 * a weird old TV with only one channel...
 */


// This creates the canvas
function setup() {
  createCanvas(1000, 480);
}

//the black background
function draw() {
  background(0, 0, 0);
  drawTv();
  drawScreen();

}

// the magnificent construction of the TV
function drawTv() {

  //the tv box
  push();
  stroke(92, 92, 92);
  fill(192, 192, 192);
  rect(100, 50, 500, 380);
  pop();

  //tv border
  push();
  stroke(255, 255, 255);
  noFill();
  rect(110, 60, 510, 390);
  pop();

  //The screen 
  push();
  stroke(92, 92, 92);
  fill(255, 255, 255);
  rect(150, 100, 400, 250);
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

  //the TV decor
  push();
  stroke();
  fill();
  pop();

}

