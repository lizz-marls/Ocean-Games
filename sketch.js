let currentScreen = "homeScreen";


function setup() {
  createCanvas(800, 550);

  button = createButton('Go to Shape Match');
  button.position(350, 300);
  button.mousePressed(() => {
    currentScreen = "shapeMatchScreen";  // Change the screen when button is pressed
  });
}

function draw() {
  buildBackground();
}

function buildBackground(){
  background(0, 0, 139);
}
