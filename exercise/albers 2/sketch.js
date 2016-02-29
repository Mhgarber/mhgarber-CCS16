function setup() {
  createCanvas(800,500);
}

function draw() {
  //left side large rect
  noStroke();
  fill(100,0,50);
  rect(0,0,400,800);
  
  //left side small rect
  noStroke();
  fill(255,255,50);
  rect(200,250,5,5);
  
  
  //right side small rect
  noStroke();
  fill(255,255,50);
  rect(600,250,5,5);
}