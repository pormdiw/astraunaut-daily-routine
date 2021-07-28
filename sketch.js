 function preload(){ 
  
  bg = loadImage("images/iss.png"); 
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png"); 
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png"); 
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png"); 
  move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png")
  
}

function setup() {
  createCanvas(600,500);
  
  astraunaut = createSprite(300, 230);
  astraunaut = addImage("sleep.png")
  astraunaut.scale = 0.1;

}

function draw() {
  background(bg);  
  
if (keyDown(UP_ARROW)){
  
  astraunaut = addAnimation("brushing",brush)
  astraunaut = changeAnimation("brushing")
  astraunaut.y = 350;
  astraunaut.velocityX = 0;
  astraunaut.velocityY = 0;
  
}
  
if (keyDown(DOWN_ARROW)){
  
  astraunaut = addAnimation("gymming",gym)
  astraunaut = changeAnimation("gymming")
  astraunaut.y = 350;
  astraunaut.velocityX = 0;
  astraunaut.velocityY = 0;
  
}

if (keyDown(RIGHT_ARROW)){
  
  astraunaut = addAnimation("bathing",bath)
  astraunaut = changeAnimation("bathing")
  astraunaut.y = 350;
  astraunaut.velocityX = 0;
  astraunaut.velocityY = 0;
  
}
  
if (keyDown(LEFT_ARROW)){
  
  astraunaut = addAnimation("eating",eat)
  astraunaut = changeAnimation("eating")
  astraunaut.y = 350;
  astraunaut.velocityX = 0;
  astraunaut.velocityY = 0;
  
}

if (keyDown(m_key)){
  
  astraunaut = addAnimation("moving",move)
  astraunaut = changeAnimation("moving")
  astraunaut.y = 350;
  astraunaut.velocityX = 0;
  astraunaut.velocityY = 0;
  
}
 
 text("Instructions: Up Arrow = brushing Down Arrow = gymming Right Arrow = bathing  Left Arrow = eating m key = moving")
 
 drawSprites();
}