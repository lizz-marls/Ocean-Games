var landscape;
var w;
var h;

const targetShapeY = 300; // Adjusted Y value for all target shapes
const targetShapeY2 = 600; // Adjusted Y value for shuffled shapes
let shuffledCoords;
let targetShapeCoords;
let shapes = [];
let draggedShape = null;

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

  buildHomeButton(); 
}

function draw() {
  background(255); // Ensure the background is cleared each frame

  if (landscape) {
    imageMode(CORNER);
    image(landscape, 0, 0, w, h);
  } else {
    console.log('Image not loaded');
  }

  drawTargetShapes(targetShapeCoords);
  drawColoredShapes();
}

function getTargetShapeCoords() {
  const resultArr = new Array(5);
  const slice = width / 6;
  for (let i = 1; i <= 5; i++) {
    resultArr[i - 1] = slice * i;
  }
  return resultArr;
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
