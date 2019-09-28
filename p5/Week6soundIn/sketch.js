var mic;
var vol;
var y = 20 ;
var yy=30;
var yyy=10;
var yyyy=15;
var yyyyy=35;
var z = 20 ;
var zz=30;
var zzz=10;
var zzzz=15;
var zzzzz=35;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
  noStroke();
}

function draw() {
  background("#1ECBE1");

fill(255);
ellipse(200, y, 50, 50) ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this
  if (vol > 4) {
    y=y+10 ;
  }
  if(y>=830){
    y=-20;
  }

  fill("");
  ellipse(300, yy, 80, 80) ;
    vol = mic.getLevel(); // level is between 0 and 1
    vol = vol * 100; // you may need to change this
    if (vol > 4) {
      yy=yy+5 ;
    }
    if(yy>=830){
      yy=-20;
    }

    fill("");
    ellipse(400, yyy, 60, 60) ;
      vol = mic.getLevel(); // level is between 0 and 1
      vol = vol * 100; // you may need to change this
      if (vol > 4) {
        yyy=yyy+7 ;
      }
      if(yyy>=830){
        yyy=-20;
      }

      fill("");
      ellipse(600, yyyy, 70, 70) ;
        vol = mic.getLevel(); // level is between 0 and 1
        vol = vol * 100; // you may need to change this
        if (vol > 4) {
          yyyy=yyyy+13 ;
        }
        if(yyyy>=830){
          yyyy=-20;
        }

        fill("");
        ellipse(770, yyyyy, 20, 20) ;
          vol = mic.getLevel(); // level is between 0 and 1
          vol = vol * 100; // you may need to change this
          if (vol > 4) {
            yyyyy=yyyyy+20 ;
          }
          if(yyyyy>=830){
            yyyyy=-20;
          }


          fill(255);
          ellipse(100, z, 30, 30) ;
            vol = mic.getLevel(); // level is between 0 and 1
            vol = vol * 100; // you may need to change this
            if (vol > 4) {
              z=z+20 ;
            }
            if(z>=830){
              z=-20;
            }

            fill("");
            ellipse(440, zz, 40, 40) ;
              vol = mic.getLevel(); // level is between 0 and 1
              vol = vol * 100; // you may need to change this
              if (vol > 4) {
                zz=zz+8 ;
              }
              if(zz>=830){
                zz=-20;
              }

              fill("");
              ellipse(50, zzz, 10, 10) ;
                vol = mic.getLevel(); // level is between 0 and 1
                vol = vol * 100; // you may need to change this
                if (vol > 4) {
                  zzz=zzz+17 ;
                }
                if(zzz>=830){
                  zzz=-20;
                }

                fill("");
                ellipse(20, zzzz, 20, 20) ;
                  vol = mic.getLevel(); // level is between 0 and 1
                  vol = vol * 100; // you may need to change this
                  if (vol > 4) {
                    zzzz=zzzz+22 ;
                  }
                  if(zzzz>=830){
                    zzzz=-20;
                  }

                  fill("");
                  ellipse(250, zzzzz, 20, 20) ;
                    vol = mic.getLevel(); // level is between 0 and 1
                    vol = vol * 100; // you may need to change this
                    if (vol > 4) {
                      zzzzz=zzzzz+25 ;
                    }
                    if(zzzzz>=830){
                      zzzzz=-20;
                    }


  textSize(10);
  text("Click the screen first. My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
