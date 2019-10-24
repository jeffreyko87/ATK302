var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaright, yodaleft;
var bird;
var birds = [];

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  noStroke();
  birds[0] = loadImage("assets/bird1.png");
  birds[1] = loadImage("assets/bird2.png");
  birds[2] = loadImage("assets/bird3.png");
  
  for (var i = 0; i < 3; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);

  yodaright = loadImage("assets/yodaright.gif");
  yodaleft = loadImage("assets/yodaleft.gif");
  yoda = yodaright;
  bird = loadImage("assets/bird1.png");




}




function draw() {
  switch (myState) {

    case 0:
      background(200);
      textSize(50);
      fill(0)
      text("Welcome to the game:", 120, 100);
      text("Hungry Frog !", 140, 180);
      text("Click to play", 140, 260);
      break;

    case 1:
      game();
      timer++;
      if (timer > 600) {
        timer = 0;
        myState = 2;
      }
      break;

      //lose
    case 2:
      background(200);
      fill(0);
      text("Lose", 200, 200);
      break;

      //win
    case 3:
      background(200);
      fill(0);
      text("Win", 200, 200);
      break;
  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;
  }
}

function Car() {
  //attributes

  this.pos = createVector(300, 300);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.birdNum = floor(random(birds.length - 1));
  this.timer = 0;
  this.maxTimer = random(10, 30);

  //method
  this.display = function() {

    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);
    this.timer = this.timer + 1;
    if (this.timer > 30) {
      this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = this.maxTimer;
    }

  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) yoda = yodaleft;
  if (keyCode == RIGHT_ARROW) yoda = yodaright;

}

function checkKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 10;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 10;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 10;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 10;

}


function game() {
  background(100);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    if (cars[i].pos.dist(frogPos) < 25) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    timer = 0;
    myState = 3;
  }


  //frog
  fill("green");
  //ellipse(frogPos.x,frogPos.y,50,50);
  image(yoda, frogPos.x, frogPos.y, 100, 100);
  checkKeys();
}

function resetTheGame() {
  cars = [];
  for (var i = 0; i < 3; i++) {
    cars.push(new Car());
  }
}
