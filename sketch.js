var fixed,moving;

function setup() {
  createCanvas(800,400);
  side=createEdgeSprites();
  fixed=createSprite(200, 200, 100, 60);
  moving=createSprite(600,200,60,100);
   fixed.shapeColor="green";
   moving.shapeColor="green";
  fixed.velocityX=3;
  moving.velocityX=-3;
}

function draw() {
  background(0);
  //moving.x=World.mouseX;
   //moving.y=World.mouseY;
  if(moving.x-fixed.x<fixed.width/2+moving.width/2 && fixed.x-moving.x<fixed.width/2+moving.width/2 && 
    moving.y-fixed.y<fixed.height/2+moving.height/2 && fixed.y-moving.y<fixed.height/2+moving.height/2){
   fixed.shapeColor="red";
   moving.shapeColor="red";
   fixed.velocityX=fixed.velocityX*(-1);
   moving.velocityX=moving.velocityX*(-1);
    }
  else{
    fixed.shapeColor="green";
    moving.shapeColor="green";
  } 
  if(fixed.isTouching(rightEdge)){
  fixed.bounceOff(rightEdge);
  }
  if(moving.isTouching(leftEdge)){
    moving.bounceOff(leftEdge);
    }
  drawSprites();
}