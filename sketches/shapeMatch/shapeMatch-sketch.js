var landscape;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

}

function draw() {
  imageMode(CENTER);
  image(landscape, width, height);
}

function preload(){
  landscape = loadImage('assets/gameBackground1.png');
  
