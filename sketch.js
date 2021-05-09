const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var girl;
var snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8, snow9, snow10;

function preload() {
  bg = loadImage("snowyBG.jpg");
  song = loadSound("song.mp3");
}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  song.play();

  girl = new Girl(900, 200);
  snow1 = new SnowClass(30, 50);
  snow2 = new snowclass(120, 50);
  snow3 = new SnowClass(220, 50);
  snow4 = new snowclass(320, 50);
  snow5 = new SnowClass(420, 50);
  snow6 = new snowclass(520, 50);
  snow7 = new SnowClass(620, 50);
  snow8 = new snowclass(720, 50);
  snow9 = new SnowClass(820, 50);
  snow10 = new snowclass(920, 50);
}

function draw() {
  background(bg);

  girl.display();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
}