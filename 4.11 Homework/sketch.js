function Particle(loc) {
  this.loc = loc;
  this.acc = new p5.Vector();
  this.vel = new p5.Vector(random(-1,1), random(-2,0));
  this.timeAlive = 0;
  this.goNuts = false;
  this.goUpAndDown = false;
  this.crazyTime = 160;
  this.yVar = this.loc.y;
}

Particle.prototype = {
  constructor: Particle,
  update : function(){ 
    if (this.goNuts === true) {
      this.vel = new p5.Vector(random(-2,2), random(-2,40));
      this.acc = new p5.Vector(random(-5,5), random(-5,5));
    }

    
    if (this.goUpAndDown === true) {
      this.yVar = windowHeight/2 + random(-20, 20);
      this.goUpAndDown = false;
    }
      this.vel.add(this.acc);
    this.loc.add(this.vel);
    
    
    this.timeAlive +=2.0;
    if (this.timeAlive > this.crazyTime){
      this.goNuts = true;
    }
    
    
    if (this.timeAlive > this.crazyTime * 3){
      this.goUpAndDown = true;
    }
  },
  display : function(){
    noStroke();
    fill(50, this.lifespan);
    ellipse(this.loc.x, this.yVar, 12, 12);
  }  
};

// a collection that will hold our particle objects
var particles = [];

function setup(){
  createCanvas(windowWidth,windowHeight);
  for (var i=0; i< 50; i++){
    particles[i] = new Particle(new p5.Vector(width/2, height/2));
    
    
  }
}

function draw(){
  background('gold');
  for (var i=0; i < particles.length; i++){
    particles[i].update();
    particles[i].display();
  }
  
}