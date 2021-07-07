var bow , arrow,  scene;
var bowImage, arrowImage
var arowgroup;
var score2=100;
var score1=100
var gun,guni
var b,bi
var bb,bii
var gamestate
var start
var play
var end
var g
var gg
var pw1
var pi1
var pw2
var pi1
function preload()
{
pi1=loadImage("p1w.png")
pi2=loadImage("p2w.png")
backgroundImage = loadImage("arena.jpeg");
arrowImage = loadImage("arrow0.png");
bowImage = loadImage("bow0.png");
bi=loadImage("bu-1.png")
guni=loadImage("gun-png.png")
bii=loadImage("bbbb.jpeg")
}
function setup()
{
createCanvas(windowWidth,windowHeight);
pw1=createSprite(300,300,10,10)
pw1.addImage(pi1)
pw1.scale=0.5 
pw2=createSprite(300,300,10,10)
pw2.addImage(pi2)
pw2.scale=0.5
scene = createSprite(540,300,1,1);
scene.addImage(backgroundImage);
scene.visible=false
scene.scale = 1.8 
bb=createSprite(600,310,10,10)
bb.addImage(bii)
bb.scale=1.9
pw1.visible=false
pw2.visible=false
bow = createSprite(width-20,220,20,50);
bow.addImage(bowImage); 
bow.scale = 1;
gun=createSprite(60,100,20,20)
gun.addImage(guni)
gun.scale=0.08
score = 0  
redb=new Group()
pinkb=new Group()
blueb=new Group()
grenb=new Group()
arowgroup=new Group()
bull=new Group()
}
function draw()
{
background("white");
if(keyDown("space"))
{
gamestate=play
bb.x=77768786    
}
if(gamestate===play)
{
scene.visible=true

if(keyDown("w"))
{
gun.y=gun.y-10
createbullets()
createb()
createbu()
}
if(keyDown("s"))
{
gun.y=gun.y+10
createbullets()
createb()
createbu()
}
if(score1===0)
{
  scene.x=764768534768
    bb.x=897435879458907345
  pw1.visible=true
  text("thanks for playing my game",500,300)
}
if(score2===0)
{
scene.x=764768534768
bb.x=897435879458907345
text("thanks for playing my game",500,300)
pw2.visible=true
}
if(keyDown("g"))
{
scene.x=540
pw2.visible=false
pw1.visible=false
bb.x=600
score1=100
score2=100
arowgroup.destroyEach()
bull.destroyEach()
}
if(gun.y>600||gun.y<0)
{
gun.y=300
}
if(bow.y>600||bow.y<0)
{
bow.y=300
}
if(keyDown(UP_ARROW))
{
bow.y=bow.y-10
createArrow() 
createa()
createaa()
}
if(keyDown(DOWN_ARROW))
{
bow.y=bow.y+10
createArrow() 
createa()
createaa()
}
if(arowgroup.x>0)
{
arowgroup.destroyEach()
}
if(bull.x>1000)
{
bull.destroyEach()
}
if(bull.isTouching(bow))
{
score1=score1-1
}
if(arowgroup.isTouching(gun))
{
score2=score2-1
}

drawSprites();
text("health: "+ score2,165,280);
text("health: "+ score1, 750,280);
text("player1",110,290)
if(keyDown("space")&&gamestate===play)
{
text("w,s to shoot",180,60) 
 
  text("up arrow key,down arrow key to shoot",614,60)
}

  

text("player2",830,310)
}
}
function createArrow()
{
var arrow= createSprite(300, 100, 60, 10);
arrow.addImage(arrowImage);
arrow.x = bow.x;
arrow.y=bow.y;
arrow.velocityX = -100           ;
arrow.lifetime=200
arrow.scale = 0.3;
arowgroup.add(arrow)

}
function createbullets() {
var bulet= createSprite(300, 100, 10, 10);
bulet.x = 100;
bulet.y=gun.y;
bulet.velocityX =150         ;
bulet.addImage(bi)
bulet.scale=0.09
bull.add(bulet)
bulet.lifetime=200
}
function createbu() 
{
var bulet= createSprite(300, 100, 10, 10);
bulet.x = 100;
bulet.y=gun.y;
bulet.velocityX =50   ;
bulet.velocityY=20
bulet.addImage(bi)
bulet.scale=0.09
bull.add(bulet)
bulet.lifetime=200
}
function createb()
{
var bulet= createSprite(300, 100, 10, 10);
bulet.x = 100;
bulet.y=gun.y;
bulet.velocityX =50   ;
bulet.velocityY=-20
bulet.addImage(bi)
bulet.scale=0.09
bull.add(bulet)
bulet.lifetime=200
}
function createa() 
{
var arrow= createSprite(920, 100, 10, 10);
arrow.x = bow.x;
arrow.y=bow.y;
arrow.velocityX =-50   ;
arrow.velocityY=-20
arrow.addImage(arrowImage)
arrow.scale=0.3
arrow.lifetime=200
arowgroup.add(arrow)
}
function createaa()
{
var arrow= createSprite(300, 100, 10, 10);
arrow.x = 920;
arrow.y=bow.y;
arrow.velocityX =-50   ;
arrow.velocityY=20
arrow.addImage(arrowImage)
arrow.scale=0.3
arowgroup.add(arrow)
arrow.lifetime=200
}
