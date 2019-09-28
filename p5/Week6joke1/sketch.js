var myState=0;

function setup() {
  createCanvas(600,600);
}

function draw() {
  textSize(40);
  switch (myState){
    case 0:
    background(240);
    fill(0);
    text("Ready for the joke?",50,200);
    break;

    case 1:
    background(220);
    fill(0);
    text("I invented a new word...",50,200);
    break;

    case 2:
    background(200);
    fill(0);
    text("I invented a new word...",50,200);
    text("Plagiarism!", 60, 250);
    break;

  }
}

function mouseReleased(){
  myState++;
  if(myState>2){
    myState=0;
  }
}
