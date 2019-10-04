
var chilanka;
var x=0;

function setup() {
  createCanvas(800,800);
  chilanka=loadFont("assets/Chilanka-Regular.ttf");
}

function draw() {
  background(200);
  textFont(chilanka);
  textSize(1000);
  fill("#9951E0");
  text("Hello there, ", x,100);
  x++;
  if (x>width){
    x=0;
  }

  textSize(500);
  text("I'm Jeffrey.", 100,200);
}
