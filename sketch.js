var jaxon, jaxonA;
var rua, ruaI;
var p1
var p2

function preload(){

  jaxonA = loadAnimation("Runner-1.png","Runner-2.png");
  ruaI = loadImage("path.png");

}

function setup(){
  
  createCanvas(400,400);
 
  rua = createSprite(200,500,20,20);
  rua.addImage("rua",ruaI);
  rua.velocityY = 7;
  rua.scale = 1.2;


  jaxon = createSprite(205,325,10,10);
  jaxon.addAnimation("jaxon",jaxonA);
  jaxon.scale = 0.08;

  p1 = createSprite(400,200,70,400);
  p1.visible = false;

  p2 = createSprite(0,200,86,400);
  p2.visible = false;

}

function draw() {
  background("black");

  if(rua.y > 400 ){
    rua.y = height/4;
  }

  jaxon.x = mouseX;

  jaxon.collide(p1);
  jaxon.collide(p2);

  drawSprites();
}