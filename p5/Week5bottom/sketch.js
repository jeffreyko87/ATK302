var score=0;
function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  fill("red");
  rect(100,100,100,100);
  text("Your score: "+score, 30,30);
}

function mouseReleased(){
  if((mouseX>100) && (mouseX<200) && (mouseY>100) && (mouseY<200)){
  console.log("beep");
  score=score+1;
  }
}
