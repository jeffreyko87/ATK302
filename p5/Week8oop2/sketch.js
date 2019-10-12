var cars=[];
var frogPos;

function setup() {
  createCanvas(800,600);
  rectMode(CENTER);
  for(var i=0;i<50;i++){
  cars.push(new Car());
  }

  frogPos=createVector(width/2,height-80);
  noStroke();
}




function draw() {
  background(100);

  for(var i=0;i<cars.length;i++){
  cars[i].display();
  cars[i].drive();

  if (cars[i].pos.dist(frogPos)<20){
    cars.splice(i,1);
  }
  }


  //frog
  fill("green");
  ellipse(frogPos.x,frogPos.y,100,100);
  checkKeys();
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
    rect(this.pos.x,this.pos.y,60,30);
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
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}
