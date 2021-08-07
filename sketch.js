var spaceCraft, hasDocked, bg
var issIMG, spaceIMG, spacecraft1IMG, spacecraft2IMG, spacecraft3IMG, spacecraft4IMG

function preload() {
  issIMG = loadImage("images/iss.png");
  spaceIMG = loadImage("images/spacebg.jpg");
  spacecraft1IMG = loadImage("images/spacecraft1.png");
  spacecraft2IMG = loadImage("images/spacecraft2.png");
  spacecraft3IMG = loadImage("images/spacecraft3.png");
  spacecraft4IMG = loadImage("images/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
  var iss = createSprite(400, 200, 50, 50);

  bg = createsprite (100,100,50,50);
  bg.addImage("background", spaceIMG);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}