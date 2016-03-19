var myGeometry = [];

function setup() {
  createCanvas(500,500);
  
  for(var i = 0; i < 50; i++){
    myGeometry.push(random(20));
  }
}

function draw() {
  background(50,0,255)
  
  for(var i = 0; i < myGeometry.length; i++){
 
  fill(0,250,200);
  quad(myGeometry[i] * 10, myGeometry[i] * 10, myGeometry[i] * 10, myGeometry[i] * 10,
    200, 63, 300, 6);
    
  textSize(25);
  textFont('Courier New');
  textAlign(CENTER);
  text("my shape is named paper airplane", 250, 250);
  }
}
  
