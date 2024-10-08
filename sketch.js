var landscape;
var w;
var h;

function preload() {
  // Preload the image to ensure it's fully loaded before using it
  landscape = loadImage("assets/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  w = width;
  h = height;
  
  background(100);
  

  //create buttons below for each screen
  buildButton(w*1.2, h*.5, "sketches/colorMix/colorMix.html");
  buildButton(w*1.4, h*.6, "sketches/maze/maze.html");
  buildButton(w*1.6, h*.65, "sketches/bubblePop/bubblePop.html");
  buildButton(w*1.8, h*.5, "sketches/shapeMatch/shapeMatch.html");
  buildButton(w*2, h*.5, "sketches/animalSounds/animalSounds.html");
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
  button.size(150, 150);            // Set the size of the button (e.g., 50x50 pixels)
  
  // Apply CSS to make the button invisible
  button.style('background-color', 'black');
  button.style('border', 'black');
  button.style('border-radius', '50%'); 
  
  // Redirect to the provided URL on click
  button.mousePressed(() => {
    window.location.href = htmlLocation;
    
  });
}
