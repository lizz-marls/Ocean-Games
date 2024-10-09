var landscape;
var w;
var h;

function preload() {
  // Preload the image to ensure it's fully loaded before using it
  landscape = loadImage("../../assets/gameBackground1.png");
}

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);

  // Set width and height for the image and other elements
  w = width - 10;
  h = height - 10;

  // Draw initial background
  background(100);

  // Build the home button
  //buildHomeButton();
}

function draw() {
  // Check if the image is loaded before trying to display it
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 5, 5, w, h);
  } else {
    console.log('Image not loaded');
  }
}


