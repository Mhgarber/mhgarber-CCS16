/**
 * by Allison Parrish
 */
var lexicon;
function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  background(50);
  fill(255);
  noStroke();
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Click for fun", width/2, height/2);
}
function draw() {
}
function mousePressed() {
  background(50);
  textAlign(LEFT, TOP);
  var output = "April is the " +
    lexicon.randomWord("jj") + " " + 
    lexicon.randomWord("nn") + ", " +
    lexicon.randomWord("vbg") + " " +
    lexicon.randomWord("nns") + 
    " out of the " +
    lexicon.randomWord("jj") + " " +
    lexicon.randomWord("nn");
  text(output, 10, 10, width-20, height-20);
}