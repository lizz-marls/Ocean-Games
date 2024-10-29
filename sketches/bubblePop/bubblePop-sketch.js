var landscape;
var w;
var h;

let bubbles = [];
let score = 0;
let gameOver = false;
let bubbbleImage;

//load image in
function preload() {
  landscape = loadImage("../../assets/gameBackground2.png");  
  bubbleImage = loadImage("../../assets/bubble.png");
}

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  w = width-10;
  h = height-10;

  background(100);

  buildHomeButton();
  spawnBubbles(5);
  
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  // checks if the image is loaded before displaying it
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 5, 5, w, h);
  } else {
    console.log('Image not loaded');
  }
//Main Game loop
  if(!gameOver){
    drawGame();
  }else{
    displayGameOver();
  }
}

function drawGame(){

  //Display Bubbles
  for (let bubble of bubbles){
    bubble.move();
    bubble.display();
  }
  
  //Display Score
  fill(255);
  textSize(32);
  text(`Score: ${score}`, width / 2,40);
}

  //Display GAME OVER screen
//WORK ON
  function displayGameOver(){
    background(0);
    fill(255);
    textSize(48);
    text("Game Over!", width /2, height /2-40);
    text(`Final Score: ${score}`, width / 2, height / 2+40); 
  }

function spawnBubbles(num){
  //Spawn bubbles @ random
  for (let i = 0; i < num; i++){
    let x = random(width);
    let y = random(height);
    bubbles.push(new Bubble(x, y, bubbleImage));
  }
}

//bubble class
class Bubble{
  constructor(x, y, img){
    this.x = x;
    this.y = y;
    this.size = 100; //bubble size
    this.img = img;
    this.speedX = random(-2.5,2); //horiz speed
    this.speedY = random(-2.5,2); //vert speed 
  }
  //bubble movement
  move(){
    this.x += this.speedX;
    this.y += this.speedY;
    
  //bubble collision w wall
    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }
  
  //display bubble
  display(){
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size);
  }
  //check is user click bubble
  isClicked(px, py){
    let d = dist(px,py, this.x, this.y);
    return d < this.size/2;
  }
}

//Mouse click
function mousePressed(){
  for (let i = bubbles.length - 1; i>= 0; i--){
  if(bubbles[i].isClicked(mouseX, mouseY)){
    bubbles.splice(i, 1);//remove bubble
    score++; //add to score
    
    if (score == 10){
      gameOver = true;
    }
    spawnBubbles(1);
    break;
    }
  }
}
function buildHomeButton(){
  
  //create button
  let button = createButton('HOME'); //button text 
  button.position(w-155, 5); //button position on screen
  button.size(150, 75);  // button size

  //button properties
  button.style('background-color', 'white'); //button color
  button.style('border', '3px solid black'); 
  button.style('border-radius', '10px');  //rounds corners
  button.style('font-size', '36px') ;
  button.style('font-weight', 'bold');
  
  // redirect home on button click
  button.mousePressed(() => {
    window.location.href = "../../index.html"; 
  });
}
