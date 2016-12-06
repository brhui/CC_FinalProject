
/*
----------------------------------------------------------------------------------------------------------------

THIS IS AN EXAMPLE FROM THE P5.JS REFERENCE.
I PLAN ON AUGMENTING THIS TO GET MY PROJECT TO WORK BUT I'M TRYING TO UNDERSTAND PARTICLES FIRST

---------------------------------------------------------------------------------------------------------------- */

/*
I kind of understand how this works... but not 100%. I put in some comments on what I think things (some are from the example)
There are a few things in the bottom that I'm not sure about.

I also am not sure I would get the particles to change colour AND move to form a new word??

How do I even make the particles for a word in the first place??

*/



// Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 400.0;
};

// Particle .run runs update and display
Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Updates position of the particle, lifespan (alpha channel) descreases by 2
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
}

// Displays particle
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  noStroke();
  fill(151, this.lifespan);
  ellipse(this.position.x, this.position.y, 5, 5);
};

// Checks to see if the particle is still useful
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
}; 

// Particle System class that puts all the particles into an array
var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

// Particle System .addParticle function that puts new Particles into an array? I think. Not 100% sure what this is for
ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

// This .run function checks to see if particles are dead and puts them back into the array? I think... Also not 100% sure on this.
ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
