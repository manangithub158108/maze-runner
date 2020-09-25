function preload(){
  gameOverImg = loadImage("gameOver.png");
  youWinImg = loadImage("youWin.png");
}

function setup() {
  createCanvas(900,500);
  bar1 = createSprite(150, 200, 20, 125);
  bar1.shapeColor = "blue";
  bar1.velocityY = -15;

  bar2 = createSprite(350, 200, 20, 125);
  bar2.shapeColor = "blue";
  bar2.velocityY = 21;

  bar3 = createSprite(550, 200, 20, 125);
  bar3.shapeColor = "blue";
  bar3.velocityY = -13;

  bar4 = createSprite(750, 200, 20, 125);
  bar4.shapeColor = "blue";
  bar4.velocityY = 18;

  goal = createSprite(900,height/2,90,200);
  goal.shapeColor = "green";

  boy = createSprite(10,height/2,15,15);
  boy.shapeColor = "red";

}

function draw() {
  background(0);  
  edges = createEdgeSprites();
  bar1.bounceOff(edges[2]);
  bar1.bounceOff(edges[3]);
  bar2.bounceOff(edges[2]);
  bar2.bounceOff(edges[3]);
  bar3.bounceOff(edges[2]);
  bar3.bounceOff(edges[3]);
  bar4.bounceOff(edges[2]);
  bar4.bounceOff(edges[3]);

  if(keyDown(RIGHT_ARROW)){
    boy.velocityX = 9;
  }

  if(keyDown(LEFT_ARROW)){
    boy.velocityX = -9;
  }

  drawSprites();

  if(boy.isTouching(bar1) || 
  boy.isTouching(bar2) || boy.isTouching(bar3)
   || boy.isTouching(bar4)){

    boy.destroy();

   var gameOver = createSprite(width/2,height/2,
    10,10);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.7;

  }

  if(boy.isTouching(goal)){
    youWin = createSprite(width/2,height/2,10,10);
    youWin.addImage(youWinImg);
    youWin.scale = 0.5;
  }

  
}