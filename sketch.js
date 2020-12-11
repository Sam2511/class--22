//NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create(); //creates a variable engine that we can control/manipulate
  world = engine.world;


  var ground_options = {isStatic: true};
  //passing options to the ground
  ground = Bodies.rectangle(200, 380, 50, 50, ground_options);
  World.add(world, ground);

  var ball_options = {restitution: 1};
  ball = Bodies.circle(200,100,20 , ball_options);
  World.add(world,ball);

  
  console.log(ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER); //instructs to take the x & y as its centre
  rect(ground.position.x, ground.position.y, 400, 20);
 
   ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}

/*
ellipse - oval shape - two radii
 r1 = r2 ==> circle
ellipse(x, y, r1, r2);


Physics Engine - matter.js

1. Engine - Universe - Where all the physics laws are followed
    Matter.Engine
2. World - Where all the physical objects are added
    Matter.World
3. Bodies - Objects
    Matter.Bodies

NameSpacing -- nicknames to larger variables/functions
*/




























