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
  
   //create button
  let button = createButton('HOME'); //button text 
  button.position((w-200) * 0.5, h * 0.9); //button position on screen
  button.size(200, 75);  // button size

  //button properties
  button.style('background-color', 'white'); //button color
  button.style('border', '2px solid black'); 
  button.style('border-radius', '10px');  //rounds corners
  button.style('font-size', '36px') ;
  button.style('font-weight', 'bold');
  
  // redirect home on button click
  button.mousePressed(() => {
    window.location.href = "../../index.html"; 
  });
}
