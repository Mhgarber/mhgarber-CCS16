/**
 * Rules based color palettes
 * 
 */
var h = 100;
var s = 100;
var b = 100;

//increase this number for more steps between colors
var rectStep = 45;
function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  background(255);
  //try uncommenting this line for HSB mode
 (HSB, 255,100,100);
  for(var x=0; x < width; x += rectStep){
    noStroke();
    fill(random(h+x % 75),random(s+x % 100),random(b+x % 100));
    rect(x * 2,h,h / 2,x);
  }
}

function keyPressed(){
  if(key === '1'){
    h = random(255);
  }
  else if(key === '2'){
    s = random(255);
  }
  else if(key === '3'){
    b = random(255);
  }
}