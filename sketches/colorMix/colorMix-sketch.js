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
  
  buildColorButton("redButton", "red", w/2-375, h/2+100 );
  buildColorButton("blueButton", "blue", w/2-175, h/2+100 );
  buildColorButton("greenButton", "green", w/2+25, h/2+100 );
  buildColorButton("whiteButton", "white", w/2+225, h/2+100 );

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
  
  ellipse((w/2)-20, (h/2)-100, 350, 200);
  
  triangle(w/2+80, h/2-100, w/2-20, h/2-80, w/2-20, h/2-130);

  fill("white");
  circle(w/2-135, h/2-130, 30);
  
  fill(0, 0, 0);
  circle(w/2-137, h/2-132, 15);
  
  fill(r, g, b);
  arc(w/2-153, h/2-90, 80, 80, 0 + 2*HALF_PI/5 , HALF_PI+HALF_PI/2);
  
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
    b-= 10;
    g -=10;
  } else if (name === "blueButton"){
    g -= 10;
    r -= 10;
  } else if (name === "greenButton"){
    r-= 10;
    b -= 10;
  } else{
    r+= 10;
    g += 10;
    b += 10;
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
