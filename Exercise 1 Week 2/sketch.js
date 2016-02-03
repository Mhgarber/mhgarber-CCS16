var workPlease;
var success;
function setup() {
  createCanvas(520,520);
  workPlease = 0;
  success = 520;
}

  
function draw() {
  line(workPlease, 40, success, 40);
  line(workPlease, 80,success,80);
  line(workPlease,120,success,120);
  line(workPlease,160,success,160);
  line(workPlease,200,success,200);
  line(workPlease,240,success,240);
  line(workPlease,280,success,280);
  line(workPlease,320,success,320);
  line(workPlease,360,success,360);
  line (workPlease,400,success,400);
  line(workPlease,440,success,440);
  line(workPlease,480,success,480);
  line(40, workPlease, 40, success);
  line(80,workPlease,80,success);
  line(120,workPlease,120,success);
  line(160,workPlease,160,success);
  line(200,workPlease,200,success);
  line(240,workPlease,240,success);
  line(280,workPlease,280,success);
  line(320,workPlease,320,success);
  line(360,workPlease,360,success);
  line(400,workPlease,400,success);
  line(440,workPlease,440,success);
  line(480,workPlease,480,success);
  arc(260, 520, 520, 520, 260, HALF_PI);
  noFill();
  arc(workPlease, 260, 520, 520, 260, HALF_PI);
  noFill();
  arc(260, workPlease, 520, 520, 520, HALF_PI);
  noFill();
 


}