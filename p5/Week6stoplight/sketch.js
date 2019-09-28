var myState=0;
var timer=300;
var x=0;

function setup() {
  createCanvas(600,600);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  switch(myState){
    case 0:
    background(220);
    fill("#F2F28C");
    rect(300,300, 100,200);
    fill("#F85767");
    ellipse(300,240,50,50);
    timer=timer-1;

    push();
    translate(x,0);
    x=x;
    if(x>650){
      x=-620;
    }
    car();
    pop();

  if(timer<=0){
    timer=300;
    myState=1;
    }
break;

    case 1:
    background(220);
    fill("#F2F28C");
    rect(300,300, 100,200);
    fill("#2DF02D");
    ellipse(300,300,50,50);
    timer=timer-1;

    push();
    translate(x,0);
    x=x+5;
    if(x>650){
      x=-620;
    }
    car();
    pop();

    if(timer<=0){
      timer=300;
      myState=2;
      }
break;

    case 2:
    background(220);
    fill("#F2F28C");
    rect(300,300, 100,200);
    fill("#F3DC0B");
    ellipse(300,360,50,50);
    timer=timer-1;

    push();
    translate(x,0);
    x=x+2;
    if(x>650){
      x=-620;
    }
    car();
    pop();

    if(timer<=0){
      timer=300;
      myState=0;
      }
      break;
    }
}

function car(){
  fill(0);
  rect(70,546, 100,50);
  fill(240);
  rect(95,540, 15,15);
  fill(150);
  ellipse(42,582,30,30);
  fill(150);
  ellipse(92,582,30,30);
}


function mouseReleased(){
  console.log(mouseX +',' +mouseY);

}
