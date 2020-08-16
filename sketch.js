var bullet,wall,barrier, thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 50, 40, 10);
  bullet.shapeColor = "white";

  barrier = createSprite(800,100,1600,5);
  barrier.shapeColor = "white";

  thickness = random(22,83);
  
  wall = createSprite(1200,50,thickness,45);
  wall.shapeColor = (80,80,80);

  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;

  if ((0.5 * weight * speed * speed)/(thickness * thickness * thickness) > 10) {
    bullet.shapeColor = "red";
  }

  if ((0.5 * weight * speed * speed)/(thickness * thickness * thickness) < 11) {
    bullet.shapeColor = "green";
  }
}

function draw() {
  background("grey");  
  drawSprites();

  if (wall.x - bullet.x < wall.width/2 + bullet.width/2) {
    bullet.velocityX = 0;
  }
}