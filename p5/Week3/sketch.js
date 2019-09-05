
var score=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
}

function draw() {
  noStroke();
  //background(random(255));

  //ellipse(width/2,height/2,50,50);

  //fill(255);
  //rect (mouseX, mouseY, 10, 30) ;

  fill(0);
  text("Jeffrey", width/2, height/2);
  fill("#1ecbe1");
  ellipse(width/2,500,20,20);
  fill("#1ecbe1");
  ellipse(width/2,520,20,20);
  fill("#1ecbe1");
  ellipse(width/2,540,20,20);
  //text(score, 100,100)
  textSize(50);
}

function mouseReleased() {

  //background(random(255),random(255),random(255));

  score++ //score=score+1;
  strokeWeight(random(15));
  stroke(random(255),10,10);
  fill(random(255),10,50);
  ellipse(mouseX,mouseY, 30,30);
}
