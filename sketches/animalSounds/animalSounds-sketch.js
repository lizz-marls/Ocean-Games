var landscape;
var w;
var h;

//sounds
let sounds = [];
let currentSoundIndex = -1;
let canClick = false;
let feedbackColor = 'white';

//buttons
let speakerButton = [];
let homeButton = [];

//loads images and sounds
function preload() {
 //sounds
    sounds[0] = loadSound('sounds/dog.mp3');
    sounds[1] = loadSound('sounds/cat.mp3');
    sounds[2] = loadSound('sounds/chicken.mp3');
    sounds[3] = loadSound('sounds/pig.mp3');
    sounds[4] = loadSound('sounds/cow.mp3');
  //image
  landscape = loadImage("../../assets/gameBackground1.png");  
}


function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  w = width;
  h = height;

  //speaker button:
    speakerButton = createButton('🔊');
    speakerButton.position(width / 2 - 25, height / 2 + 50);
    speakerButton.size(50);
    speakerButton.mousePressed(playSound);

  //home button
    buildHomeButton();

  //animal buttons
    buildAnimalButton("catButton", 'assets/cat.png', w/2-375, h/2+100);
    buildAnimalButton("dogButton", 'assets/dog.png', w/2-175, h/2+100);
    buildAnimalButton("cowButton", 'assets/cow.png', w/2+25, h/2+100);
    buildAnimalButton("chickenButton", 'assets/chicken.png', w/2-375, h/2+100);
    buildAnimalButton("pigButton", 'assets/pig.png', w/2+200, h/2+100);


} 


function draw() { 
  //checks if the image is loaded before displaying it
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, w, h);
  } else {
    console.log('Image not loaded');
  }
  
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

function buildAnimalButton(name, picture, x, y){
  let button = createButton('');
  button.position(x, y);
  button.size(150, 150);

  button.style('background-image', picture);
  button.style('border', '3px solid black');
  button.style('border-radius', '50%');

  button.mousePressed(() => {
    if(name == "catButton"){


    }
    else if(name == "dogButton"){


    }
    else if(name == "cowButton"){


    }
    else if(name == "chickenButton"){


    }
    else if(name == "pigButton")


})


}
