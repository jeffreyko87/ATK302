
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background("#DEDCDD");
  noStroke();


  if (mouseIsPressed) {
    fill("#2baf7f");
    ellipse(570, 166, 250, 250);
    fill("#279e73");
    ellipse(568, 300, 300, 300);
    fill("#1e7a59");
    ellipse(590, 310, 300, 300);

    fill("#cdf8c6");
    ellipse(590, 162, 250, 250);

    fill("#36C99E");
    quad(472,155,454,252,734,251,718,157);
    fill("#36C99E");
    ellipse(596, 166, 250, 250);
    fill("#31b890");
    ellipse(596, 300, 300, 300);

    fill("#96F187");
    ellipse(600, 166, 206, 206);
    fill("#96F187");
    ellipse(600, 300, 270, 270);
    fill("#96F187");
    quad(502,133,473,273,719,250,703,153);

    fill("#EDE569");
    ellipse(605, 166, 160, 160);
    fill("#EDE569");
    ellipse(605, 300, 220, 220);
    fill("#EDE569");
    quad(529,144,501,287,708,294,683,154);

    //eyes
    fill("#370c65");
    ellipse(571,150, 60, 60);
    fill("#370c65");
    ellipse(645,155, 50, 50);

    fill("#fdf4d6");
    ellipse(571,155, 55, 55);
    fill("#fdf4d6");
    ellipse(645,160, 45, 45);

    fill("#7c2ebd");
    ellipse(571,155, 32, 32);
    fill("#7c2ebd");
    ellipse(645,160, 27, 27);

    fill("#fefaf2");
    ellipse(567,149, 11, 11);
    fill("#fefaf2");
    ellipse(641,156, 9, 9);

    //eyebrew
    fill("#13795b");
    quad(558,105,591,122,600,117,565,94);
    fill("#13795b");
    quad(629,119,634,127,657,115,651,105);

    //mouth
    fill("#f58248");
    triangle(579,189,613,226,639,194);
    fill("#f65d2c");
    triangle(602,209,625,211,614,227);

    //ball
    fill("#e1b41a");
    ellipse(610,310, 125, 125);
    fill("#c69e17");
    ellipse(605,315, 103, 103);
    fill("#b79215");
    ellipse(594,324, 80, 80);


    fill("#daa073");
    triangle(832,305,712,308,832,312);//line2
    fill("#daa073");
    triangle(839,285,654,290,836,291);//line1
    fill("#daa073");
    triangle(835,325,785,329,835,330);//line3


    fill("#804b22");
    ellipse(895,312, 140, 110);
    fill("#c07133");
    ellipse(898,309, 110, 90);
    fill("#d89b6b");
    ellipse(905,306, 85, 67);
    fill("#f0d9c7");
    ellipse(880,284, 25, 8);
    fill("#f0d9c7");
    ellipse(897,355, 40, 5);


    //shadow
    fill("#b6b1b4");
    ellipse(580,500, 230, 60);
    fill("#9a9397");
    ellipse(590,500, 150, 30);

    fill("#b6b1b4");
    ellipse(900,501, 120, 40);
    fill("#9a9397");
    ellipse(920,501, 70, 20);


  } else {
    fill("#2baf7f");
    ellipse(573, 166, 250, 250);
    fill("#279e73");
    ellipse(570, 300, 300, 300);
    fill("#1e7a59");
    ellipse(590, 310, 300, 300);

    fill("#cdf8c6");
    ellipse(590, 162, 250, 250);

    fill("#36C99E");
    quad(472,155,454,252,734,251,718,157);
    fill("#36C99E");
    ellipse(596, 166, 250, 250);
    fill("#31b890");
    ellipse(596, 300, 300, 300);


    fill("#96F187");
    ellipse(600, 166, 206, 206);
    fill("#96F187");
    ellipse(600, 300, 260, 260);
    fill("#96F187");
    quad(502,133,473,273,719,250,703,153);

    fill("#EDE569");
    ellipse(605, 166, 160, 160);
    fill("#EDE569");
    ellipse(605, 300, 210, 210);
    fill("#EDE569");
    quad(529,144,501,287,708,294,683,154);

    //eyes
    fill("#370c65");
    ellipse(571,150, 60, 60);
    fill("#370c65");
    ellipse(645,155, 50, 50);

    fill("#fdf4d6");
    ellipse(571,155, 55, 55);
    fill("#fdf4d6");
    ellipse(645,160, 45, 45);

    fill("#501e7a");
    ellipse(571,155, 30, 30);
    fill("#501e7a");
    ellipse(645,160, 25, 25);

    fill("#fefaf2");
    ellipse(567,149, 13, 13);
    fill("#fefaf2");
    ellipse(641,156, 10, 10);

    //eyebrew
    fill("#13795b");
    quad(558,97,557,107,590,112,593,103);
    fill("#13795b");
    quad(633,113,659,108,659,119,636,121);

    //mouth
    fill("#f58248");
    triangle(582,193,640,198,614,227);
    fill("#f65d2c");
    triangle(602,209,625,211,614,227);

    //ball
    fill("#e1b41a");
    ellipse(610,310, 125, 125);

    fill("#804b22");
    ellipse(610,310, 115, 115);
    fill("#c07133");
    ellipse(607,307, 100, 100);
    fill("#d89b6b");
    ellipse(604,304, 70, 70);
    fill("#f0d9c7");
    ellipse(588,282, 20, 20);



    //shadow
    fill("#b6b1b4");
    ellipse(580,500, 220, 60);
    fill("#9a9397");
    ellipse(590,500, 150, 30);



  }

}

function mouseReleased(){
  console.log(mouseX +',' +mouseY);

}
