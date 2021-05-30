
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	paper=new Paper (200,200,1);
	

	


	
  
}


function draw() {
 
  background(0);
  drawSprites();
  paper.display();
  ellipse(200,200,1).display();

 
}



