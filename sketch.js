var box
function setup() {
  createCanvas(400,400);
  box=createSprite(94, 118, 60, 60)
}

function draw() 
{
  background("green");

  if (keyDown("right")){
    box.x=box.x+5
  }

  if (keyDown("left")){
box.x=box.x-5
  }
if (keyDown("up")){
  box.y=box.y-5
}

if (keyDown("down")){
  box.y=box.y+5
}
  box.shapeColor="red"
drawSprites()
}




