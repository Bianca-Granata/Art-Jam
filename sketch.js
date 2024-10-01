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

}

