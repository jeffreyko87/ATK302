var namesArray = [];
var rainbow;
var fontt;

function setup() {
  rainbow = loadImage("assets/rainbow.png");
  fontt = loadFont("assets/McLaren-Regular.ttf");

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1ctAR6FaKHnO3GeQb1BOw-5o5yfpuGguGEePE1i3DbTE'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(windowWidth, 600);
  textAlign(CENTER);
  noStroke();
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Nickname, data[i].Color));
  }

}


function draw() {
  background("#DBFBFE");

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();

  }
  image(rainbow, -200, -100, 1600, 500);
  textFont(fontt);
  textSize(30);
  fill(0);
  text("Welcome to Rainbow Rain!", 220, 250);
  text("Can you find which drop is yours?", 270, 300);
}


// my circle class
function Circle(myNickname, myColor) {
  this.pos = createVector(random(100, 1200), random(120, height));
  this.name = myNickname;
  this.color = myColor;
  this.vel = createVector(0, random(2, 5));
  this.size = random(90, 120);

  this.display = function() {
    if (this.color == "Red") {
      fill("#FE5C5C");
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    if (this.color == "Orange") {
      fill("#FD9B3A");
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    if (this.color == "Yellow") {
      fill("#FFED4C");
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    if (this.color == "Green") {
      fill("#C5FC6D");
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    if (this.color == "Blue") {
      fill("#54E0FC");
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    if (this.color == "Indigo") {
      fill("#027AF2");
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    if (this.color == "Purple") {
      fill("#7A02F2");
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }

    textSize(14);
    fill(255);
    text(this.name, this.pos.x, this.pos.y);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width + 20) this.pos.x = 0;
    if (this.pos.x < -20) this.pos.x = width;
    if (this.pos.y > height + 60) this.pos.y = 130;
    if (this.pos.y < -20) this.pos.y = height;
  }

}
