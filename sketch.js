//pizza Ingredients
var base , sause , toppings 
var sSauces , sToppings, sCheese; 
//pizza = base + sause + toppings
var pBase , pSause , pToppings,  pFinal;
var play;
var replayButton;

//start = opening image 
//play = making pizza 
//replay = replay 


var gameState= "start";

//burger Ingredients
var bun, tikki;
//burger = lower bun + tikki(salad)  + top bun 
var bBun, bTikki, bFinal;

//sandwitch Ingredients
var bread, cheese; 
// sandwitch = bread + veggies + cheese
var sBread, sCheese, sFinal;


//stage= 0... initial 
//stage=1 ... sauce
//stage =2 .. toppings
//stage = 3 ... final

var stage = 0;


function preload(){

//steps of improvemnets 

pBase = loadImage("Images/PImages/pBase.png");
pSauce = loadImage("Images/PImages/pSauce.png");
pFinal = loadImage("Images/PImages/pFinal.png");
pBackground = loadImage("Images/pBackground.webp");
pToppings = loadImage("Images/PImages/pToppings.png");
play = loadImage("Images/play.jpg");
}

function setup(){
    createCanvas(1000,600);
    sSauces= createSprite(800,159,150,150);
    sToppings = createSprite(464,103,250,150);
    sCheese = createSprite(580,442,50,100);
    playButton = createSprite(882,390,150,150);
    replayButton = createSprite(903,555,100,50);

    //sprite.visible = false ... To make the sprite invisible 
    sSauces.visible = false;
    sToppings.visible = false;
    sCheese.visible = false;
    playButton.visible = false;
    replayButton.visible = false;
    
    
    pizza = createSprite(200,379,370,330);
    //sprite.addImage(image_name)
    pizza.addImage(pBase);
    //sprite.scale = 
    pizza.scale = 0.82;
}


function draw(){

if(gameState === "start"){
background(play);
pizza.visible = false;
if(mousePressedOver(playButton)){
gameState = "play";
}
    

}
if(gameState === "play"){
    background(pBackground);
    pizza.visible = true;
    //mousePressedOver(sprite)
    //function keyPressed(){} 
    
    // == comparision operator 
    // && AND operator 
    // || OR operator
    
    if(mousePressedOver(sSauces) && stage == 0){
    pizza.addImage(pSauce);  
    pizza.scale = 0.82;
    stage = 1;
    
    }
    
    if(mousePressedOver(sToppings) && stage == 1 ){
        pizza.addImage(pToppings);
        pizza.scale = 1.1;
        stage = 2;
        }
    
    if(mousePressedOver(sCheese) && stage == 2){
    pizza.addImage(pFinal);
    pizza.scale = 0.82;
    stage = 3;
    replayButton.visible = true;
    
    }
    if(mousePressedOver(replayButton) && stage == 3){
        console.log("gameState is replay");
    gameState = "replay";
    
    }
}
if(gameState === "replay"){
    console.log("replay is working");
stage = 0;
pizza.addImage(pBase);
gameState = "play";

}
//console.log(mouseX +  "," + mouseY);
  console.log(stage);  
drawSprites();


}