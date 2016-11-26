// Array for Greetings
var greeting = ["Hello", "Bonjour", "Hola", "Gutentag", "Buongiorno"];

// Variables for the Font
var font;
var fontSize = 25;

//Variable for switching words
var newGreeting = 0;

function preload() {
  font = loadFont('content/arial.ttf');
}

function setup() {
  createCanvas(800, 600);
  noStroke();
  fill(255);

  textFont(font, fontSize);
}

function draw() {
  background(0);

  textAlign(CENTER, CENTER);
  text(greeting[newGreeting], width / 2, height / 2);

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      newGreeting += 1;
      if (newGreeting > 4) {
        newGreeting = 0;
      }
    }
  }
}

/*
function mousePressed() {
  if (mouseButton == LEFT) {
    for (i = 0; i < greeting.length; i++) {
      text(greeting[i], 100, 100);
      if (greeting.length > 2) {
        i = 0;
      }
    }
  }
} */