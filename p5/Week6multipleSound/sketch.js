var song1, song2, song3;
var myState = 0;


function preload() {
  song1 = loadSound('assets/thatway.mp3');
  song2 = loadSound('assets/highfive.mp3');
  song3 = loadSound('assets/oldtown.mp3');

  // set each song to loop and then immediately pause it so it doesn't play

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();

}

function setup() {

  createCanvas(600, 600);

}

function draw() {
  background(100);
  textSize(50);
  switch (myState) {

    case 0: // trigger the playing, and go immediately to the next state
      song1.play();
      myState = 1;  // go immediately (the next time) to the next state
      break;


    case 1:
    // hang out in here, put some lyrics or pictures or something while the song plays.
    // put pictures and shapes in here
    text("I want it that way!", 100,300);
    text("By: Backstreet Boys", 100,400);
      break;  // we would only leave state 1 with a mouseClick



    case 2: // trigger the playing, and go immediately to the next state
      song2.play();
      myState = 3;
      break;

    case 3:
    text("High five!", 100,300);
    text("By: Sigrid", 100,400);
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
    text("Old town road!", 100,300);
    text("By: Lil Nas X", 100,400);
      break;

  }


}

function mouseReleased() {
  myState++;

  // pause all the songs
  song1.pause();
  song2.pause();
  song3.pause();

  if (myState > 5) {
    myState = 0;
  }
}
