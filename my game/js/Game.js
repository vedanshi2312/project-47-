class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,630);
    player1.addImage("player1",boy_img);
    
    player2 = createSprite(800,630);
    player2.addImage("player2", girl_img);
    players=[player1,player2];

    girlbasket = createSprite(800,630);    
    girlbasket.addImage("girlbasket",bask_img);

     boybasket = createSprite(200,630);
     boybasket.addImage("boybasket",bask_img);

        }

        play(){
        
            form.hide();

            Player.getPlayerInfo();
             image(back_img, 0, 0,displayWidth +100 , displayHeight -90);
             var x =100;
             var y;
            
             drawSprites();
             for(var plr in allPlayers){
                var index =0;
                 index = index+1;
                 x = 500-allPlayers[plr].distance;
                 y=displayHeight/1.5;

                
                 
                 players[index -1].x = mouseX;
                 players[index - 1].y = y;
                  // players[index].visible=false;

                
                     textSize(25);
                     fill("white");
                     text(allPlayers.player1.name + "'s Score:"+allPlayers.player1.score,50,50);
                    text(allPlayers.player2.name + "'s Score:" + allPlayers.player2.score, 50, 100);
             
             }
            
            
             

             
        
             if (frameCount % 80 === 0) {
                 losing = createSprite(random(100, 1000), 0, 100, 100);
                 losing.velocityY = 6+player.score/10;
                 var rand = Math.round(random(1,2));
                 switch(rand){
                     case 1: losing.addImage("bomb",bomb1_img);
                     break;
                     case 2: losing.addImage("stone",stone1_img);
                     break;
                    
                 }
                 obstaclesGroup.add(losing);
                 
             }

             if (frameCount % 20 === 0) {
                scoring = createSprite(random(100, 1000), 0, 100, 100);
                scoring.velocityY = 6+player.score/10;
                var rand = Math.round(random(1,2));
                switch(rand){
                    case 1: scoring.addImage("candy",candy1_img);
                    break;
                    case 2: scoring.addImage("candys",candy2_img);
                    break;
                   
                }
                takingGroup.add(scoring);
                
            }
             
              if (player.index !== null) {
                  for(var i = 0; i< obstaclesGroup.length;i++){
                      if(obstaclesGroup.get(i).isTouching(players)){
                        // win.play(); 
                        obstaclesGroup.get(i).destroy();
                        player.score =player.score-3;
                        player.update();
                      }
                   
                  }
                        
                    
              }
              if (player.index !== null) {
                for(var i = 0; i< takingGroup.length;i++){
                    if(takingGroup.get(i).isTouching(players)){
                      takingGroup.get(i).destroy();
                      player.score =player.score+3;
                      player.update();
                    }
                 
                }
                      
                  
            }
           
}




    
       end(){
       console.log("Game Ended");
    }
}