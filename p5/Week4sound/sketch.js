
var song;

function preload(){
  song=loadSound("assets/grand-cookie.mp3");
}


function setup() {
  createCanvas(800,800);
  background(100,0,0);
  song.play();
}

function draw() {

}


function mouseReleased(){
  song.stop();
}
