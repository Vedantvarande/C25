const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world, box,ball;
var ground;
var box1,box2,pig1,log1;
var box3,box4,pig2,log2;
var angry;
var Background,Backgroundimage;

function preload()
{
  Backgroundimage = loadImage("sprites/bg.png");

}

function setup()
 {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(600,390,1200,20);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);
  log1 = new Logs(810,260,300,PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2 = new Logs(810,180,300,PI/2);

  box5 = new Box(810,160,70,70);
  log3 = new Logs(760,120,150,PI/7);
  log4 = new Logs(870,120,150,-PI/7);

  angry = new Birds(100,100);

  



  /*var b=
  {
    restitution:0.8
  }
  //ball = Bodies.circle(200,100,20,b);
  //World.add(world,ball);

   var a= 
   {
     isStatic:true
   }*/

  //box=Bodies.rectangle(200,390,200,20,a);
  //World.add(world,box);
  //console.log(box.position.x);

 }

function draw() 
{
  background(Backgroundimage);
  Engine.update(engine);  
  //rectMode(CENTER);
 //rect(200,200,50,50);
 box1.display();
 box2.display();
 ground1.display();
 pig1.display();
 log1.display();
 box3.display();
 box4.display();
 log2.display();
 pig2.display();
 log3.display();
 log4.display();
 box5.display();
 angry.display();

 //rect(box.position.x,box.position.y,400,30);
 //ellipseMode(RADIUS);
 //ellipse(ball.position.x,ball.position.y,20,20);
  //drawSprites();
}