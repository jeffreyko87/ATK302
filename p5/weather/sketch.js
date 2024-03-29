var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x=0;
var ws=0;
var temperature=0;

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  noStroke();

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=1129e74d66d87dc34d175a883ef4efe3'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws=weather.wind.speed;
  temperature=weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    fill(0);
    text("we have weather", 20, 20) ;
// parse the weather object and put some text for some at least 3 different weather data!
  text("The temperature is: "+weather.main.temp, 20,40);
    text("The humidity is: "+weather.main.humidity, 20,60);
      text("The wind speed is: "+weather.wind.speed, 20,80);

      fill(255);
      ellipse(x,250,200,100);
      x=x+ws/2;
      if(x>width+120){
        x=-100;
      }

      fill("red");
      var tmp=0;
      tmp=map(temperature, -10,90,2,height-10);
      rect(width-40,height-10,30,-tmp);
      break;

  }
}
