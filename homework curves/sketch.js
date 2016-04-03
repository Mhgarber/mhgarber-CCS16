var waveLengthOne = 25.0;
var waveLengthTwo = 90.0;
var pointCount = 140;
var angle = 0.0;
var angleTwo = 0.0;
var amplitude = 200;
var rate = 30;
var weight = 1;

function setup(){
  createCanvas(400,400);
  frameRate(rate);
}
function draw(){
  if(pointCount > 275){
    noLoop();
  }
  strokeWeight(weight);
  
  translate(width/2, height/2);
  beginShape();
  for(var i=140; i < pointCount; i++){
    fill(i, 255 - i, i);
    stroke(255 - i, i, i);
    if (i > 250 && i < 264) {
      weight += 1;
      strokeWeight(weight);
    }
    // waveLengthOne -= .002;
    angle = i / waveLengthOne * TWO_PI/2;
    var y = sin(angle)* amplitude;
  
    angleTwo = i / waveLengthTwo * TWO_PI/2;
    var x = sin(angleTwo)* amplitude;
    ellipse(x,y,i,i); 
  }
  endShape();
  pointCount++;
}