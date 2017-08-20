function setup() {
  createCanvas(900, 750);
  background(255);
  noStroke();

  for (var i = 50; i <= 700; i = i + 160) {
    for (var j = 50; j <= 550; j = j + 160) {
      
      //row 1

      //col 1

      if (i == 50 && j == 50) {
        c = color(198,226,255);
        fill(c);
        rect(i,j,150,150);
        c=color(0,53,39);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(0,112,77);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(0,0,143);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 2

      if (i == 210 && j == 50) {
        c = color(180,21,0);
        fill(c);
        rect(i,j,150,150);
        c=color(157,16,0);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(0,72,45);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(0,64,152);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 3

      if (i == 370 && j == 50) {
        c = color(181,0,69);
        fill(c);
        rect(i,j,150,150);
        c=color(195,28,63);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(255,102,102);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(225,102,0);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 4

      if (i == 530 && j == 50) {
        c = color(255, 204, 0);
        fill(c);
        rect(i,j,150,150);
        c=color(255, 214, 51);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(255, 214, 51);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(255, 219, 77);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 5

      if (i == 690 && j == 50) {
        c = color(0,71,179);
        fill(c);
        rect(i,j,150,150);
        c=color(0,81,179);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(0,81,179);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(45, 134, 89);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //row 2

      //col 1

      if (i == 50 && j == 210) {
        c = color(0,204,153);
        fill(c);
        rect(i,j,150,150);
        c=color(0,153,0);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(0,179,0);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(26,26,0);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 2

      if (i == 210 && j == 210) {
        c = color(0,102,102);
        fill(c);
        rect(i,j,150,150);
        c=color(0,122,143);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(102,0,34);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(51,0,17);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 3

      if (i == 370 && j == 210) {
        c = color(255,214,41);
        fill(c);
        rect(i,j,150,150);
        c=color(255,230,128);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(179,217,255);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(204,235,255);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 4

      if (i == 530 && j == 210) {
        c = color(194,194,163);
        fill(c);
        rect(i,j,150,150);
        c=color(0,38,153);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(230,230,230);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(153,179,255);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 5

      if (i == 690 && j == 210) {
        c = color(255, 191, 128);
        fill(c);
        rect(i,j,150,150);
        c=color(255, 170, 128);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(255, 136, 77);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(255, 128, 128);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      // row 3

      //col 1

      if (i == 50 && j == 370) {
        c = color(77,0,25);
        fill(c);
        rect(i,j,150,150);
        c=color(255,179,179);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(255,128,128);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(255,102,102);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 2

      if (i == 210 && j == 370) {
        c = color(238,204,255);
        fill(c);
        rect(i,j,150,150);
        c=color(238,204,255);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(221,153,255);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(255,255,153);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 3

      if (i == 370 && j == 370) {
        c = color(0,51,204);
        fill(c);
        rect(i,j,150,150);
        c=color(77,77,255);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(217,102,255);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(230,0,0);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 4

      if (i == 530 && j == 370) {
        c = color(153, 0, 0);
        fill(c);
        rect(i,j,150,150);
        c=color(204, 0, 0);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(230, 46, 0);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(255, 71, 26);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 5

      if (i == 690 && j == 370) {
        c = color(255,204,204);
        fill(c);
        rect(i,j,150,150);
        c=color(255,170,128);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(255,102,26);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(255,163,26);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      // row 4
      
      //col 1
      if (i == 50 && j == 530) {
        c = color(20,20,82);
        fill(c);
        rect(i,j,150,150);
        c=color(40,77,0);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(153,77,0);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(230,92,0);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 2

      if (i == 210 && j == 530) {
        c = color(255,128,0);
        fill(c);
        rect(i,j,150,150);
        c=color(255,163,102);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(255,163,26);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(255,102,0);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 3

      if (i == 370 && j == 530) {
        c = color(89,0,179);
        fill(c);
        rect(i,j,150,150);
        c=color(89,0,179);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(77,38,0);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(102,51,0);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 4

      if (i == 530 && j == 530) {
        c = color(0, 204, 153);
        fill(c);
        rect(i,j,150,150);
        c=color(0, 179, 179);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(41, 82, 163);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(36, 71, 143);
        fill(c);
        rect(i+45,j+60,60,60);
      }

      //col 5

      if (i == 690 && j == 530) {
        c = color(38, 115, 77);
        fill(c);
        rect(i,j,150,150);
        c=color(71, 107, 107);
        fill(c);
        rect(i+15,j+20,120,120);
        c=color(51, 77, 77);
        fill(c);
        rect(i+27,j+30,95,95);
        c=color(31, 46, 46);
        fill(c);
        rect(i+45,j+60,60,60);
      }
    }
  }

  saveCanvas(c, 'albers', 'jpg');
}

function draw() {

}
