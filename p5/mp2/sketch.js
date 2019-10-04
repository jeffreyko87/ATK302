var myState = 0;
var timer=0;
var man0;
var man;
var man2;
var man3;
var man4;
var man5;
var man6;
var man7;
var cup;
var can;
var x=0;
var x2=1000;
var x3=670;
var song1;
var y=240;
var flower1;
var flower2;
var grass1;
var grass2;
var song1;
var song2;

var mic;
var vol;

function preload(){
  song1=loadSound("assets/song1.wav");
  song2=loadSound("assets/song2.wav");
  song1.loop();
}
function setup() {
  createCanvas(1000,600);
  man=loadImage("assets/man.png");
  cup=loadImage("assets/starbucks.png");
  can=loadImage("assets/can.png");
  man2=loadImage("assets/man2.png");
  man3=loadImage("assets/man3.png");
  man0=loadImage("assets/man0.png");
  man4=loadImage("assets/man4.png");
  man5=loadImage("assets/man5.png");
  man6=loadImage("assets/man6.png");
  man7=loadImage("assets/man7.png");
  flower1=loadImage("assets/flower1.png");
  flower2=loadImage("assets/flower2.png");
  grass1=loadImage("assets/grass1.png");
  grass2=loadImage("assets/grass2.png");
  song1.play();
  mic = new p5.AudioIn();
  mic.start();

  noStroke();
}

function draw() {

  switch (myState) {
    case 0:
    background("#8EEBFA");

    //mountain
    fill("#75BC2D");
    ellipse(100,300,500,500);
    fill("#8CD345");
    ellipse(100,300,400,400);

    fill("#75BC2D");
    ellipse(900,400,500,500);
    fill("#8CD345");
    ellipse(900,400,400,400);

    //stoplight
    fill("#404443");
    rect(900,10,70,150);
    fill("#404443");
    rect(925,100,20,160);

    fill("#868D8C");
    ellipse(935,50,40,40);
    fill("#EE5252");
    ellipse(935,50,35,35);


    fill("#868D8C");
    ellipse(935,120,40,40);



    //firstland
    fill("#C4CABD");
    rect(0,250,1000,500);
    fill("#E8ECE3");
    rect(0,270,1000,500);
    fill(0);
    textSize(15);
    text("The boy just finished a startbucks drink,",5,290);
    text("he wants to get rid of the garbage but we all know throwing it on the ground is not right.", 5,310);
    text("So let's click the screen to help him reach the recycle trash can.",5,330);

    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);


    //secondland
    fill("#8C9385");
    rect(250,500,800,500);
    fill("#C6CBC2");
    rect(250,520,800,500);
    image(can,130,420);





    image(man0,0,40);


      break;


    case 1:
    background("#8EEBFA");

    //mountain
    fill("#75BC2D");
    ellipse(100,300,500,500);
    fill("#8CD345");
    ellipse(100,300,400,400);

    fill("#75BC2D");
    ellipse(900,400,500,500);
    fill("#8CD345");
    ellipse(900,400,400,400);

    //stoplight
    fill("#404443");
    rect(900,10,70,150);
    fill("#404443");
    rect(925,100,20,160);

    fill("#868D8C");
    ellipse(935,50,40,40);
    fill("#EE5252");
    ellipse(935,50,35,35);


    fill("#868D8C");
    ellipse(935,120,40,40);



    //firstland
    fill("#C4CABD");
    rect(0,250,1000,500);
    fill("#E8ECE3");
    rect(0,270,1000,500);

    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);


    //secondland
    fill("#8C9385");
    rect(250,500,800,500);
    fill("#C6CBC2");
    rect(250,520,800,500);
    image(can,130,420);

    x=x+4;
    if(x>=410){
    x=410;
    myState=2
    }




    image(man,x,40);



      break;

//getting into mud
    case 2:
    background("#8EEBFA");

    //mountain
    fill("#75BC2D");
    ellipse(100,300,500,500);
    fill("#8CD345");
    ellipse(100,300,400,400);

    fill("#75BC2D");
    ellipse(900,400,500,500);
    fill("#8CD345");
    ellipse(900,400,400,400);

    //stoplight
    fill("#404443");
    rect(900,10,70,150);
    fill("#404443");
    rect(925,100,20,160);

    fill("#868D8C");
    ellipse(935,50,40,40);
    fill("#EE5252");
    ellipse(935,50,35,35);


    fill("#868D8C");
    ellipse(935,120,40,40);



    //firstland
    fill("#C4CABD");
    rect(0,250,1000,500);
    fill("#E8ECE3");
    rect(0,270,1000,500);
    fill(0);
    textSize(15);
    text("He now gets slower by the mud on the ground,",498,310);
    text("be patient.",498,330);



    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);


    //secondland
    fill("#8C9385");
    rect(250,500,800,500);
    fill("#C6CBC2");
    rect(250,520,800,500);
    image(can,130,420);



    x=x+1;
    image(man2,x,40);



    if(x>=670){
    myState=3;
    }
    break;

//stop by the light
    case 3:
    background("#8EEBFA");

    //mountain
    fill("#75BC2D");
    ellipse(100,300,500,500);
    fill("#8CD345");
    ellipse(100,300,400,400);

    fill("#75BC2D");
    ellipse(900,400,500,500);
    fill("#8CD345");
    ellipse(900,400,400,400);

    //stoplight
    fill("#404443");
    rect(900,10,70,150);
    fill("#404443");
    rect(925,100,20,160);

    fill("#868D8C");
    ellipse(935,50,40,40);
    fill("#EE5252");
    ellipse(935,50,35,35);


    fill("#868D8C");
    ellipse(935,120,40,40);



    //firstland
    fill("#C4CABD");
    rect(0,250,1000,500);
    fill("#E8ECE3");
    rect(0,270,1000,500);

    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);


    //secondland
    fill("#8C9385");
    rect(250,500,800,500);
    fill("#C6CBC2");
    rect(250,520,800,500);
    image(can,130,420);

    x=670;

    image(man5,x,40);

    fill(0);
    textSize(20);
    text("Yell <Green> to pass!", 770,300);

    vol = mic.getLevel();
    vol = vol * 100;
    if (vol >= 11) {
      myState=4;
    }

    break;

    case 4:
    background("#8EEBFA");

    //mountain
    fill("#75BC2D");
    ellipse(100,300,500,500);
    fill("#8CD345");
    ellipse(100,300,400,400);

    fill("#75BC2D");
    ellipse(900,400,500,500);
    fill("#8CD345");
    ellipse(900,400,400,400);

    //stoplight
    fill("#404443");
    rect(900,10,70,150);
    fill("#404443");
    rect(925,100,20,160);

    fill("#868D8C");
    ellipse(935,50,40,40);



    fill("#868D8C");
    ellipse(935,120,40,40);
    fill("#79E679");
    ellipse(935,120,35,35);



    //firstland
    fill("#C4CABD");
    rect(0,250,1000,500);
    fill("#E8ECE3");
    rect(0,270,1000,500);

    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);

    //secondland
    fill("#8C9385");
    rect(250,500,800,500);
    fill("#C6CBC2");
    rect(250,520,800,500);
    image(can,130,420);


    x3=x3+4;
    if(x3>=1100){
      myState=5;
    }

    image(man,x3,40);

    break;

//into the second land
    case 5:
    background("#8EEBFA");

    //mountain
    fill("#75BC2D");
    ellipse(100,300,500,500);
    fill("#8CD345");
    ellipse(100,300,400,400);

    fill("#75BC2D");
    ellipse(900,400,500,500);
    fill("#8CD345");
    ellipse(900,400,400,400);

    //stoplight
    fill("#404443");
    rect(900,10,70,150);
    fill("#404443");
    rect(925,100,20,160);

    fill("#868D8C");
    ellipse(935,50,40,40);



    fill("#868D8C");
    ellipse(935,120,40,40);
    fill("#79E679");
    ellipse(935,120,35,35);



    //firstland
    fill("#C4CABD");
    rect(0,250,1000,500);
    fill("#E8ECE3");
    rect(0,270,1000,500);

    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);

    //secondland
    fill("#8C9385");
    rect(250,500,800,500);
    fill("#C6CBC2");
    rect(250,520,800,500);
    image(can,130,420);



    fill("#868D8C");
    ellipse(935,120,40,40);
    fill("#79E679");
    ellipse(935,120,35,35);



    //firstland
    fill("#C4CABD");
    rect(0,250,1000,500);
    fill("#E8ECE3");
    rect(0,270,1000,500);

    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);


    //secondland
    fill("#8C9385");
    rect(250,500,800,500);
    fill("#C6CBC2");
    rect(250,520,800,500);
    image(can,130,420);

    x2=x2-5;
    if(x2==160){
      myState=6;
      timer=0;
    }

    image(man3,x2,240);

      break;


    case 6:
    background("#8EEBFA");

    //mountain
    fill("#75BC2D");
    ellipse(100,300,500,500);
    fill("#8CD345");
    ellipse(100,300,400,400);

    fill("#75BC2D");
    ellipse(900,400,500,500);
    fill("#8CD345");
    ellipse(900,400,400,400);

    //stoplight
    fill("#404443");
    rect(900,10,70,150);
    fill("#404443");
    rect(925,100,20,160);

    fill("#868D8C");
    ellipse(935,50,40,40);



    fill("#868D8C");
    ellipse(935,120,40,40);
    fill("#79E679");
    ellipse(935,120,35,35);



    //firstland
    fill("#C4CABD");
    rect(0,250,1000,500);
    fill("#E8ECE3");
    rect(0,270,1000,500);

    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);

    //secondland
    fill("#8C9385");
    rect(250,500,800,500);
    fill("#C6CBC2");
    rect(250,520,800,500);
    image(can,130,420);

    image(man4,160,240);
    timer=timer+1;
    if(timer>100){
      myState=7;
    }

      break;


    case 7:
    background("#8EEBFA");

    //mountain
    fill("#75BC2D");
    ellipse(100,300,500,500);
    fill("#8CD345");
    ellipse(100,300,400,400);

    fill("#75BC2D");
    ellipse(900,400,500,500);
    fill("#8CD345");
    ellipse(900,400,400,400);

    //stoplight
    fill("#404443");
    rect(900,10,70,150);
    fill("#404443");
    rect(925,100,20,160);

    fill("#868D8C");
    ellipse(935,50,40,40);



    fill("#868D8C");
    ellipse(935,120,40,40);
    fill("#79E679");
    ellipse(935,120,35,35);



    //firstland
    fill("#C4CABD");
    rect(0,250,1000,500);
    fill("#E8ECE3");
    rect(0,270,1000,500);

    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);

    //secondland
    fill("#8C9385");
    rect(250,500,800,500);
    fill("#C6CBC2");
    rect(250,520,800,500);

    y=y+2;
    image(man6,165,240);
    image(cup,160,y);
    image(can,130,420);
    if(y==450){
      myState=8;
      song1.stop();
      song2.play();
    }
      break;

//big change
    case 8:
    background("#8EEBFA");

    //mountain
    fill("#75BC2D");
    ellipse(100,300,500,500);
    fill("#8CD345");
    ellipse(100,300,400,400);

    fill("#75BC2D");
    ellipse(900,400,500,500);
    fill("#8CD345");
    ellipse(900,400,400,400);

    //stoplight
    fill("#404443");
    rect(900,10,70,150);
    fill("#404443");
    rect(925,100,20,160);

    fill("#868D8C");
    ellipse(935,50,40,40);



    fill("#868D8C");
    ellipse(935,120,40,40);
    fill("#79E679");
    ellipse(935,120,35,35);



    //firstland
    fill("#84D930");
    rect(0,250,1000,500);
    fill("#B5ED7C");
    rect(0,270,1000,500);

    //mud
    fill("#915E2B");
    ellipse(600,267,230,35);
    fill("#B87737");
    ellipse(600,260,200,18);

    //secondland
    fill("#77C42B");
    rect(250,500,800,500);
    fill("#89DF34");
    rect(250,520,800,500);

    fill(0);
    textSize(40);
    text("Recycle helps the Earth,",409,65);
    text("Thank you.",413,116);

    //plant
    image(flower1,52,111);
    image(flower1,172,132);
    image(flower1,103,205);

    image(flower2,780,205);
    image(flower2,862,190);

    image(grass1,458,110);
    image(grass1,556,110);
    image(grass1,811,350);
    image(grass1,931,338);

    image(grass2,140,340);
    image(grass2,832,105);
    image(grass2,45,521);
    image(grass2,680,181);
    image(grass2,616,419);
    image(grass2,731,417);

    image(man7,220,200);
    image(can,130,420);
    break;

  }
}
function mouseReleased(){
if(myState==0){
  myState=1;
}
  console.log(mouseX +',' +mouseY);
}
function touchStarted() {
  getAudioContext().resume();
}
