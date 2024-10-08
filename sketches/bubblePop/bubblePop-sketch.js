var bubbbleBackground;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  
}

function draw() {
  imageMode(CENTER);
  image(bubbleBackground, width/2, height/2, width, height);

}

function preload() {
  bubbleBackground = loadImage('gameBackground2.png');
  
}
