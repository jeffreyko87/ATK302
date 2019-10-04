var x=1;
var boxx;
function setup() {
  createCanvas(500,500);
  boxx=loadImage("assets/Box.png");
}

function draw() {
  background(200);
  fill(255);
  rect(x,10,10,10);
  x+=5;
  if(x>500){
    x=0;
  }
}
