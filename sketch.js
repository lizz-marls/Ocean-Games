var landscape;

function preload() {
  // Preload the image to ensure it's fully loaded before using it
  landscape = loadImage("assets/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

  //create buttons below for each screen
  buildButton(100, 100, "sketches/colorMix/colorMix.html");
  buildButton(200, 100, "sketches/maze/maze.html");
  buildButton(300, 100, "sketches/bubblePop/bubblePop.html");
  buildButton(400, 100, "sketches/shapeMatch/shapeMatch.html");
  buildButton(500, 100, "sketches/animalSounds/animalSounds.html");
}

function draw() {
  // Check if the image is loaded before trying to display it
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, width, height);
  } else {
    console.log('Image not loaded');
  }
}

function buildButton(x, y, htmlLocation){
  let button = createButton('');  // Empty label for the button
  button.position(x, y);          // Set the button's position
  button.size(50, 50);            // Set the size of the button (e.g., 50x50 pixels)
  
  // Apply CSS to make the button invisible
  button.style('background-color', 'black');
  button.style('border', 'black');
  button.style('border-radius', '50%'); 
  
  // Redirect to the provided URL on click
  button.mousePressed(() => {
    window.location.href = htmlLocation;
    
  });
}
