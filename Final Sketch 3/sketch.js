var lines;
var verbs = [];
  var adjectives = [];
  var nouns = [];
  var gerunds = [];
  var adverbs = [];
  var pluralNouns = [];
var counts;
var button;
function preload() {
  lines = loadStrings('trumpspeech.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  var params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorePunctuation: true
  };
  
  counts = RiTa.concordance(lines.join(" "), params); 

  for (var i in counts) {
      var tags = RiTa.getPosTags(i);
      var syllables = RiTa.getSyllables(i).split("/").length;
      
      if (tags[0] == 'vb') {
        if (syllables == 1){
          verbs.push(i);
        }
      }
      if (tags[0] == 'jj') {
        if (syllables == 2){
          adjectives.push(i);
        }
      }
      if (tags[0] == 'nn') {
        if (syllables == 2) {
          nouns.push(i);
        }
      }
      if (tags[0] == 'vbg') {
        if (syllables == 2){
          gerunds.push(i);
        }
      }
      if (tags[0] == 'rb') {
        if (syllables == 3){
          adverbs.push(i);
        }
      }
      if (tags[0] == 'nns') {
        if (syllables == 2){
          pluralNouns.push(i);
        }
      }
      

  }
  
  
  
  button = createButton('Trump Haiku Machine');
  button.position(windowWidth/2 - 86, windowHeight/2 - 50);
  button.style("font-size", "18px");
  button.style("background-color", "red");
  button.style("color", "white");
  button.style("border", "none");
  button.mousePressed(generateHaiku);
  generateHaiku();
}

  function mousePressed(){
      generateHaiku();
  }
  
  
  function generateHaiku(){

  var output =
    //first line, 5 syllables
    RiTa.randomItem(verbs) + " " + 
    RiTa.randomItem(adjectives) + " " +
    RiTa.randomItem(nouns) + "\n" +

    //second line, 7 syllables
    RiTa.randomItem(gerunds) + " " +
    RiTa.randomItem(nouns) + " " +
    RiTa.randomItem(adverbs) + "\n" +
    
    //third line, 5 syllables
    RiTa.randomItem(pluralNouns) + " " +
    RiTa.randomItem(gerunds) + " " +
    RiTa.randomItem(nouns);
    background('black');
    textAlign('center');
    textFont('Georgia');
    fill('white');
    textSize(18);
    
    text(output, windowWidth/2, windowHeight/2);
}


// function draw() {
//   background('blue');

//   textSize(22);
//   textFont('Georgia');
//   textAlign('center');

//   fill('navy');
//   stroke(20);
//   push();

//   pop();
// }

