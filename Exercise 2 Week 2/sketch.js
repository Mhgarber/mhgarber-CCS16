function setup() {
  createCanvas(800, 800);

}

function draw (){
  background('green');
  fill('gold');
  ellipse(mouseX, mouseY, 400, 400);
  fill('purple');
  rect(200,200,mouseX,mouseY);
  fill('gold');
  ellipse(mouseX, mouseY, 200, 200);
  
}
   
