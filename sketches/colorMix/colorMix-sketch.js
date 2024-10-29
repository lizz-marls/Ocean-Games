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
  
  buildColorButton("redButton", "red", w/2-300, h/2+100 );
  buildColorButton("blueButton", "blue", w/2-100, h/2+100 );
  buildColorButton("greenButton", "green", w/2+100, h/2+100 );
  buildColorButton("whiteButton", "white", w/2+300, h/2+100 );
  
  buildResetButton(); 

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
  triangle(w/2+110, h/2-110, w/2+235,h/2, w/2+235, h/2-210);
  
  triangle(w/2-60, h/2+60, w/2-110,h/2-85, w/2-10, h/2-85);
  
  
  triangle(w/2-50, h/2-270, w/2-110,h/2-160, w/2-20, h/2-160);
  
  ellipse((w/2)-20, (h/2)-100, 350, 220);
  
  triangle(w/2+80, h/2-100, w/2-20, h/2-80, w/2-20, h/2-130);
  
  circle(w/2-135, h/2-130, 30);
  
  fill(0, 0, 0);
  circle(w/2-137, h/2-132, 15);
  
  fill(r, g, b);
  arc(w/2-155, h/2-90, 80, 80, 0 + 2*HALF_PI/5 , HALF_PI+HALF_PI/2);
  
}

function buildResetButton(){
  let button = createButton('RESET'); //button text 
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
    r =255;
    b = 255;
    g=255;
  });
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
    b-= 15;
    g -=15;
  } else if (name === "blueButton"){
    g -= 15;
    r -=15;
  } else if (name === "greenButton"){
    r-= 15;
    b -=15;
  } else{
    r+= 15;
    g += 15;
    b += 15;
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
