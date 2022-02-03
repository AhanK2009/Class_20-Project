
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
engine= Engine.create()
world=engine.world;
var ground_options={
  isStatic:true
}

ground=Bodies.rectangle(0,360,800,10,ground_options)
World.add(world,ground)




var ball_options={
  restitution:0.8
}
  


ball= Bodies.circle(100,10,20,ball_options)
World.add(world,ball)
var ball2_options={
  restitution:0.8
}
ball2= Bodies.circle(200,10,30,ball2_options)
World.add(world,ball2)
var ball3_options={
  restitution:0.8
}
ball3= Bodies.circle(50,10,40,ball3_options)
World.add(world,ball3)


}

function draw() 
{
  background(51);
  Engine.update(engine)
 ellipse(ball.position.x,ball.position.y,20)
 rect(ground.position.x,ground.position.y,800,10)
 ellipse(ball2.position.x,ball2.position.y,30)
 ellipse(ball3.position.x,ball3.position.y,40)
}

