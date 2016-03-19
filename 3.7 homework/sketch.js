var blinkNumber = 0;
 
function setup() {
  createCanvas(500, 500);
}

function draw() {
  blinkNumber+= 1;
  background(100);
  duck(110, 110, 1);
  
  if (mouseIsPressed) {
    for (var i=0; i < 50; i++) {
      duck(i*2,i*2, 1);
  }
  }
  
}

function hat (xVar, yVar){
  fill("navy");
  ellipse(xVar,yVar,75,20);
  fill("white");
  ellipse(xVar,yVar - 10, 15, 10);
}

function duck(xVar, yVar, scaleVar){
  push();
  translate(xVar,yVar);
    scale(scaleVar, scaleVar);

  fill("tan");
  ellipse(250, 220, 200, 400);
  //duck body
  fill("brown");
  ellipse(250, 220, 125, 80);
  //duck head
  fill("green");
  ellipse(250, 150, 100, 100);
  //left duck eye
  fill("navy");
  ellipse(225, 140, 20, 20);
  //right duck eye
  fill("navy");
  ellipse(270, 140, 20, 20);
  
  if (blinkNumber > 20 && blinkNumber < 50){
  //left duck eye blink
  fill("white");
  ellipse(225, 140, 20, 20);
  //right duck eye blink
  fill("white");
  ellipse(270, 140, 20, 20);
  
  if (mouseIsPressed)
  hat(xVar + 150, yVar);
  
  }
  
  if (blinkNumber > 50) {
    blinkNumber = 0; 
  
  }
  
  //beak
  fill("orange");
  ellipse(200, 175, 120, 40);
  
  pop();
}
