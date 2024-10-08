var landscape;

function preload() {
  // Preload the image to ensure it's fully loaded before using it
  landscape = loadImage("assets/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

  // Create the button and set up the redirect
  button = createButton('Go to Shape Match');
  button.position(150, 200);
  button.mousePressed(goToShapeMatch);
}

function draw() {
  // Check if the image is loaded before trying to display it
  if (landscape) {
    imageMode(CENTER);
    image(landscape, width / 2, height / 2);
  } else {
    console.log('Image not loaded');
  }
}

function goToShapeMatch() {
  // Redirect to shapeMatch.html page
  window.location.href = 'shapeMatch.html';
}
