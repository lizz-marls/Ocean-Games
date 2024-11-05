var landscape;
const sounds = [];
let currentSoundIndex = -1; // Index of the currently playing sound
let animalButtons = [];
let feedbackMessage = "Guess the Sound!"; // Default message
let feedbackTimeout; // Timeout for resetting the feedback message
const animalImage = [];
let speakerImage;

function preload() {
  landscape = loadImage("../../assets/gameBackground1.png");
   
  //speaker
   speakerImage = loadImage("/sketches/animalSounds/icons/speaker.png")
   //animals
   animalImage[0] = loadImage("/sketches/animalSounds/icons/dog.png");
   animalImage[1] = loadImage("/sketches/animalSounds/icons/cat.png");
   animalImage[2] = loadImage("/sketches/animalSounds/icons/chicken.png");
   animalImage[3] = loadImage("/sketches/animalSounds/icons/pig.png");
   animalImage[4] = loadImage("/sketches/animalSounds/icons/cow.png")

  sounds[0] = loadSound("/sketches/animalSounds/sounds/dog.mp3");
  sounds[1] = loadSound("/sketches/animalSounds/sounds/cat.mp3");
  sounds[2] = loadSound("/sketches/animalSounds/sounds/chicken.mp3");
  sounds[3] = loadSound("/sketches/animalSounds/sounds/pig.mp3");
  sounds[4] = loadSound("/sketches/animalSounds/sounds/cow.mp3");

}

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);

  w = width;
  h = height;

  // animal buttons
  buildAnimalButton(0); 
  buildAnimalButton(1);
  buildAnimalButton(2);
  buildAnimalButton(3);
  buildAnimalButton(4);


  // sound button
  let speakerButton = createButton('');
  speakerButton.position(w / 2 - 25, h / 2 + 50);
  speakerButton.size(speakerImage.width / 1.4, speakerImage.height / 1.45);
  speakerButton.style('background-image',`url(${speakerImage.canvas.toDataURL()})`);
  speakerButton.style('border', 'none');
  speakerButton.mousePressed(playSound);

  //home button
  buildHomeButton();
}

function draw() {
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, width, height);
  } else {
    console.log('Image not loaded');
  }

  // Display the feedback message
  textSize(18);
  fill(0);
  textAlign(CENTER);
  text(feedbackMessage, width / 2, 50);
}

function buildHomeButton() {
  // Create button
  let button = createButton('HOME'); // Button text 
  button.position(w - 155, 5); // Button position on screen
  button.size(150, 75);  // Button size

  // Button properties
  button.style('background-color', 'white'); // Button color
  button.style('border', '3px solid black'); 
  button.style('border-radius', '10px');  // Rounds corners
  button.style('font-size', '36px');
  button.style('font-weight', 'bold');

  // Redirect home on button click
  button.mousePressed(() => {
      window.location.href = "../../index.html"; 
  });
}

function buildAnimalButton(index){
  let button = createButton(''); 
  button.position(125, 100 + index * 50); 
  button.size(animalImage[index].width, animalImage[index].height);
  button.style('background-image',`url(${animalImage[index].canvas.toDataURL()})`);
  button.style('border', 'none');
  button.mousePressed(() => guessSound(index));
  animalButtons.push(button);
}


function guessSound(index) {
  // Check if the guessed index matches the currently playing sound index
  if (index === currentSoundIndex) {
    animalButtons[index].style('background-color', 'green'); // Correct guess
    
    // Set a random congratulatory message
    const messages = ["Awesome!", "Amazing!", "Great Job!", "Fantastic!"];
    feedbackMessage = random(messages);

    // Clear the feedback message after a delay
    clearTimeout(feedbackTimeout);
    feedbackTimeout = setTimeout(() => {
      feedbackMessage = "Guess the Sound!";
    }, 1500); // 2-second delay

    // Reset the current sound index to allow for a new random sound next time
    currentSoundIndex = -1;
    setTimeout(resetButtonColors, 1000); // Clear colors after 1 second
  } else {
    animalButtons[index].style('background-color', 'red'); // Incorrect guess
  }
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
