var x = 0;
var y = 0;
var y1=100;
var x1=100;


function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(200);
  noStroke();


  fill("#1ECBE1");
  rect(x, y1, 20, 20);
  x = x + 5;
  if (x > width) {
    x = 0;
    y1=random(200);
  }


  fill("#E1341E");
  rect(x1, y, 20, 20);
  y = y + 5;
  if (y > height) {
    y = 0;
    x1=random(200);
  }


}
