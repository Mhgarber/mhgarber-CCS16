var label;
var columnsArray = [];
var labelsArray = [];
var dollarImage;
var lastDollarSize = 0;


function preload() {

  dollarImage = loadImage("dollar.svg");

  
}function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(24);
  columnsArray = [21.78,79.95,10.02,114.04,325];
  labelsArray=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    for (var i = 0; i < columnsArray.length; i++){
    var dollarSize = columnsArray[i];
    image(dollarImage, lastDollarSize, 50, dollarSize, dollarSize);
    
   var label = labelsArray[i];
   text(label, lastDollarSize, dollarSize * 2);
  lastDollarSize = lastDollarSize + dollarSize;
    
  }
}


