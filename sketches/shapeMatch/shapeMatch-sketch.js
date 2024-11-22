var landscape;
var w;
var h;


const targetShapeY = 300; // Adjusted Y value for all target shapes
const targetShapeY2 = 600; // Adjusted Y value for shuffled shapes
let shuffledCoords;
let targetShapeCoords;
let shapes = [];
let draggedShape = null;

let resetButtonVisible = false;

function preload() {
  landscape = loadImage("../../assets/gameBackground1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  w = width;
  h = height;

  background(100);

  targetShapeCoords = getTargetShapeCoords();
  shuffledCoords = shuffleArray([...targetShapeCoords]);

  initializeShapes(); 

  buildHomeButton(); 
}

function draw() {

  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, w, h);
  } else {
    console.log('Image not loaded');
  }

  drawTargetShapes(targetShapeCoords);
  drawColoredShapes();

  if (allShapesMatched() && !resetButtonVisible) {
    buildResetButton();
    resetButtonVisible = true;
  }
}

function getTargetShapeCoords() {
  const resultArr = new Array(5);
  const slice = width / 6;
  for (let i = 1; i <= 5; i++) {
    resultArr[i - 1] = slice * i;
  }
  return resultArr;
}

function initializeShapes() {
  shapes = []; 

  
  for (let i = 0; i < shuffledCoords.length; i++) {
    shapes.push({
      x: shuffledCoords[i],
      y: targetShapeY2,
      originalX: shuffledCoords[i],
      originalY: targetShapeY2,
      type: i,
      matched: false,
    });
  }
}


function drawTargetShapes(targetShapeCoords) {
  for (let i = 0; i < targetShapeCoords.length; i++) {
    const matchedShape = shapes.find(function(shape) {
      return shape.type === i && shape.matched;
    });

    if (matchedShape) {
      switch (matchedShape.type) {
        case 0:
          fill("red");
          drawHexagon(targetShapeCoords[i], targetShapeY, 60); 
          break;
        case 1:
          fill("green");
          square(targetShapeCoords[i] - 50, targetShapeY - 50, 100); 
          break;
        case 2:
          fill("purple");
          drawEquilateralTriangle(targetShapeCoords[i], targetShapeY, 120); 
          break;
        case 3:
          fill("orange");
          drawDiamond(targetShapeCoords[i], targetShapeY, 120); 
          break;
        case 4:
          fill("blue");
          circle(targetShapeCoords[i], targetShapeY, 120); 
          break;
      }
    } else {
      fill("black");
      switch (i) {
        case 0:
          drawHexagon(targetShapeCoords[i], targetShapeY, 60); 
          break;
        case 1:
          square(targetShapeCoords[i] - 50, targetShapeY - 50, 100);
          break;
        case 2:
          drawEquilateralTriangle(targetShapeCoords[i], targetShapeY, 120);
          break;
        case 3:
          drawDiamond(targetShapeCoords[i], targetShapeY, 120);
          break;
        case 4:
          circle(targetShapeCoords[i], targetShapeY, 120);
          break;
      }
    }
  }
}

function drawColoredShapes() {
  for (let shape of shapes) {
    if (!shape.matched) {
      switch (shape.type) {
        case 0:
          fill("red");
          drawHexagon(shape.x, shape.y, 60);
          break;
        case 1:
          fill("green");
          square(shape.x - 50, shape.y - 50, 100);
          break;
        case 2:
          fill("purple");
          drawEquilateralTriangle(shape.x, shape.y, 120);
          break;
        case 3:
          fill("orange");
          drawDiamond(shape.x, shape.y, 120);
          break;
        case 4:
          fill("blue");
          circle(shape.x, shape.y, 120);
          break;
      }
    }
  }
}

// Function to draw a hexagon
function drawHexagon(xc, yc, r) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = xc + cos(angle) * r;
    let y = yc + sin(angle) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function drawEquilateralTriangle(xc, yc, h) {
  let s = (2 * h) / sqrt(3);
  let x1 = xc;
  let y1 = yc - h / 2;
  let x2 = xc - s / 2;
  let y2 = yc + h / 2;
  let x3 = xc + s / 2;
  let y3 = yc + h / 2;
  triangle(x1, y1, x2, y2, x3, y3);
}

function drawDiamond(xc, yc, size) {
  let halfSize = size / 2;
  quad(
    xc,
    yc - halfSize,
    xc + halfSize,
    yc,
    xc,
    yc + halfSize,
    xc - halfSize,
    yc
  );
}

function mousePressed() {
  shapes.forEach(shape => {

    if (!shape.matched && dist(mouseX, mouseY, shape.x, shape.y) < 50) {
      draggedShape = shape;
    }
  });
}

function mouseDragged() {
  if (draggedShape) {
    draggedShape.x = mouseX;
    draggedShape.y = mouseY;
  }
}

function mouseReleased() {
  if (draggedShape) {
    let targetX = targetShapeCoords[draggedShape.type];
    let targetY = targetShapeY;


    if (dist(draggedShape.x, draggedShape.y, targetX, targetY) < 50) {
      draggedShape.x = targetX;
      draggedShape.y = targetY;
      draggedShape.matched = true;
    } 

    else {

      draggedShape.x = draggedShape.originalX;
      draggedShape.y = draggedShape.originalY;
    }

    draggedShape = null;
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function allShapesMatched() {
  return shapes.every(shape => shape.matched);
}

function buildHomeButton() {
  let button = createButton('HOME');
  button.position(w - 155, 5);
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

function buildResetButton() {
  let button = createButton('PLAY AGAIN');
  button.id('resetButton');
  button.position((w - 400) * 0.5, h * 0.9);
  button.size(400, 75);

  // Button properties
  button.style('background-color', 'white');
  button.style('border', '3px solid black');
  button.style('border-radius', '10px');
  button.style('font-size', '36px');
  button.style('font-weight', 'bold');

  
  button.mousePressed(() => {
    shuffledCoords = shuffleArray([...targetShapeCoords]);
    initializeShapes(); // Reset shapes
    button.remove(); // Remove reset button
    resetButtonVisible = false; // Hide the reset button
  });
}


