var jerry, jerryImg1, tom, tomImg1, tomImg2, tomImg3
var garden


function preload(){

  
  tomImg1 = loadAnimation("images/cat1.png")
  tomImg2 = loadAnimation("images/cat2.png","images/cat3.png")
  tomImg3 = loadAnimation("images/cat4.png")
  garden = loadImage("images/garden.png")
  jerryImg1 = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png")
}

function setup() {
  createCanvas(1000,800);

jerry = createSprite(200,600,20,20)
jerry.addAnimation("jerryJumping",jerryImg1);
jerry.scale = 0.5 

tom = createSprite(800,600,20,20)
tom.addAnimation("tomTalking",tomImg1);
tom.scale = 0.5 
}
function draw() {
  background(garden);  
//debug code
jerry.scale = 0.2
tom.scale = 0.3


  drawSprites();
}
function keyPressed(){

  if(keyCode === LEFT_ARROW ){
    tom.velocityX = -2;
    tom.addAnimation("running",tomImg2)
    tom.changeAnimation("running")
  }
  if(tom.isTouching(jerry)){
    //debug code
    //RIGHT_ARROW to stop
tom.velocityX = 0;
tom.changeAnimation("tomTalking ,cat4")
  }
}
