//create 5 animals
//create 1 sound button changes after every correct visual
//create correct(green) visual
//create incorrect (red) visual


var landscape;
var w;
var h;

const sounds = [];
let currentSoundIndex = -1;
let isPlaying = false;
let speakerImage;
let speakerButton = [];
let homeButton = [];
let animalButtons = [];
const animals = ["dog", "cat", "chicken", "pig", "cow"];
const animalImage = [];

let feedbackMessage = "Guess the Sound!";
let feedbackTimeout;

function preload() {
  //background
  landscape = loadImage("../../assets/gameBackground1.png");

  //speaker
  speakerImage = loadImage("speaker.png");

  //sounds
  sounds[0] = loadSound('sounds/dog.mp3');
  sounds[1] = loadSound('sounds/cat.mp3');
  sounds[2] = loadSound('sounds/chicken.mp3');
  sounds[3] = loadSound('sounds/pig.mp3');
  sounds[4] = loadSound('sounds/cow.mp3');

  //animals
  animalImage[0] = loadImage('icons/dog.png');
  animalImage[1] = loadImage('icons/cat.png');
  animalImage[2] = loadImage('icons/chicken.png');
  animalImage[3] = loadImage('icons/pig.png');
  animalImage[4] = loadImage('icons/cow.png');
  
}

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  w = width;
  h = height;

  //speaker button:
  buildSpeakerButton();

  //home button
  buildHomeButton();

  //animal buttons

  
  
}


function draw() {
  //checks if the image is loaded before displaying it
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, w, h);
  } else {
    console.log('Image not loaded');
  }

  //feedback message
  textSize(18);
  fill (0);
  textAlign(CENTER);
  text(feedbackMessage, w / 2, 50);

}



function playSound() {
  // If there's no current sound selected, choose a new one
  if (currentSoundIndex === -1) {
    currentSoundIndex = floor(random(sounds.length));
  }

  // Stop any currently playing sound
  sounds.forEach(sound => sound.stop());

  // Play the selected random sound
  sounds[currentSoundIndex].play();

  // Reset button colors
  resetButtonColors();
}
function resetButtonColors() {
  animalButtons.forEach(button => button.style('background-color', '')); // Clear colors
}

function guessSound(index) {
  if (index === currentSoundIndex) {
    animalButtons[index].style('background-color', 'green'); // Correct guess
    
    // Set a random congratulatory message
    const messages = ["Awesome!", "Amazing!", "Great Job!", "Fantastic!"];
    feedbackMessage = random(messages);

    // Clear the feedback message after a delay
    clearTimeout(feedbackTimeout);
    feedbackTimeout = setTimeout(() => {
      feedbackMessage = "Guess the Sound!";
    }, 2000); // 2-second delay

    // Reset the current sound index to allow for a new random sound next time
    currentSoundIndex = -1;
    setTimeout(resetButtonColors, 1000); // Clear colors after 1 second
  } else {
    animalButtons[index].style('background-color', 'red'); // Incorrect guess
  }
}

function buildHomeButton() {

  //create button
  let button = createButton('HOME'); //button text 
  button.position(w - 155, 5); //button position on screen
  button.size(150, 75);  // button size

  //button properties
  button.style('background-color', 'white'); //button color
  button.style('border', '3px solid black');
  button.style('border-radius', '10px');  //rounds corners
  button.style('font-size', '36px');
  button.style('font-weight', 'bold');

  // redirect home on button click
  button.mousePressed(() => {
    window.location.href = "../../index.html";
  });
}
function buildSpeakerButton() {
  let speakerButton = createButton('');

  speakerButton.position(w / 2 - 25, h / 2 + 50);
  speakerButton.size(buttonImage.width - 2, buttonImage.height - 2);
  speakerButton.style('background-image',`url(${buttonImage.canvas.toDataURL()})`);
  speakerButton.style('border', 'none');

  speakerButton.mousePressed(playSound);


}
function buildAnimalButton(animalImage, index, x, y) {
  let button = createButton('');

  button.position(x, y);
  button.size(animalImage[index].width, animalImage[index].height);
  button.style(animalImage[index], `url(${animalImage[index].canvas.toDataURL()})`);
  button.style('border', 'none');

  button.mousePressed(() => guessSound(index));
  animalButtons.push(button);
}
