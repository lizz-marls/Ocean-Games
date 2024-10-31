var landscape;
var w;
var h;

let sounds = [];
let animalNames = ['Dog', 'Cat', 'Chicken', 'Pig', 'Cow'];
let currentSoundIndex = -1;
let canClick = false;
let feedbackColor = 'white';
let speakerButton, homeButton, animalButtons = [];

//load image in
function preload() {
  landscape = loadImage("../../assets/gameBackground1.png");
  
  //sounds
    sounds[0] = loadSound('sounds/dog.mp3');
    sounds[1] = loadSound('sounds/cat.mp3');
    sounds[2] = loadSound('sounds/chicken.mp3');
    sounds[3] = loadSound('sounds/pig.mp3');
    sounds[4] = loadSound('sounds/cow.mp3');
}


function setup() {
  createCanvas(windowWidth-5, windowHeight-5);

  w = width;
  h = height;

  background(100);

  //speaker button:
    speakerButton = createButton('🎤'); //temporary emoji!
    speakerButton.position(width / 2 - 25, height / 2 + 50);
    speakerButton.size(50);
    speakerButton.mousePressed(playSound);
  //animal buttons:
    for (let i = 0; i < animalNames.length; i++) {
        let animalButton = createButton(animalNames[i]);
        animalButton.position(width / 2 + 100 * cos(PI / 5 * i) - 25, height / 2 - 100 * sin(PI / 5 * i) + 50);
        animalButton.size(70);
        animalButton.mousePressed(() => checkAnswer(i));
        animalButtons.push(animalButton);
    }
    
    noLoop();  
}

function draw() {
  
  // checks if the image is loaded before displaying it
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, w, h);
  } else {
    console.log('Image not loaded');
  }
  //button colors
    fill(feedbackColor);
    ellipse(width / 2, height / 2 + 50, 150, 150);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text('Click the Speaker!', width / 2, height / 2);
  
}

function playSound() {
    if (currentSoundIndex < 0) {
        currentSoundIndex = floor(random(sounds.length));
        sounds[currentSoundIndex].play();
        feedbackColor = 'white';
        canClick = true;
        setTimeout(() => {
            canClick = false;
        }, 1000);
    }
}

function checkAnswer(index) {
    if (canClick) {
        if (index === currentSoundIndex) {
            animalButtons[index].style('background-color', 'green');
            setTimeout(() => {
                animalButtons[index].style('background-color', 'white');
                currentSoundIndex = -1; // Reset sound index
                canClick = false; // Reset ability to click
            }, 1000);
        } else {
            animalButtons[index].style('background-color', 'red');
            setTimeout(() => {
                animalButtons[index].style('background-color', 'white');
                canClick = false; // Reset ability to click
            }, 3000);
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


