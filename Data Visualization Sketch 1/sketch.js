var table;
var activeColumn = 0;
var label;
var dataCol;
var columnsArray = [];
var labelsArray = [];
var nuclearData = [];
var radicalData = [];
var terroristData = [];
var militaryData = [];
var warData = [];
var americaData = [];
var iranData = [];
var cubaData = [];
var gunData = [];
var teethImage;
var nukeImage;
var comicSans;


function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying 
  table = loadTable("datavis2.csv", "csv", "header");
  teethImage = loadImage("teeth.png");
  nukeImage = loadImage("nukes.png");
  comicSans = loadFont("LDFComicSans.ttf");
  
  
}function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(24);
  nuclearData = table.getColumn("Nuclear");
  radicalData = table.getColumn("Radical");
  terroristData = table.getColumn("Terrorist");
  militaryData = table.getColumn("Military");
  warData = table.getColumn("War");
  americaData = table.getColumn("America");
  iranData = table.getColumn("Iran");
  cubaData = table.getColumn("Cuba");
  gunData = table.getColumn("Gun");
  columnsArray = [radicalData, terroristData, militaryData, warData,iranData, cubaData, gunData, americaData, nuclearData];
  labelsArray=["Radical", "Terrorist", "Military", "War", "Iran", "Cuba", "Gun", "America", "Nukes"]
}

function mousePressed(){
  activeColumn += 1;
  
  if (activeColumn >= columnsArray.length) {
    activeColumn = 0;
  }
  
  
}

function draw(){
  background(255);
  fill("red");
  noStroke();
  rect(0, 0, windowWidth/2, windowHeight);
  fill ("blue");
  noStroke();
  rect(windowWidth/2, 0, windowWidth/2,windowHeight);
  var label = labelsArray[activeColumn]
  var dataCol = columnsArray[activeColumn];
  
  var republicans=dataCol[0];
  var democrats=dataCol[1];
  
  var republicansSize = republicans * 10;
  var democratsSize = democrats * 10;
  
  if (activeColumn == columnsArray.length - 1) {
      republicansSize = republicans * 80;
      democratsSize = democrats * 80;
      image(nukeImage, windowWidth/4 - republicansSize/2, windowHeight/2 - republicansSize/2, republicansSize, republicansSize)
      image(nukeImage, windowWidth - windowWidth/4 - democratsSize/2, windowHeight/2 - democratsSize/2, democratsSize, democratsSize)
  } else {
      image(teethImage, windowWidth/4 - republicansSize/2, windowHeight/2 - republicansSize/2, republicansSize, republicansSize)
      image(teethImage, windowWidth - windowWidth/4 - democratsSize/2, windowHeight/2 - democratsSize/2, democratsSize, democratsSize)
  }
  
 
  textSize(32);
  textFont(comicSans);
  fill("white");
  text(label, 10, 30);
  textSize(14);
  textFont(comicSans);
  text("GOP Debate 3.10.16", 10, windowHeight - 30);
  text("DNC Debate 4.14.16", windowWidth/2 + 10, windowHeight - 30);
  
 
}