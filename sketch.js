var landscape;

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(100);
}

function draw() {
  imageMode(CENTER);
  image(landscape, width/2, height/2);

}

function buildBackground(){
 landscape = loadImage('background.png');
}
