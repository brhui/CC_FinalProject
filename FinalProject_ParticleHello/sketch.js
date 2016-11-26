// Array for storing greetings
var greeting = ["Hello", "Bonjour", "Hola", "Guten Tag", "Buon Giorno"];

// Variables for the font
var font;
var fontSize = 100;

//Variable for switching words
var newGreeting = 0;

var system;

function preload() {
  font = loadFont('content/OpenSans-Bold.ttf');
}

function setup() {
  createCanvas(800, 600);
  noStroke();

  textFont(font, fontSize);

  system = new ParticleSystem(createVector(width / 2, 50));

}

function draw() {
  background(255);

  system.addParticle();
  system.run();

  fill(134, 153, 234);
  textAlign(CENTER, CENTER);
  text(greeting[newGreeting], width / 2, height / 2);
}

// mouseClicked function switches words
function mouseClicked() {
  if (newGreeting < 4) {
    newGreeting += 1;
  } else {
    newGreeting = 0;
  }
}