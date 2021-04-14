var jerry , tom , tomImg;
var jerryImg;
var jerryTeasingImg , jerryInMoreTemperImg , jerryInTemperImg , tomStandingImg;
var gardenImg;

function preload() {

 jerryImg = loadImage("images/mouse1.png");
 gardenImg = loadImage("images/garden.png");

 jerryTeasingImg = loadImage("images/mouse4.png");
 tomImg = loadImage("images/cat1.png");
 tomStandingImg = loadImage("images/cat4.png");

 jerryInTemperImg = loadImage("images/mouse2.png");
 jerryInMoreTemperImg = loadImage("images/mouse3.png");

}

function setup(){
    createCanvas(1000,800,);

    tom = createSprite(850,700);
    tom.addImage(tomImg);
    tom.scale = 0.17;

    jerry = createSprite(100,700);
    jerry.addImage(jerryImg);
    jerry.scale = 0.12;
    
}

function draw() {

    background(gardenImg);

 if(tom.isTouching(jerry)){

    tom.velocityX = 0;
    tom.changeImage(tomStandingImg);
    tom.x = 200 , 250;

    jerry.changeImage(jerryInTemperImg);
    jerry.frameDelay = 30;

    jerry.changeImage(jerryInMoreTemperImg);
    jerry.frameDelay = 30;

    jerry.changeImage(jerryTeasingImg);
    jerry.frameDelay = 15;
}
drawSprites();
}
function keyPressed(){

    if(keyCode === LEFT_ARROW){
       
       tom.velocityX = -3;
       
       jerry.changeImage(jerryInTemperImg);
       jerry.frameDelay = 30;

       jerry.changeImage(jerryInMoreTemperImg);
       jerry.frameDelay = 30;

    }
}
    
