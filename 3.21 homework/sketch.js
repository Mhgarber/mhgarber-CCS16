var spin = (250, 0, 50);
function setup(){
  createCanvas(400, 400);

  
}
function draw() {
  colorMode(RGB);
  noStroke();
  fill(spin);
  translate(20, 10);
  rotate(radians(frameCount%100));
  rect(mouseX, mouseY, 15, 15);
  
  fill(100, 50, 150);
  translate (20, 10);
  rotate(PI/6.0);
  rect(mouseX, mouseY, 25, 25);


}

function mouseMoved() {
  spin = spin * 1
  if (spin < 200) {
    spin = 0;
  }

}