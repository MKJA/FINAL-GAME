
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImg, groundImg

function preload()
{
	backgroundImg = loadImage("./Assests/bgImg.png");
	groundImg = loadImage("./Assests/groundfinal.png");
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
  ground = createSprite(windowWidth/2-300, windowHeight-30, windowWidth+1500, 20);
  ground.addImage("ground",groundImg);
  ground.scale = 0.9;
  ground.velocityX = -2;
  //ground.visible = false;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  console.log(ground.x);
  if(ground.x < 0){
	ground.x = windowWidth/2+400;
  }
  

  drawSprites();
 
}



