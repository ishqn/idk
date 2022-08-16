var PLAY = 1;
var END = 0;
gameState = PLAY;
var score = 0;
function preload(){
    backgroundImage=loadImage("floor.png");
    objectsImage=loadImage("obstacle1.png")
    pinkImage=loadImage("pinkboy.png")
}

function setup() {
 
    createCanvas(500,500);
    objectsGroup=new Group()
    ground = createSprite(500,100,100,10);
    ground.velocityX=-4;
    ground.x=ground.width/2;
    ground.visible=true;
    ground.addImage (backgroundImage);
    pink = createSprite (150,110,10,10);
  pink.addImage (pinkImage);
  pink.scale = 0.15;

  gameOver = createSprite (250,130,25,25);
  gameOver.scale = 0.35;
  gameOver.visible=false;

  
}

function draw() {
 
    if (gameState === PLAY){
        if(ground.x < 0) {
          ground.x=ground.width/2;
        }
        
        if (objectsGroup.isTouching(pink)){
            objectsGroup.destroyEach ();
            score = score + 1;   
        }
        
        if (keyWentDown (UP_ARROW)){
          pinkboy.velocityY = - 5;
        }
        
         if (keyWentDown (DOWN_ARROW)){
          pinkboy.velocityY = 5;
         }
    }
    drawSprites()
}
    
