var tall = 50;

function setup() {
  createCanvas(windowHeight, windowWidth);
}

function draw() {
  
  background("blue");
  for (var i = 0; i < 12; i++) {
    var colorVar = color(i * 20, 100 - (i *5), 100 - (i *9));
    
      console.log(i * 3);
    fill(colorVar);
    noStroke();
    beginShape();
      vertex(0,i);
      vertex(windowWidth,i);
      vertex(windowWidth, windowHeight/i);
      vertex(0, windowHeight/i);
    endShape(CLOSE);
  }
 
  fill("gold");
  ellipse(50, 50, 180, 180);
  
 //ripped star function off github ex http://bit.ly/1QsKu6E
 
  fill("gold");
  stroke("gold");
  var npoints = 12;
  var x = 100;
  var y = 100;
  var radius1 = 75;
  var radius2 = 250;
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    x =random(100);
    y= random(100);
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  

  
}