
function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(4);
  
}

function draw() {
  background('purple');
  var r = random(windowWidth);
  
  if(r>=150){
  }
  
  stroke('green');
  strokeWeight(15);
  line(windowWidth/2,windowWidth/2,r/2,r/2);
  stroke('gold');
  strokeWeight(25);
  line(r,r, windowHeight/2,windowHeight/2);
}