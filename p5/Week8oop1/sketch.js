var myCar;
var myCar1;
var myCar2;
var myCar3;
var myCar4;

function setup() {
  createCanvas(800,800);
  noStroke();
  myCar=new Car();
  myCar1=new Car();
  myCar2=new Car();
  myCar3=new Car();
  myCar4=new Car();
}

function draw() {
  background(100);

  myCar.display();
  myCar.drive();

  myCar1.display();
  myCar1.drive();

  myCar2.display();
  myCar2.drive();

  myCar3.display();
  myCar3.drive();

  myCar4.display();
  myCar4.drive();
}
function Car(){
  //attributes
  this.x=0;
  this.y=random(height);
  this.r=random(255);
  this.g=random(255);
  this.b=random(255);
  this.vel=random(10);



  //display method
  this.display=function(){
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,100,50);
  }



  this.drive=function(){
    this.x=this.x+this.vel;
    if(this.x>width){
      this.x=0;

    }
  }
}
