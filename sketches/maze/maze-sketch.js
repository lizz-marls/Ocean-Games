var landscape;
var w;
var h;
var n;
let mazeLines = [];
var startPressed;
var endPressed;
var gameOver;



// Load image
function preload() {
  landscape = loadImage("../../assets/gameBackground1.png");
}

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);

  w = width;
  h = height;
  
  startPressed=false;
  endPressed = false;
  gameOver=false;
  

  background(100);

  // Display background image if loaded
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, w, h);
  } else {
    console.log("Image not loaded");
  }
  
  // Generate a random number for maze selection
  //n = floor(random(3) + 1);
  n=3;

  // Select the maze to build
  //only 1 maze right now, but option to put on others
  switch (n) {
    case 1:
      buildMaze1();
      break;
    case 2:
      buildMaze2();
      break;
    case 3:
      buildMaze3();
      break;
  }
  
  //draw square behind maze
  fill(255, 255, 255, 200);
  noStroke();
  square((w/2)-275, (h/2)-375,550);

  // Draw maze lines
  stroke(0);
  strokeWeight(5);
  for (let segment of mazeLines) {
    line(segment.x1, segment.y1, segment.x2, segment.y2);
  }
  
  //draw start box
  fill(0,200,0);
  stroke(0,150,0);
  strokeWeight(3);
  square((w/2)-260,(h/2)-325,50)
  
  //draw end
  fill(200,0,0);
  stroke(150, 0, 0);
  strokeWeight(3);
  square((w/2)+210, (h/2)+75, 50);

  buildHomeButton();
}

function draw() {

  
  if(!gameOver){
    
    if(mouseX>(w/2)-260 && mouseX<(w/2)-210 && mouseY>(h/2)-325 && mouseY<(h/2)-275){
          startPressed=true;
        }

        if(mouseX>(w/2)+210 && mouseX<(w/2)+260 && mouseY>(h/2)+75 && mouseY<(h/2)+125){
          if(startPressed){
            endPressed=true;
          }
        }
    
    switch(n){
      case 1:
        checkCollisionsMaze1();
        break;
      case 2:
        checkCollisionsMaze2();
        break;
      case 3:
        checkCollisionsMaze3();
        break;
        
      }    
    
    checkWin();

  } 
}
  
function checkCollisionsMaze1(){

  if(mouseX>(w/2)-270 && mouseX < (w/2)+270){
          if(mouseY>(h/2)-370 && mouseY < (h/2)+170){
            mouseDraw();
          }
        }

        //boundaries
        //border
        if(mouseX<(w/2)-240 || mouseX > (w/2)+240){
          resetMaze();
        }
        if(mouseY<(h/2)-340 || mouseY > (h/2)+140){
          resetMaze();
        }


        //inside lines
        //horizontal line near the top-left
        if(mouseY>(h/2)-260 && mouseY<(h/2)-240 && mouseX>(w/2)-260 && mouseX<(w/2)+140) {
        resetMaze(); 
        }

        //horizontal line near the middle
      if(mouseY>(h/2)-160 && mouseY<(h/2)-140 && mouseX>(w/2)-160 && mouseX<(w/2)+160) {
        resetMaze(); 
        }

        //horizontal line near the bottom-right
      if(mouseY>(h/2)-60 && mouseY<(h/2)-40 && mouseX>(w/2)+60 && mouseX<(w/2)+260) {
        resetMaze(); 
        }

         //left vertical inner line
      if(mouseX>(w/2)-160 && mouseX<(w/2)-140 && mouseY>(h/2)-160 && mouseY<(h/2)-60) {
        resetMaze();
        }

        //right vertical inner line
      if(mouseX>(w/2)+140 && mouseX<(w/2)+160 && mouseY>(h/2)-260 && mouseY<(h/2)-160) {
        resetMaze(); 
        }

        //vertical line near bottom-center
      if(mouseX>(w/2)+40 && mouseX<(w/2)+60 && mouseY>(h/2)-40 && mouseY<(h/2)+40) {
        resetMaze(); 
        }

        //Vertical line near the center
        if(mouseX>(w/2)-60 && mouseX<(w/2)-40 && mouseY<(h/2)-60 && mouseY>(h/2)-160){
          resetMaze();
        }

        //Horizantal line near bottom
        if (mouseY>(h/2)+40 && mouseY<(h/2)+60 && mouseX>(w/2)-160 && mouseX<(w/2)+160) {
        resetMaze();
      }
}

function checkCollisionsMaze2() {
  
  if(mouseX>(w/2)-270 && mouseX < (w/2)+270){
          if(mouseY>(h/2)-370 && mouseY < (h/2)+170){
            mouseDraw();
          }
        }

  //boundaries
  //border
  if(mouseX<(w/2)-240 || mouseX > (w/2)+240){
    resetMaze();
  }
  if(mouseY<(h/2)-340 || mouseY > (h/2)+140){
    resetMaze();
  }

  if(mouseY>(h/2)-260 && mouseY<(h/2)-240 && mouseX>(w/2)-260 && mouseX<(w/2)-140) {
    resetMaze();
  }
  
  if(mouseY>(h/2)-260 && mouseY<(h/2)-240 && mouseX>(w/2)-60 && mouseX<(w/2)+160) {
    resetMaze();
  }
  
  if(mouseX>(w/2)-160 && mouseX<(w/2)-140 && mouseY>(h/2)-260 && mouseY<(h/2)-140) {
    resetMaze();
  }
  
  if(mouseX>(w/2)+40 && mouseX<(w/2)+60 && mouseY>(h/2)-360 && mouseY<(h/2)-240) {
    resetMaze();
  }
  
  if(mouseY>(h/2)-160 && mouseY<(h/2)-140 && mouseX>(w/2)-160 && mouseX<(w/2)+160) {
    resetMaze();
  }
  
  if(mouseX>(w/2)-160 && mouseX<(w/2)-140 && mouseY>(h/2)-160 && mouseY<(h/2)-40) {
    resetMaze();
  }
  
  if(mouseY>(h/2)-60 && mouseY<(h/2)-40 && mouseX>(w/2)-60 && mouseX<(w/2)+160) {
    resetMaze();
  }
  
  if(mouseX>(w/2)+40 && mouseX<(w/2)+60 && mouseY>(h/2)-60 && mouseY<(h/2)+60) {
    resetMaze();
  }
  
  if(mouseY>(h/2)+40 && mouseY<(h/2)+60 && mouseX>(w/2)-160 && mouseX<(w/2)+260) {
    resetMaze();
  }
}

function checkCollisionsMaze3(){
  if(mouseX>(w/2)-270 && mouseX < (w/2)+270){
          if(mouseY>(h/2)-370 && mouseY < (h/2)+170){
            mouseDraw();
          }
        }

  //boundaries
  //border
  if(mouseX<(w/2)-240 || mouseX > (w/2)+240){
    resetMaze();
  }
  if(mouseY<(h/2)-340 || mouseY > (h/2)+140){
    resetMaze();
  }
  
  if(mouseY>(h/2)-260 && mouseY < (h/2)-240 && mouseX > (w/2)-160 && mouseX < (w/2)-40) {
    resetMaze();
  }
  
  if(mouseY > (h/2)-260 && mouseY < (h/2)-240 && mouseX > (w/2)+40 && mouseX < (w/2)+160) {
    resetMaze();
    }

  if(mouseX > (w/2)-160 && mouseX < (w/2)-140 && mouseY > (h/2)-260 && mouseY < (h/2)-160){
    resetMaze();
  }

  if(mouseX > (w/2)+40 && mouseX < (w/2)+60 && mouseY > (h/2)-360 && mouseY < (h/2)-240){
    resetMaze();
  } 
  
  if(mouseY > (h/2)-160 && mouseY < (h/2)-140 && mouseX > (w/2)-160 && mouseX < (w/2)-40){
    resetMaze();
  }
  
  if(mouseY > (h/2)-160 && mouseY < (h/2)-140 && mouseX > (w/2)+40 && mouseX < (w/2)+160){
    resetMaze();
  }
  
  if(mouseX > (w/2)-160 && mouseX < (w/2)-140 && mouseY > (h/2)-160 && mouseY < (h/2)-40){
    resetMaze();
  }
  
  if(mouseY > (h/2)-60 && mouseY < (h/2)-40 && mouseX > (w/2)-60 && mouseX < (w/2)+160){
    resetMaze();
  }
  
  if(mouseX > (w/2)-60 && mouseX < (w/2)-40 && mouseY > (h/2)-60 && mouseY < (h/2)+60){
    resetMaze();
  }
  
  if(mouseX > (w/2)+40 && mouseX < (w/2)+60 && mouseY > (h/2)-160 && mouseY < (h/2)-40){
    resetMaze();
  }
  
  if(mouseY > (h/2)+40 && mouseY < (h/2)+60 && mouseX > (w/2)-260 && mouseX < (w/2)-40){
    resetMaze();
  }
  
  if(mouseY > (h/2)+40 && mouseY < (h/2)+60 && mouseX > (w/2)+40 && mouseX < (w/2)+260){
    resetMaze();
  }
  
  
}

function checkWin(){
  if(startPressed && endPressed){
    displayGameOver();
  }
}

function displayGameOver() {
  gameOver = true;
  
  background(0);
  fill(255);
  textSize(48);
  text("Game Over!", (width / 2)-50, (height / 2) - 40);

  // Build reset button
  if (!document.getElementById('resetButton')) {
    buildResetButton(); // Create reset button if not one
  }
}

function resetMaze(){
  
  clear();
  startPressed = false;
  endPressed = false;
  gameOver=false;
  
  
  // Display background image if loaded
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, w, h);
  } else {
    console.log("Image not loaded");
  }
  
  //draw square behind maze
  fill(255, 255, 255, 200);
  noStroke();
  square((w/2)-275, (h/2)-375,550);

  // Draw maze lines
  stroke(0);
  strokeWeight(5);
  for (let segment of mazeLines) {
    line(segment.x1, segment.y1, segment.x2, segment.y2);
  }
  
  
  //draw start
  fill(0,200,0);
  stroke(0,150,0);
  strokeWeight(3);
  square((w/2)-260,(h/2)-325,50)
  
  //draw end
  fill(200,0,0);
  stroke(150, 0, 0);
  strokeWeight(3);
  square((w/2)+210, (h/2)+75, 50);
}

function buildMaze1() {
  // Define the maze lines
  mazeLines = [];
  
  //builds outer box
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)-350, x2: (w/2)+250, y2: (h/2)-350 });
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)+150, x2: (w/2)-250, y2: (h/2)-250 });
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)+150, x2: (w/2)+250, y2: (h/2)+150 });
  mazeLines.push({ x1: (w/2)+250, y1: (h/2)+50, x2: (w/2)+250, y2: (h/2)-350 });
  
  
  //builds inner lines (incremens 100)
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)-250, x2: (w/2)+150, y2: (h/2)-250 });
  
  mazeLines.push({ x1: (w/2)+150, y1: (h/2)-150, x2: (w/2)+150, y2: (h/2)-250 });
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)-150, x2: (w/2)+150, y2: (h/2)-150 });
  
  mazeLines.push({ x1: (w/2)-50, y1: (h/2)-50, x2: (w/2)-50, y2: (h/2)-150 });
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)-50, x2: (w/2)-150, y2: (h/2)-150 });
  
  mazeLines.push({ x1: (w/2)+50, y1: (h/2)-50, x2: (w/2)+250, y2: (h/2)-50 });
  
  mazeLines.push({ x1: (w/2)+50, y1: (h/2)+50, x2: (w/2)+50, y2: (h/2)-50 });
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)+50, x2: (w/2)+150, y2: (h/2)+50 });
  
  
}

function buildMaze2() {
  // Define the maze lines
  mazeLines = [];
  
  //builds outer box
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)-350, x2: (w/2)+250, y2: (h/2)-350 });
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)+150, x2: (w/2)-250, y2: (h/2)-250 });
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)+150, x2: (w/2)+250, y2: (h/2)+150 });
  mazeLines.push({ x1: (w/2)+250, y1: (h/2)+50, x2: (w/2)+250, y2: (h/2)-350 });
  
  
  //builds inner lines (incremens 100)
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)-250, x2: (w/2)-150, y2: (h/2)-250 });
  
  mazeLines.push({ x1: (w/2)-50, y1: (h/2)-250, x2: (w/2)+150, y2: (h/2)-250 });
  
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)-150, x2: (w/2)-150, y2: (h/2)-250 });
  
  mazeLines.push({ x1: (w/2)+50, y1: (h/2)-250, x2: (w/2)+50, y2: (h/2)-350 });
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)-150, x2: (w/2)+150, y2: (h/2)-150 });
  
  //mazeLines.push({ x1: (w/2)-50, y1: (h/2)-50, x2: (w/2)-50, y2: (h/2)-150 });
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)-50, x2: (w/2)-150, y2: (h/2)-150 });
  
  mazeLines.push({ x1: (w/2)-50, y1: (h/2)-50, x2: (w/2)+150, y2: (h/2)-50 });
  
  mazeLines.push({ x1: (w/2)+50, y1: (h/2)+50, x2: (w/2)+50, y2: (h/2)-50 });
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)+50, x2: (w/2)+250, y2: (h/2)+50 });
  
}

function buildMaze3() {
  // Define the maze lines
  mazeLines = [];
  
  //builds outer box
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)-350, x2: (w/2)+250, y2: (h/2)-350 });
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)+150, x2: (w/2)-250, y2: (h/2)-250 });
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)+150, x2: (w/2)+250, y2: (h/2)+150 });
  mazeLines.push({ x1: (w/2)+250, y1: (h/2)+50, x2: (w/2)+250, y2: (h/2)-350 });
  
  
  //builds inner lines (incremens 100)
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)-250, x2: (w/2)-50, y2: (h/2)-250 });
  
  mazeLines.push({ x1: (w/2)+50, y1: (h/2)-250, x2: (w/2)+150, y2: (h/2)-250 });
  
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)-150, x2: (w/2)-150, y2: (h/2)-250 });
  
  mazeLines.push({ x1: (w/2)+50, y1: (h/2)-250, x2: (w/2)+50, y2: (h/2)-350 });
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)-150, x2: (w/2)-50, y2: (h/2)-150 });
  
  mazeLines.push({ x1: (w/2)+50, y1: (h/2)-150, x2: (w/2)+150, y2: (h/2)-150 });
  
  mazeLines.push({ x1: (w/2)-150, y1: (h/2)-50, x2: (w/2)-150, y2: (h/2)-150 });
  
  mazeLines.push({ x1: (w/2)-50, y1: (h/2)-50, x2: (w/2)+150, y2: (h/2)-50 });
  
  mazeLines.push({ x1: (w/2)-50, y1: (h/2)+50, x2: (w/2)-50, y2: (h/2)-50 });
  
  
  mazeLines.push({ x1: (w/2)+50, y1: (h/2)-50, x2: (w/2)+50, y2: (h/2)-150 });
  
  
  mazeLines.push({ x1: (w/2)-250, y1: (h/2)+50, x2: (w/2)-50, y2: (h/2)+50 });
  
  mazeLines.push({ x1: (w/2)+50, y1: (h/2)+50, x2: (w/2)+250, y2: (h/2)+50 });
  
  
}

function mouseDraw(){
  
  stroke(0, 0, 150);
    strokeWeight(10);
    line(pmouseX, pmouseY, mouseX, mouseY);
  
  //detect if mouse hits maze lines
  for (let segment of mazeLines){
    if(mouseX == segment.x1 || mouseX ==segment.x2){
      stroke(0);
    }
  }
}

function buildResetButton() {
  let button = createButton('PLAY AGAIN');
  button.id('resetButton'); // Set an ID for easy access/removal
  button.position((w - 400) * 0.5, h * 0.9);
  button.size(400, 75);

  // Button properties
  button.style('background-color', 'white');
  button.style('border', '3px solid black');
  button.style('border-radius', '10px');
  button.style('font-size', '36px');
  button.style('font-weight', 'bold');

  // Click to reset the game
  button.mousePressed(() => {
    resetMaze();
    button.remove(); // Remove the button from the screen
  });
}

function buildHomeButton() {
  // Create button
  let button = createButton('HOME');
  button.position(w - 155, 5);
  button.size(150, 75);

  // Button properties
  button.style('background-color', 'white');
  button.style('border', '3px solid black');
  button.style('border-radius', '10px');
  button.style('font-size', '36px');
  button.style('font-weight', 'bold');

  // Redirect home on button click
  button.mousePressed(() => {
    window.location.href = "../../index.html";
  });
}
