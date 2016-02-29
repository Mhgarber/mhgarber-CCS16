function setup() {
  createCanvas(800,800);
  background(255,0,0);
}

function draw(){
 for(var x=0; x < 150; x++){
    for (var y = 0; y < 150; y++){
      noStroke();
      fill(255,0,50);
      ellipse(x*100, y*100, 100, 100);
       noStroke();
      fill(255,0,25);
      ellipse(x*100, y*100, 75, 75);
       noStroke();
      fill(255,0,50);
      ellipse(x*100, y*100, 50, 50);
       noStroke();
      fill(255,0,75);
      ellipse(x*100, y*100, 25, 25);
    }  
 }
}  
