var pumpkin;
var x=0;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  pumpkin = loadImage("pics/pumpkin.jpg");
}

function draw() {
  // put drawing code here
  background("white");
  image(pumpkin, 0, 0);


  push();
  translate(x,0);
  x=x+5;
  if(x>width){
    x=-800;
  }
  bet();
  fish();
  pop();




}

function mouseReleased() {
  console.log(mouseX + ", " + mouseY);
}

function bet(){
  // bat
  fill(0);
  triangle(372, 108, 358, 76, 352, 114);
  triangle(329, 115, 310, 88, 315, 126);
  ellipse(346, 138, 70, 70);
  quad(356, 120, 397, 75, 435, 103, 359, 132);
  quad(330, 134, 258, 114, 267, 167, 338, 141);
  fill('red');
  ellipse(334, 128, 10, 10);
  ellipse(357, 126, 10, 10);
}

function fish(){
  fill("#f48072");
    quad(287, 242, 369, 182, 506, 242, 369, 300); //body
    quad(506, 242, 522, 203, 563, 196, 553, 228); //backfin top
    quad(506, 242, 522, 280, 563, 290, 553, 260); //backfin bottom
    triangle(369, 182, 407, 149, 452, 165); //fin top
    triangle(369, 300, 407, 329, 452, 314); //fin bottom

    fill("#fedbc1");
    ellipse(334, 233, 20, 20); //eye
    fill("#00919e");
    ellipse(332, 233, 12, 12); //eye
}
