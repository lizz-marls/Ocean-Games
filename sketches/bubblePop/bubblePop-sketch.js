var landscape;
var w;
var h;

let bubbles = [];
let score = 0;
let gameOver = false;
let bubbleImage;

// Load image in
function preload() {
  landscape = loadImage("../../assets/gameBackground2.png");  
  bubbleImage = loadImage("../../assets/bubble.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width;
  h = height;

  background(100);

  buildHomeButton();
  spawnBubbles(5);
  
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  // Checks if the image is loaded before displaying it
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, w, h);
  } else {
    console.log('Image not loaded');
  }
  
  // Main Game Loop
  if (!gameOver) {
    drawGame();
  } else {
    displayGameOver();
  }
}

function drawGame() {
  // Display Bubbles
  for (let bubble of bubbles) {
    bubble.move();
    bubble.display();
  }
  
  // Display Score
  fill(255);
  textSize(32);
  text(`Score: ${score}`, width / 2, 40);
}

// Display GAME OVER screen
function displayGameOver() {
  background(0);
  fill(255);
  textSize(48);
  text("Game Over!", width / 2, height / 2 - 40);
  text(`Final Score: ${score}`, width / 2, height / 2 + 40);

  // Build reset button
  if (!document.getElementById('resetButton')) {
    buildResetButton(); // Create reset button only if it doesn't already exist
  }
}

function spawnBubbles(num) {
  // Spawn bubbles at random positions
  for (let i = 0; i < num; i++) {
    let x = random(150, width - 150);
    let y = random(150, height - 150);
    bubbles.push(new Bubble(x, y, bubbleImage));
  }
}

// Bubble class
class Bubble {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.size = 130; // Bubble size
    this.img = img;
    this.speedX = random(1, 4); // Horizontal speed
    this.speedY = random(1, 4); // Vertical speed
  }

  // Bubble movement
  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bubble collision with wall
    if (this.x < 115 || this.x > width - 115) {
      this.speedX *= -1;
    }
    if (this.y < 65 || this.y > height - 65) {
      this.speedY *= -1;
    }
  }
  
  // Display bubble
  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size);
  }

  // Check if user clicked bubble
  isClicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    return d < this.size / 2;
  }
}

// Mouse click handler
function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].isClicked(mouseX, mouseY)) {
      bubbles.splice(i, 1); // Remove bubble
      score++; // Add to score
      
      if (score == 10) {
        gameOver = true;
      }
      spawnBubbles(1);
      break;
    }
  }
}

// Build reset button
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
    score = 0;
    gameOver = false; // Change game state back to playing
    bubbles = [];
    spawnBubbles(5); // Restart with initial bubbles
    button.remove(); // Remove the button from the screen
  });
}

// Build home button
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
