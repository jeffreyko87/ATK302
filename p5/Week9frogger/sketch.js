var cars=[];
var frogPos;
var myState=0;
var timer=0;

function setup() {
  createCanvas(800,600);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  noStroke();

  for(var i=0;i<3;i++){
  cars.push(new Car());
  }

  frogPos=createVector(width/2,height-80);
}




function draw() {
  switch(myState){

    case 0:
    welcome();
    break;

    case 1:
    game();
    timer++;
    if (timer>600){
      timer=0;
      myState=2;
    }
    break;

    //lose
    case 2:
    background(200);
    fill(0);
    text("Lose",200,200);
    break;

    //win
    case 3:
    background(200);
    fill(0);
    text("Win",200,200);
    break;
  }

}

function mouseReleased(){
  switch(myState){
    case 0:
    myState=1;
    break;

    case 2:
    resetTheGame();
    myState=0;
    break;

    case 3:
    resetTheGame();
    myState=0;
    break;
  }
}

function Car(){
  //attributes

  this.pos=createVector(300,300);
  this.vel=createVector(random(-5,5),random(-5,5));
  this.r=random(255);
  this.g=random(255);
  this.b=random(255);

  //method
  this.display=function(){
    fill(this.r,this.g,this.b);
    rect(this.pos.x,this.pos.y,100,50);
    ellipse(this.pos.x-40,this.pos.y+30,25,25);
    ellipse(this.pos.x+40,this.pos.y+30,25,25);
  }

  this.drive=function(){
    this.pos.add(this.vel);
    if(this.pos.x>width) this.pos.x=0;
    if(this.pos.x<0) this.pos.x=width;
    if(this.pos.y>height) this.pos.y=0;
    if(this.pos.y<0) this.pos.y=height;

  }
}

function checkKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 8;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 8;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 8;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 8;

}

function welcome(){
  background(200);
  textSize(50);
  fill(0)
  text("Welcome to the game:",120,100);
  text("Hungry Frog !",140,180);
  text("Click to play",140,260);
}

function game(){
  background(100);

  for(var i=0; i<cars.length ; i++){
  cars[i].display();
  cars[i].drive();

  if (cars[i].pos.dist(frogPos)<20){
    cars.splice(i,1);
  }
  }

  if (cars.length==0){
    timer=0;
    myState=3;
  }


  //frog
  fill("green");
  ellipse(frogPos.x,frogPos.y,50,50);
  checkKeys();
}

function resetTheGame(){
  cars=[];
  for (var i=0; i<3; i++){
    cars.push(new Car());
  }
}
