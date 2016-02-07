var rectWidth;
var rectHeight;
var gridHeight;
var gridWidth;
var padding;
var r;
var mousePressed;
var blackBox;
var backColor;
function setup() {
  createCanvas(625, 450);
  backColor = color(300, 1000, 225);
  background(backColor);
  rectWidth = 100;
  rectHeight = 25;
  gridHeight =25;
  gridWidth = 25;
  padding = 50;
  r = gridWidth;
  blackBox = 35


  
}
function mousePressed (){
    if (blackBox == 35) {
    blackBox = color(300,1000,225);
    backColor = 35;
  } else {
    blackBox = 35;
    backColor = color(300,1000,225);
  }
   
}
function draw() {

  // main rectangle
  fill(blackBox);
  noStroke();
  rect(padding, padding, 525, 350);
  

  // smaller rectangle
  fill(backColor);
  noStroke();
  rect(padding + gridWidth, padding + gridHeight, rectWidth, rectHeight);
  rect(padding + gridWidth, padding + gridHeight * 3, rectWidth, rectHeight);
  rect(padding + gridWidth, padding + gridHeight * 5, rectWidth, rectHeight);
  rect(padding + gridWidth, padding + gridHeight * 7, rectWidth, rectHeight);
  rect(padding + gridWidth, padding + gridHeight * 9, rectWidth, rectHeight);

  // bottom row circles
  fill(backColor);
  noStroke();
  ellipse(padding + gridWidth + gridWidth/2,padding + gridHeight * 12 + gridHeight/2, r, r); 
  ellipse(padding + gridWidth * 3 + gridWidth/2, padding + gridHeight * 12 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 4 + gridWidth/2, padding + gridHeight * 12 + gridHeight/2, r, r);
 //bottom row 4th across circle going up
  ellipse(padding + gridWidth * 6 + gridWidth/2, padding + gridHeight * 12 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 6 + gridWidth/2, padding + gridHeight * 9 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 6 + gridWidth/2, padding + gridHeight * 5 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 6 + gridWidth/2, padding + gridHeight * 3 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 6 + gridWidth/2, padding + gridHeight + gridHeight/2, r, r);



 //5th & 6th across bottom row circles going up as rect
  ellipse(padding + gridWidth * 8 + gridWidth/2, padding + gridHeight * 12 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 9 + gridWidth/2, padding + gridHeight * 12 + gridHeight/2, r, r);
 
 // rect going up
 rect(padding + gridWidth *8, padding + gridHeight * 9, rectWidth/2, rectHeight);
 rect(padding + gridWidth *8, padding + gridHeight * 7, rectWidth/2, rectHeight);
 rect(padding + gridWidth *8, padding + gridHeight * 5, rectWidth/2, rectHeight);
 rect(padding + gridWidth *8, padding + gridHeight * 3, rectWidth/2, rectHeight);
 rect(padding + gridWidth *8, padding + gridHeight, rectWidth/2, rectHeight);
 
 
 
  //7th across bottom row circle
  ellipse(padding + gridWidth * 10 + gridWidth/2, padding + gridHeight * 12 + gridHeight/2, r, r);
 
 // 8th across bottom row circle going up
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight * 12 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight * 9 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight * 8 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight * 7 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight * 6 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight * 5 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight * 4 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight * 3 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight * 2 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 11 + gridWidth/2, padding + gridHeight + gridHeight/2, r, r);
 
 // 9th across bottom row circle going up
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight * 12 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight * 9 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight * 8 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight * 7 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight * 6 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight * 5 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight * 4 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight * 3 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight * 2 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 13 + gridWidth/2, padding + gridHeight + gridHeight/2, r, r);
 
  //final bottom row circle going up
  ellipse(padding + gridWidth * 18.75 + gridWidth/2, padding + gridHeight * 12 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 18.75 + gridWidth/2, padding + gridHeight * 10 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 18.75 + gridWidth/2, padding + gridHeight * 8 + gridHeight/2, r, r);
  ellipse(padding + gridWidth * 18.75 + gridWidth/2, padding + gridHeight * 6 + gridHeight/2, r, r);

  
  // bottom row rectangle going up
  fill(backColor);
  noStroke();
  rect(padding + gridWidth *15, padding + gridHeight * 12, rectWidth/1.5, rectHeight);
  rect(padding + gridWidth *15, padding + gridHeight * 10, rectWidth/1.5, rectHeight);
  rect(padding + gridWidth *15, padding + gridHeight * 8, rectWidth/1.5, rectHeight);
  rect(padding + gridWidth *15, padding + gridHeight * 6, rectWidth/1.5, rectHeight);
  
  //righthand larger rectangles
  rect(padding + gridWidth *15, padding + gridHeight * 3, rectWidth + 22.5, rectHeight * 2);
  rect(padding + gridWidth *15, padding + gridHeight, rectWidth + 22.5, rectHeight);

  //line five rect down 2 rect across 
  stroke(blackBox);
  strokeWeight(.25);
  line(padding + gridWidth *9, padding + gridHeight * 9, padding + gridWidth *9, padding + gridHeight * 9 + gridHeight);
  
  stroke(blackBox);
  strokeWeight(.25);
  line(padding + gridWidth *16, padding + gridHeight, padding + gridWidth *16, padding + gridHeight + gridHeight);
  line(padding + gridWidth *17, padding + gridHeight, padding + gridWidth *17, padding + gridHeight + gridHeight);
  line(padding + gridWidth *18, padding + gridHeight, padding + gridWidth *18, padding + gridHeight + gridHeight);
  line(padding + gridWidth *19, padding + gridHeight, padding + gridWidth *19, padding + gridHeight + gridHeight);


}