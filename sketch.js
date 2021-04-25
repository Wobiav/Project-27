
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);


	bobObject1 = new Bob(400,500, 60);
	bobObject2 = new Bob(460,500, 60);
	bobObject3 = new Bob(520,500, 60);
	bobObject4 = new Bob(340,500, 60);
	bobObject5 = new Bob(280,500, 60);



	roof1 = new roof(400, 200, 300, 30);
	//roof1=new roof(width/2,height/4,width/7,20);

	rope1 = new rope(roof1.body, bobObject1.body,0,0 );
	rope2 = new rope(roof1.body, bobObject2.body, 60, 0 );
	rope3 = new rope(roof1.body, bobObject3.body, 120, 0 );
	rope4 = new rope(roof1.body, bobObject4.body, -60, 0 );
	rope5 = new rope(roof1.body, bobObject5.body, -120, 0 );
	
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-100,y:-45});

	}
}
