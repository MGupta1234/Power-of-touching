var rectangle1;
var rectangle2;


function setup() {
  createCanvas(800,400);
  rectangle1=createSprite(400,200,50,10);
  rectangle2=createSprite(200,100,50,10);
  rectangle1.shapeColor="red";
  rectangle2.shapeColor="red";
}

function draw() {
  background("black");
  rectangle2.x=mouseX;
  rectangle2.y=mouseY;
  console.log(rectangle2.y-rectangle1.y);
  if(rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2 &&
    rectangle1.x-rectangle2.x<rectangle2.width/2+rectangle1.width/2 &&
    rectangle1.y-rectangle2.y<rectangle2.height/2+rectangle1.height/2 &&
    rectangle2.y-rectangle1.y<rectangle2.height/2+rectangle1.height/2){
    rectangle2.shapeColor="pink";
    rectangle1.shapeColor="yellow"; 
  }else{
    rectangle1.shapeColor="red";
    rectangle2.shapeColor="red";
  }
  drawSprites();
}