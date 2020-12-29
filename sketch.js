var PLAY
var gameState=1,score=0
var END,fruitImage1,fruitImage2,fruitImage3,fruitImage4,rand,fruitGroup
var sword,swordImage,enemyGroup,alienImage,alienImage2,knifeSwsoshSound,vand,gameOverImg,gameOverSnd

function preload(){
  swordImage=loadImage("sword.png")
  fruitImage1=loadImage("fruit1.png")
  fruitImage2=loadImage("fruit2.png") 
  fruitImage3=loadImage("fruit3.png")
  fruitImage4=loadImage("fruit4.png")
  alienImage1=loadImage("alien1.png")
  alienImage2=loadImage("alien2.png")
  gameOverImg=loadImage("gameover.png")
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3")
 gameOverSnd=loadSound("gameover.mp3")
}

function setup(){
  createCanvas(600,600)
  
sword=createSprite(40,200,20,20)
  sword.addImage(swordImage)
  sword.scale=0.7
  
  
  
  fruitGroup= createGroup()
  enemyGroup= createGroup()
}

function draw(){
  sword.x=World.mouseX
  sword.y=World.mouseY
  background ("lightBlue") 
  text("Score: "+ score, 500,50);
  console.log(score)
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    knifeSwooshSound.play()
  
    score=score+2
    
  }
  if(enemyGroup.isTouching(sword)){
    gameState=END;
  }
  
   if(gameState ===PLAY){
     
       sword.x=World.mouseX
  sword.y=World.mouseY
     
   
   }
  
  if(gameState ===END){
    enemyGroup.destroyEach()
    fruitGroup.destroyEach()
    enemyGroup.velocityX=0
    fruitGroup.velocityX=0
    sword.addImage(gameOverImg)
    sword.x=300
    sword.y=300
      
    gameOverSnd.play()
  }
  
drawSprites()
    spawnFruit()
  spawnEnemy()

}

function spawnFruit(){
  if(frameCount % 60===0){
  var fruit= createSprite(500,250,20,20)
  var position=Math.round(random(1,2))
  if(position===1){
    fruit.x=400;
    fruit.velocityX=-(7+score/4)
  }else
    if(position===2){
      fruit.x=0
      fruit.velocityX=(7+score/4)
    }
    var rand= Math.round(random(1,4))
    switch(rand){
        case 1: fruit.addImage(fruitImage1);
              break;
      case 2: fruit.addImage(fruitImage2);
              break;
      case 3: fruit.addImage(fruitImage3);
              break;
      case 4: fruit.addImage(fruitImage4);
              break;
    }
    fruit.y=Math.round(random(50,340))
    
    fruit.scale=0.2
    fruit.setLifetime=100
    
    fruitGroup.add(fruit)
    
  }
  
  
  
  
  
  
}


function spawnEnemy(){
  if(frameCount%200===0){
  var enemy= createSprite(400,200,20,20)
   enemy.velocityX=-(8+score/10)
    var vand= Math.round(random(1,2))
    switch(vand){
        case 1: enemy.addImage(alienImage1);
              break;
      case 2: enemy.addImage(alienImage2);
              break;
    }
    enemy.y=Math.round(random(100,300))
    enemy.setLifetime=50
    
    
    enemyGroup.add(enemy)
    
    
  }
  
  
  
  
  
  
  
  
  
  
}





