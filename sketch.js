var landscape;
var w;
var h;

function preload() {
  // Preload the image to ensure it's fully loaded before using it
  landscape = loadImage("assets/background.png");
}

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);

  w = width-10;
  h = height-10;
  
  background(100);
  

  //create buttons below for each screen
  buildButton(w*.05, h*.4, "sketches/colorMix/colorMix.html");
  buildButton(w*.24, h*.4, "sketches/maze/maze.html");
  buildButton(w*.4, h*.4, "sketches/bubblePop/bubblePop.html");
  buildButton(w*.75, h*.4, "sketches/shapeMatch/shapeMatch.html");
  buildButton(w*.875, h*.4, "sketches/animalSounds/animalSounds.html");
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

function buildButton(x, y, htmlLocation){
  let button = createButton('');  // Empty label for the button
  button.position(x, y);          // Set the button's position
  button.size(200, 200);            // Set the size of the button (e.g., 50x50 pixels)
  
  // Apply CSS to make the button invisible
  button.style('background-color', 'black');
  button.style('border', 'black');
  button.style('border-radius', '50%'); 
  
  // Redirect to the provided URL on click
  button.mousePressed(() => {
    window.location.href = htmlLocation;
    
  });
}
