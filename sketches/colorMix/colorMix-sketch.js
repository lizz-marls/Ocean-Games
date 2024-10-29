var landscape;
var w;
var h;
var r, g, b;

//load image in
function preload() {
  landscape = loadImage("../../assets/gameBackground1.png");
}


function setup() {
  createCanvas(windowWidth-5, windowHeight-5);

  w = width;
  h = height;
  
  r = 255;
  b= 255;
  g = 255;

  background(100);
  
  buildColorButton("redButton", "red", w/2-500, h/2+100 );
  buildColorButton("blueButton", "blue", w/2-300, h/2+100 );
  buildColorButton("greenButton", "green", w/2+100, h/2+100 );
  buildColorButton("whiteButton", "white", w/2+300, h/2+100 );

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
  
  fill(r, g, b);
  triangle(w/2+100, h/2-100, w/2+225,h/2, w/2+225, h/2-200);
  
  triangle(w/2-50, h/2+50, w/2-100,h/2-75, w/2, h/2-75);
  
  triangle(w/2-40, h/2-260, w/2-100,h/2-150, w/2-10, h/2-150);
  
  ellipse((w/2), (h/2)-100, 350, 200);
  
  triangle(w/2+40, h/2-90, w/2-30, h/2-68, w/2-30, h/2-115);
  
  circle(w/2-125, h/2-120, 25);
  
  fill(0, 0, 0);
  circle(w/2-127, h/2-122, 10);
  
  fill(r, g, b);
  arc(w/2-136, h/2-90, 75, 75, 0 + 2*HALF_PI/5 , HALF_PI+HALF_PI/2);
  
}

function buildColorButton(name, color, x, y){
  let button = createButton('');
  button.position(x, y);
  button.size(150, 150);
  
  button.style('background-color', color);
  button.style('border', '3px solid black');
  button.style('border-radius', '50%');
               
  button.mousePressed(() => {
    if(name === "redButton"){
    b-= 5;
    g -=5;
  } else if (name === "blueButton"){
    g -= 5;
    r -=5;
  } else if (name === "greenButton"){
    r-= 5;
    b -=5;
  } else{
    r+= 5;
    g += 5;
    b += 5;
  }
    
  });
  
  
}

function buildHomeButton(){
  
  //create button
  let button = createButton('HOME'); //button text 
  button.position((w-200) * 0.5, h * 0.9); //button position on screen
  button.size(200, 75);  // button size

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
