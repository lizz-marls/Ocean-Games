var landscape;
var w;
var h;

function preload() {
  // Preload the image to ensure it's fully loaded before using it
  landscape = loadImage("../../assets/gameBackground1.png");
}

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);

  w = width-10;
  h = height-10;

  background(100);

  buildHomeButton();
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

function buildHomeButton(){
  let button = createButton('HOME');  // Empty label for the button
  button.position(w*.43, h*.9);          // Set the button's position
  button.size(165, 165);            // Set the size of the button (e.g., 50x50 pixels)
  
  // Apply CSS to make the button invisible
  button.style('background-color', 'white');
  button.style('border', 'black');
  button.style('border-radius', '75%'); 
  
  // Redirect to the provided URL on click
  button.mousePressed(() => {
    window.location.href = "../../index.html";
}
