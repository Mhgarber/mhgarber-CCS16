
var lexicon;
function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  background(0);
  fill(255);
  noStroke();
  textSize(15);
  textAlign(CENTER, CENTER);
  text("A Wonderful Bird is the Pelican", width/2, height/2);
}
function draw() {
}
function mousePressed() {
  background(50);
  textAlign(LEFT, TOP);
  var output = "A " +
    lexicon.randomWord("jj") + " " +
    lexicon.randomWord("nn") + " " +
    "is the " +
    lexicon.randomWord("nn")+ ", " +

    lexicon.randomWord("prp$")+ " " +

    lexicon.randomWord("nn")+ " " +
    "will hold more than " +
    lexicon.randomWord("prp$")+ " " +
   lexicon.randomWord("nn")+ ", " +
  
  lexicon.randomWord("nnp")+ " " +

    "can take in " +
    lexicon.randomWord("prp$")+ " " +
   lexicon.randomWord("nn")+ " " +
    " Enough " +
    lexicon.randomWord("nn")+ " " +
    "for a week But " +
    lexicon.randomWord("prp")+ " " +
    "damned if " +
    lexicon.randomWord("nn")+ " " +
    "see how the helican! "
    





  text(output, 10, 10, width-20, height-20);
}