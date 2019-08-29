var x=0;
function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}
function draw(){
  background("#67A2E0");
  noStroke();




  fill("#E0721F");
  quad(189, 200, 216, 200, 216, 500, 144, 500);

  fill("#EBE214");
  ellipse(x, 170, 40, 40);
  fill("#EE9745");
  ellipse(x, 100, 32, 32);



  fill("#8DDCBC");
  ellipse(200, 144, 72, 72);
  fill("#8DDCBC");
  ellipse(140, 144, 72, 72);
  fill("#8DDCBC");
  ellipse(250, 144, 72, 72);
  fill("#8DDCBC");
  ellipse(220, 100, 72, 72);
  fill("#8DDCBC");
  ellipse(170, 100, 72, 72);
  fill("#8DDCBC");
  ellipse(220, 200, 72, 72);
  fill("#8DDCBC");
  ellipse(170, 200, 72, 72);

  fill("FFFFFF");
  ellipse(440, 66, 40, 40);
  fill("FFFFFF");
  ellipse(410, 66, 40, 40);
  fill("FFFFFF");
  ellipse(470, 66, 40, 40);
  fill("FFFFFF");
  ellipse(500, 66, 40, 40);
  fill("FFFFFF");
  ellipse(425, 85, 40, 40);
  fill("FFFFFF");
  ellipse(455, 85, 40, 40);
  fill("FFFFFF");
  ellipse(485, 85, 40, 40);
  fill("FFFFFF");
  ellipse(425, 50, 40, 40);
  fill("FFFFFF");
  ellipse(455, 50, 40, 40);
  fill("FFFFFF");
  ellipse(485, 50, 40, 40);

  fill("#50D076");
  ellipse(363, 400, 500, 100);


  x=x+3;
  if (x>720) x=0;
}
function mouseReleased(){
  console.log(mouseX +',' +mouseY);

}
