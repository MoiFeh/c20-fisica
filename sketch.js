const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball
let ground
let wegde;
let angle = 60;
let rock
let rock2

function preload() {

}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	let ball_options = {
		restitution: 0.95,
		frictionAir: 0.01
	}

	let ground_options = {
		isStatic: true
	}

	let rock_options = {
		restitution: 0.95
	}

	let rock2_options = {
		restitution: 0.50
	}

	ball = Bodies.circle(100, 10, 20, ball_options);
	World.add(world, ball);

	ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
	World.add(world, ground);

	rock = Bodies.rectangle(300, 50, 20, 20, rock_options);
	World.add(world, rock);

	rock2 = Bodies.rectangle(150, 50, 20, 20, rock2_options);
	World.add(world, rock2);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);

}


function draw() {
	background("lightgreen");
	Engine.update(engine);
	
	ellipse(ball.position.x, ball.position.y, 20);
	rect(ground.position.x, ground.position.y, 400, 20);
	rect(rock.position.x, rock.position.y, 20);
	rect(rock2.position.x, rock2.position.y, 20);


	drawSprites();

}



