var bottom,side1,side2,paper,options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 1600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bottom = createSprite(400,height-35,200,20);
    bottom.shapeColor='red';
	
	side1 = createSprite(300,height-85,20,100);
	side1.shapeColor='red';
 
	side2 = createSprite(500,height-85,20,100);
	side2.shapeColor='red';

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  ellipse(mouseX, mouseY, 55, 55);

  drawSprites();
}



