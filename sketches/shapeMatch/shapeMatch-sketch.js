let bubbleBackground;
const targetShapeY = 250;
const targetShapeY2 = 500;
let shuffledCoords;
let targetShapeCoords;
let shapes = [];
let draggedShape = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
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
}

function draw() {
  imageMode(CENTER);
  image(bubbleBackground, width / 2, height / 2);

  rectMode(CENTER);

 
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
          circle(targetShapeCoords[i], targetShapeY, 100);
          break;
        case 1:
          fill("green");
          square(targetShapeCoords[i], targetShapeY, 100);
          break;
        case 2:
          fill("purple");
          drawEquilateralTriangle(targetShapeCoords[i], targetShapeY, 100);
          break;
        case 3:
          fill("orange");
          drawDiamond(targetShapeCoords[i], targetShapeY, 100);
          break;
        case 4:
          fill("blue");
          circle(targetShapeCoords[i], targetShapeY, 100);
          break;
      }
    } 
    
    else {
      
      fill("black");
      switch (i) {
        case 0:
          circle(targetShapeCoords[i], targetShapeY, 100);
          break;
        case 1:
          square(targetShapeCoords[i], targetShapeY, 100);
          break;
        case 2:
          drawEquilateralTriangle(targetShapeCoords[i], targetShapeY, 100);
          break;
        case 3:
          drawDiamond(targetShapeCoords[i], targetShapeY, 100);
          break;
        case 4:
          circle(targetShapeCoords[i], targetShapeY, 100);
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
          circle(shape.x, shape.y, 100);
          break;
        case 1:
          fill("green");
          square(shape.x, shape.y, 100);
          break;
        case 2:
          fill("purple");
          drawEquilateralTriangle(shape.x, shape.y, 100);
          break;
        case 3:
          fill("orange");
          drawDiamond(shape.x, shape.y, 100);
          break;
        case 4:
          fill("blue");
          circle(shape.x, shape.y, 100);
          break;
      }
    }
  }
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

function preload() {
  bubbleBackground = loadImage("Copy of Master Project GUI Story-Board.png");
}
