function setup() {
  createCanvas(800,800);
  background("black");
}

function draw() {
  beginShape();
  fill("black");
  stroke("white");
  for (var i = 0; i < 15; i++) {
  vertex(random(200),i);
  vertex(600,200);
  vertex(600,600);
  vertex(random(200),800);
   endShape(CLOSE);
   
  }
  

   
     for(var x=0; x < 10; x++){
    for (var y = 0; y < 10; y++){
      noStroke();
      fill('grey');
      ellipse(x*20, y*100, 15, 15);
      
    
  }
  }

}