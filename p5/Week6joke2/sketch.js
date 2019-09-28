var myState=0;
var timer=0;
function setup() {
  createCanvas(600,600);
}

function draw() {
  textSize(40);
  switch(myState){
    case 0:
    background(240);
    fill(0);
    text("Ready for the joke?",50,200);
    timer++;
    if(timer>=100){
      myState=1;
      timer=0;
    }
    break;

    case 1:
    background(220);
    fill(0);
    text("I invented a new word...",50,200);
    timer++;
    if(timer>=100){
      myState=2;
      timer=0;
    }
    break;

    case 2:
    background(200);
    fill(0);
    text("I invented a new word...",50,200);
    text("Plagiarism!", 60, 250);
    timer++;
    if(timer>=100){
      myState=0;
      timer=0;
    }
    break;
  }
}
