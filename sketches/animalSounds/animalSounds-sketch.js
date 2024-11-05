var landscape;
const sounds = [];
let currentSoundIndex = -1; 
let animalButtons = [];
let feedbackMessage = "Guess the Sound!"; 
let feedbackTimeout;
const animalImage = [];
let speakerImage;

function preload() {
  landscape = loadImage("../../assets/gameBackground1.png");
  speakerImage = loadImage("icons/speaker.png");
  animalImage[0] = loadImage("icons/dog.png");
  animalImage[1] = loadImage("icons/cat.png");
  animalImage[2] = loadImage("icons/chicken.png");
  animalImage[3] = loadImage("icons/pig.png");
  animalImage[4] = loadImage("icons/cow.png");
  sounds[0] = loadSound("sounds/dog.mp3");
  sounds[1] = loadSound("sounds/cat.mp3");
  sounds[2] = loadSound("sounds/chicken.mp3");
  sounds[3] = loadSound("sounds/pig.mp3");
  sounds[4] = loadSound("sounds/cow.mp3");
}

function setup() {
  let w = width;
  let h = height;

  createCanvas(windowWidth - 5, windowHeight - 5);

  // Animal buttons
  buildAnimalButton(0); 
  buildAnimalButton(1);
  buildAnimalButton(2);
  buildAnimalButton(3);
  buildAnimalButton(4);

  // Sound button
  let speakerButton = createButton('');
  speakerButton.position(w / 2 - 25, h / 2 + 50);
  speakerButton.size(100, 100);
  speakerButton.style('background-image', 'url(icons/speaker.png)');
  speakerButton.style('background-size', 'cover');
  speakerButton.style('border', 'none');
  speakerButton.mousePressed(playSound);

  // Home button
  buildHomeButton();
}

function draw() {
  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, width, height);
  } else {
    console.log('Image not loaded');
  }

  textSize(18);
  fill(0);
  textAlign(CENTER);
  text(feedbackMessage, width / 2, 50);
}

function buildHomeButton() {
  let button = createButton('HOME');
  button.position(width - 155, 5);
  button.size(150, 75);
  button.style('background-color', 'white');
  button.style('border', '3px solid black'); 
  button.style('border-radius', '10px');
  button.style('font-size', '36px');
  button.style('font-weight', 'bold');
  button.mousePressed(() => {
      window.location.href = "../../index.html"; 
  });
}

function buildAnimalButton(index){
  let animalButton = createButton(''); 
  animalButton.position(125, 100 + index * 50); 
  animalButton.size(50, 50);
  animalButton.style('background-image', `url(icons/${["dog", "cat", "chicken", "pig", "cow"][index]}.png)`);
  animalButton.style('background-size', 'cover');
  animalButton.style('border', 'none');
  animalButton.mousePressed(() => guessSound(index));
  animalButtons.push(animalButton);
}

function guessSound(index) {
  if (index === currentSoundIndex) {
    animalButtons[index].style('background-color', 'green');
    const messages = ["Awesome!", "Amazing!", "Great Job!", "Fantastic!"];
    feedbackMessage = random(messages);
    clearTimeout(feedbackTimeout);
    feedbackTimeout = setTimeout(() => {
      feedbackMessage = "Guess the Sound!";
    }, 1500); 
    currentSoundIndex = -1;
    setTimeout(resetButtonColors, 1000); 
  } else {
    animalButtons[index].style('background-color', 'red');
  }
}

function playSound() {
  if (currentSoundIndex === -1) {
    currentSoundIndex = floor(random(sounds.length));
  }
  sounds.forEach(sound => sound.stop());
  sounds[currentSoundIndex].play();
  resetButtonColors();
}

function resetButtonColors() {
  animalButtons.forEach(button => button.style('background-color', ''));
}
