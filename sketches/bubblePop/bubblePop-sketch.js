var landscape;
var w;
var h;

//load image in
function preload() {
  landscape = loadImage("../../assets/gameBackground2.png"); //gameBackground2 has no bubbles
}


function setup() {
  createCanvas(windowWidth-5, windowHeight-5);

  w = width;
  h = height;

  background(100);

  buildHomeButton();
}

function draw() {
  
  // checks if the image is loaded before displaying it
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, w, h);
  } else {
    console.log('Image not loaded');
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
