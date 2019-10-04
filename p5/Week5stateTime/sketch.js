
var myState=0;
var myTimer=0;
var myBackground;

function setup() {
  createCanvas(600,600);
  background("white");
  myBackground=color(random(255),random(255),random(255));
}

function draw() {

  switch(myState){

    case 0:
    background(myBackground);
    fill("black");
    text("Case 0", width/2, length/2);
    myTimer++;
    if(myTimer>=200){
      myTimer=0;
      myState=1;
      myBackground=color(random(255),random(255),random(255));
    }
    break;

    case 1:
    background(myBackground);
    fill("black");
    text("Case 1", width/2, length/2);
    myTimer++;
    if(myTimer>=200){
      myTimer=0;
      myState=2;
      myBackground=color(random(255),random(255),random(255));
    }
    break;

    case 2:
    background(myBackground);
    fill("black");
    text("Case 2", width/2, length/2);
    myTimer++;
    if(myTimer>=200){
      myTimer=0;
      myState=0;
      myBackground=color(random(255),random(255),random(255));
    }
    break;

  }
}
