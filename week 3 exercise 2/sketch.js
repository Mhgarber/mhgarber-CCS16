function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background('purple');

  for(var x=0; x < 10; x++){
    for (var y = 0; y < 10; y++){
      fill('gold');
      ellipse(x*100, y*100, 100, 100);
      fill('green');
      rect(x*100, y*100, 75, 75);
      fill('purple');
      ellipse(x*100, y*100, 50, 50);
      fill('gold');
      rect(x*100, y*100, 10, 50);
      fill('purple');
      rect(x*100, y*100, 75, 10);
  }
  }

  var x = 0;
  var y = 0;
  stroke('gold');
  beginShape(LINES);
  while(x < width && y < height) {
      vertex(x,y);
      x+=random(75);
      y+=random(150);
  }
  endShape();
}