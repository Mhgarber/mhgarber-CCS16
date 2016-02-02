function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  strokeWeight(3);
  stroke(1000);
  noFill();
  quad(550, 60, 85, 20, 67, 125, 30, 170);
  triangle(500, 145, 275, 375, 267, 100);
  rect(160, 160, 200, 200);
  ellipse(475, 150, 245, 155);
  ellipse(175, 275, 145, 145);
  ellipse(175, 275, 75, 75);

}