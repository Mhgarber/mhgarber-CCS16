
var lines;
var adjectives = [];
var randomAdjective;
var counts;
var trumpOne;
var trumpTwo;
var trumpThree;
var trumpFour;
var imageArray= [];
var activeImage = 0; 
var button;


function preload() {
  lines = loadStrings('trumpspeech.txt');
  trumpOne = loadImage('trump-1.png');
  trumpTwo = loadImage('trump-2.png');
  trumpThree = loadImage('trump-3.png');
  trumpFour = loadImage('trump-4.png');

  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageArray = [trumpOne,trumpTwo, trumpThree, trumpFour]
  var params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorePunctuation: true
  };
  
  counts = RiTa.concordance(lines.join(" "), params); 
  
  for (var i in counts) {
      var tags = RiTa.getPosTags(i);
      if (tags[0] == 'jj') {
        adjectives.push(i);
      }
      
    
  }
  randomAdjective = RiTa.randomItem(adjectives); 
  
  
  button = createButton('Clickit!');
  button.position(10, 80);
  button.style("font-size", "18px");
  button.style("background-color", "red");
  button.style("color", "white");
  button.style("border", "none");
  button.mousePressed(electify);
  

}
function draw() {
  background('blue');
  image(imageArray[activeImage], 0,0, 700,700);
  
  textSize(22);
  textFont('Georgia');
  textAlign('center');

  fill('navy');
  stroke(20);
  push();
  rotate(-0.19);
  text('MAKE\nAMERICA\n' + randomAdjective.toUpperCase() + '\nAGAIN', 300, 133);

  pop();
}

function electify() {
  randomAdjective = RiTa.randomItem(adjectives); 
  
  activeImage += 1
  
  if (activeImage >= imageArray.length) {
    activeImage = 0;
  }

}