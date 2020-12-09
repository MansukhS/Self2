var Anamatronics;
var Freddy;
var Foxy;
var Ballora;
var GoldenFreddy;
var Nightmare;
var NightmareFredbear;
var ScrapBaby;
var Glitchtrap;
var Puppet; 
var Springtrap;

var Mansukh;

var FreddyImg, FoxyImg, BalloraImg, GoldenFreddyImg;
var NightmareImg, NightmareFredbearImg,ScrapBabyImg,GlitchtrapImg; 
var PuppetImg, SpringtrapImg;

var BalloraS;

function preload(){
  FreddyImg = loadImage("images/freddy.png");
  FoxyImg = loadImage("images/Foxy.png");
  BalloraImg = loadImage('images/Ballora2.png');
  GoldenFreddyImg = loadImage("images/GF.png");
  NightmareImg = loadImage("images/Nightmare.png");
  NightmareFredbearImg = loadImage("images/NightmareFredbear.png");
  ScrapBabyImg = loadImage('images/Scrapbaby2.png');
  GlitchtrapImg = loadImage('images/Glitchtrap3.png');
  PuppetImg = loadImage('images/Puppet.png');
  SpringtrapImg = loadImage('images/Springtrap.png');

  BalloraS = loadSound('sounds/Balloras Song2.0.mp3');
}

function setup() {
  createCanvas(600,200);

  //Player = createSprite(300,150);
  
}

function draw() {
  background(0);
  
  /*if(keyDown('B')){
    BalloraS.play();
  }
  
  if(keyDown('Space')){
   Ballora.y = Ballora.y -5;
  }
  if(keyDown('S')){
    Ballora.y = Ballora.y +5;
  }
  if(keyDown('A')){
    Ballora.x = Ballora.x -5;
  }
  if(keyDown('W')){
    Ballora.x = Ballora.x  +5;
  } */
  spawnObstacles();
  drawSprites();

}

function spawnObstacles(){
  if(frameCount % 60 === 0){
    Freddy = createSprite(600,100, 10,50);
    Freddy.velocityX = -2;
    Freddy.scale = 0.5;
    Freddy.lifetime = 300;
    
    var rand = Math.round(random(1,10));

    switch(rand){
      case 1: Freddy.addImage(FreddyImg);
           break;
      case 2: Foxy.addImage(FoxyImg);
           break;
      case 3: Ballora.addImage(BalloraImg);
           break;
      case 4: GoldenFreddy.addImage(GoldenFreddyImg); 
            break;
      case 5: Nightmare.addImage(NightmareImg);    
            break;
      case 6: NightmareFredbear.addImage(NightmareFredbearImg);  
            break;
      case 7: ScrapBaby.addImage(ScrapBabyImg);
            break;
      case 8: Puppet.addImage(PuppetImg);
           break;
      case 9: Glitchtrap.addImage(GlitchtrapImg);
            break;
      case 10: Springtrap.addImage(SpringtrapImg);
            break;
      default: break;
    } 

    /*Foxy = createSprite(100,300,50,50);
    Foxy.scale = 0.5;
  
    Ballora = createSprite(1000,900,50,50);
    Ballora.scale = 0.6;
   
    GoldenFreddy = createSprite(667,900,50,50);
    GoldenFreddy.scale = 0.5;
  
    Nightmare = createSprite(900,600,50,50);
    Nightmare.scale = 0.5;
  
    NightmareFredbear = createSprite(600,300,50,50);
    NightmareFredbear.scale = 0.5;
  
    ScrapBaby = createSprite(1500,900,50,50);
    ScrapBaby.scale = 0.5;
  
    Glitchtrap = createSprite(200,800,50,50);
    Glitchtrap.scale = 0.5;
  
    Puppet = createSprite(1200,500,100,100);
    Puppet.scale = 1.0;
  
    Springtrap = createSprite(1200,1000,50,50);
    Springtrap.scale = 0.5; */

  
  }
} 