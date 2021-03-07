  
var b2fixedRect, b1movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  tRect = createSprite(700, 400,80,30);
  tRect.shapeColor = "blue";
  tRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityX = +5;
  tRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  bounceOff(tRect,fixedRect);

  drawSprites();
}

