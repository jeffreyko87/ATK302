var cars = [];
var fish = [];
var frogPos;
var myState = 0;
var timer = 0;
var fontt;
var welcomeCat;
var cat, catRight, catLeft, catWin;
var boss = [];
var bossfish = [];
var welcomeFish;
var welcomeBossfish;
var y = 100;
var y2 = 140;
var y3 = 150;
var y4 = 80;
var song1, song2, song3, song4;
var eat;
var deadfish;

function preload() {
  song1 = loadSound("assets/WelcomeSong.mp3");
  song2 = loadSound("assets/GamingSong.mp3");
  song3 = loadSound("assets/LoseSong.mp3");
  song4 = loadSound("assets/WinSong.mp3");
  eat = loadSound("assets/EatingSound.wav");
  song1.loop();

}

function setup() {
  createCanvas(windowWidth, 600);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  noStroke();
  song1.play();
  fontt = loadFont("assets/BalooBhai-Regular.ttf");
  welcomeCat = loadImage("assets/catMain.png");
  welcomeFish = loadImage("assets/fish.png");
  welcomeBossfish = loadImage("assets/bossfish.png");
  cat = loadImage("assets/catRight.png");
  catRight = loadImage("assets/catRight.png");
  catLeft = loadImage("assets/catLeft.png");
  catWin = loadImage("assets/catWin.png");
  deadfish = loadImage("assets/fishLose.png");


  fish[0] = loadImage("assets/fish.png");
  fish[1] = loadImage("assets/fish1.png");
  fish[2] = loadImage("assets/fish2.png");
  bossfish[0] = loadImage("assets/bossfish.png");
  bossfish[1] = loadImage("assets/bossfish1.png");
  bossfish[2] = loadImage("assets/bossfish2.png");

  for (var i = 0; i < 20; i++) {
    cars.push(new Car());
  }
  for (var i = 0; i < 4; i++) {
    boss.push(new Boss());
  }

  frogPos = createVector(width / 2, height - 80);
}




function draw() {
  switch (myState) {

    case 0:
      welcome();
      break;

    case 1:
      game();
      timer++;
      if (timer > 1000) {
        timer = 0;
        myState = 2;
        song2.stop();
        song3.play();
      }
      break;

      //lose
    case 2:
      background("#4a4562");
      fill("#CCF3FE");

      y = y + 2;
      if (y >= 300) {
        y = -50;
      }
      ellipse(100, y, 100, 100);
      fill("#CCF3FE");
      y2 = y2 - 2;
      if (y2 <= -30) {
        y2 = 300;
      }
      ellipse(280, y2, 60, 60);
      fill("#CCF3FE");
      y3 = y3 - 1;
      if (y3 <= -50) {
        y3 = 300;
      }
      ellipse(1050, y3, 100, 100);
      fill("#CCF3FE");
      y4 = y4 + 2;
      if (y4 >= 300) {
        y4 = -50;
      }
      ellipse(1200, y4, 80, 80);


      fill("#38344c");
      rect(0, 430, 3000, 400);


      textFont(fontt);
      textSize(100);
      fill("#f87b32");
      text("You Lose :(", 400, 210);
      fill("#f8e9d3");
      text("You Lose :(", 395, 205);

      fill("255");
      rect(650, 400, 310, 110);
      fill("#FDF07C");
      rect(650, 400, 300, 100);
      textSize(50);
      fill(0);
      text("Try Again", 540, 420);
      break;

      //win
    case 3:
      background("#4a4562");
      fill("#CCF3FE");

      y = y + 2;
      if (y >= 300) {
        y = -50;
      }
      ellipse(100, y, 100, 100);
      fill("#CCF3FE");
      y2 = y2 - 2;
      if (y2 <= -30) {
        y2 = 300;
      }
      ellipse(280, y2, 60, 60);
      fill("#CCF3FE");
      y3 = y3 - 1;
      if (y3 <= -50) {
        y3 = 300;
      }
      ellipse(1050, y3, 100, 100);
      fill("#CCF3FE");
      y4 = y4 + 2;
      if (y4 >= 300) {
        y4 = -50;
      }
      ellipse(1200, y4, 80, 80);


      fill("#38344c");
      rect(0, 430, 3000, 400);


      textFont(fontt);
      textSize(100);
      fill("#f87b32");
      text("You Win :)", 410, 190);
      fill("#f8e9d3");
      text("You Win :)", 415, 185);

      fill("255");
      rect(650, 400, 310, 110);
      fill("#FDF07C");
      rect(650, 400, 300, 100);
      textSize(50);
      fill(0);
      text("Eat Again", 540, 420);

      image(catWin, 280, 420, 480, 350);
      image(deadfish, 1100, 400, 200, 200);
      break;
  }

}

function mouseReleased() {
  console.log(mouseX, mouseY);
  switch (myState) {
    case 0:
      if ((mouseX > 497) && (mouseX < 801) && (mouseY > 350) && (mouseY < 448)) {
        myState = 1;
        song1.stop();
        song2.play();
      }
      break;

    case 2:
      resetTheGame();
      if ((mouseX > 497) && (mouseX < 801) && (mouseY > 350) && (mouseY < 448)) {
        myState = 0;
        song3.stop();
        song1.play();
      }
      break;

    case 3:
      resetTheGame();
      if ((mouseX > 497) && (mouseX < 801) && (mouseY > 350) && (mouseY < 448)) {
        myState = 0;
        song4.stop();
        song1.play();
      }
      break;
  }
}

function Car() {
  //attributes

  this.pos = createVector(random(300, 800), random(100, 300));
  this.vel = createVector(random(-6, 6), random(-7, 7));
  this.number = floor(random(fish.length - 1));
  this.timer = 0;
  this.maxTimer = random(22, 28);

  //method
  this.display = function() {
    image(fish[this.number], this.pos.x, this.pos.y, 100, 60);
    this.timer = this.timer + 1;
    if (this.timer > 30) {
      this.number = this.number + 1;
      if (this.number > fish.length - 1) this.number = 0;
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

function Boss() {
  this.pos = createVector(random(10, 1000), random(10, 300));
  this.vel = createVector(random(15, 20), random(-10, 10));
  this.number = floor(random(bossfish.length - 1));
  this.timer = 0;
  this.maxTimer = random(25, 30);

  this.display = function() {
    image(bossfish[this.number], this.pos.x, this.pos.y, 100, 60);
    this.timer = this.timer + 1;
    if (this.timer > 30) {
      this.number = this.number + 1;
      if (this.number > bossfish.length - 1) this.number = 0;
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
  if (keyCode == LEFT_ARROW) cat = catLeft;
  if (keyCode == RIGHT_ARROW) cat = catRight;

}

function checkKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 15;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 15;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 15;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 15;

  if (frogPos.x >= windowWidth || frogPos.x <= 0 || frogPos.y >= 600 || frogPos.y <= 0) {
    if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x + 15;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x - 15;
    if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y + 15;
    if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y - 15;
  }
}

function welcome() {
  background("#4a4562");
  fill("#CCF3FE");

  y = y + 2;
  if (y >= 300) {
    y = -50;
  }
  ellipse(100, y, 100, 100);
  fill("#CCF3FE");
  y2 = y2 - 2;
  if (y2 <= -30) {
    y2 = 300;
  }
  ellipse(280, y2, 60, 60);
  fill("#CCF3FE");
  y3 = y3 - 1;
  if (y3 <= -50) {
    y3 = 300;
  }
  ellipse(1050, y3, 100, 100);
  fill("#CCF3FE");
  y4 = y4 + 2;
  if (y4 >= 300) {
    y4 = -50;
  }
  ellipse(1200, y4, 80, 80);

  fill("#FDEAA5");
  rect(0, 430, 3000, 400);
  fill("#38344c");
  rect(0, 440, 3000, 400);


  textFont(fontt);
  textSize(60);
  fill("#f87b32");
  text("Welcome to The", 430, 100);
  fill("#f8e9d3");
  text("Welcome to The", 425, 95);

  textSize(100);
  fill("#f87b32");
  text("Hungry Cat !", 380, 190);
  fill("#f8e9d3");
  text("Hungry Cat !", 375, 185);

  textSize(40);
  fill("#f8e9d3");
  text("Rule:", 850, 300);
  textSize(25);
  text("1. Press Arrow keys to move cat.", 850, 340);
  text(" ↑    ↓    ←    →", 980, 380);
  text("3. Collect all the fish by cat within", 850, 420);
  text("16 seconds to win the game.", 875, 460);



  fill("255");
  rect(650, 400, 310, 110);
  fill("#FDF07C");
  rect(650, 400, 300, 100);
  textSize(50);
  fill(0);
  text("Click to play", 510, 420);

  image(welcomeCat, 230, 435, 400, 370);
  image(welcomeFish, 950, 530, 140, 80);
  image(welcomeBossfish, 1150, 530, 160, 110);
}

function game() {
  background("#4a4562");
  fill("#CCF3FE");
  ellipse(100, 100, 100, 100);
  fill("#CCF3FE");
  ellipse(280, 140, 60, 60);
  fill("#CCF3FE");
  ellipse(1050, 150, 100, 100);
  fill("#CCF3FE");
  ellipse(1200, 80, 80, 80);


  fill("#423d5a");
  rect(0, 440, 3000, 400);
  fill("#38344c");
  rect(0, 600, 3000, 400);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    if (cars[i].pos.dist(frogPos) < 40) {
      cars.splice(i, 1);
      eat.play();
    }
  }

  for (var i = 0; i < boss.length; i++) {
    boss[i].display();
    boss[i].drive();

    if (boss[i].pos.dist(frogPos) < 30) {
      boss.splice(i, 1);
      eat.play();
    }
  }

  if (cars.length == 0 && boss.length == 0) {
    timer = 0;
    myState = 3;
    song2.stop();
    song4.play();
  }


  //frog
  image(cat, frogPos.x, frogPos.y, 210, 140);
  checkKeys();
}

function resetTheGame() {
  cars = [];
  for (var i = 0; i < 10; i++) {
    cars.push(new Car());
  }
  for (var i = 0; i < 3; i++) {
    boss.push(new Boss());
  }
  frogPos = createVector(width / 2, height - 80);
}
