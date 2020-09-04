
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	paper1 = new paper(330,450,25);

	dustBin1 = new dustBin(900,530);

	ground1 = new Ground(width/2,640);


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();


  dustBin1.display();

  paper1.display();

  

  ground1.display();

  console.log(paper1.body);
  


	fill(0);
  text(mouseX +"," + mouseY,mouseX,mouseY);

 // keyPressed();

  
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:26,y:-26});

	}

}

