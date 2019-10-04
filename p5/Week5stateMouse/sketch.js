
var myState=0;
function setup() {
  createCanvas(600,600);
}

function draw(){
  textSize(100);
  switch(myState){
    case 0:
    background(200,0,0);
    fill(255);
    text("Era1",300,300);
    break;

    case 1:
    background(0,200,0);
    fill(255);
    text("Era2",300,300);
    break;

    case 2:
    background(0,0,200);
    fill(255);
    text("Era3",300,300);
    break;
  }
}

 function mouseReleased(){
   myState++;
   if (myState>2){
     myState=0;
   }
 }
