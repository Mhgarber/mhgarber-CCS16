var blinkNumber = 0;
 
function setup() {
  createCanvas(windowHeight, windowWidth);
  background("turquoise");
}

function draw() {
  blinkNumber+= 1;
  
  var shapeNumber = 3;

  beginShape();
  fill("gold");
  for (var i = 0; i < shapeNumber; i++) {
  var x = random(400);
  var y = random(75);
  vertex(x, y);
   endShape(CLOSE);
}
   var shapeNumber = 3;

  beginShape();
  fill("purple");
  for (var i = 0; i < shapeNumber; i++) {
  var x = random(50);
  var y = random(400);
  vertex(x, y);
   endShape(CLOSE);
}
    var shapeNumber = 3;

  beginShape();
  fill("green");
  for (var i = 0; i < shapeNumber; i++) {
  var x = random(400);
  var y = random(50);
  vertex(x, y);
   endShape(CLOSE);
}
  
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
  
  }
  
  if (blinkNumber > 50) {
    blinkNumber = 0; 
    
  
  
  
  }
  
  //beak
  fill("orange");
  ellipse(200, 175, 120, 40);
  
 
}