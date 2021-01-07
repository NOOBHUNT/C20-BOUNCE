var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="blue";
fixedRect.debug=true;


movingRect=createSprite(200,200,80,50);
movingRect.shapeColor="blue";
movingRect.debug=true;

movingRect.velocityX=5;
fixedRect.velocityX=-5;


}

function draw() {
  background(255,255,255);  
 // movingRect.x=mouseX;
 // movingRect.y=mouseY;
 var edges=createEdgeSprites();
 movingRect.bounceOff(edges)
 fixedRect.bounceOff(edges)

  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    
    ){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = movingRect.velocityX * (-1);
  }
  if(fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  ){
    movingRect.velocityY= movingRect.velocityX * (-1);
      fixedRect.velocityY = movingRect.velocityX * (-1);
  }

  drawSprites();
}
