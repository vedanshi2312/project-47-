var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2,girlbasket,boybasket;
var players;
var obstaclesGroup,takingGroup;
var scoring,losing
//var win;

var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/background.gif");
  boy_img = loadImage("images/boy_01.gif");
 girl_img = loadImage("images/girl_01.gif");
  bask_img = loadImage("images/basket.png");
  bomb1_img = loadImage("images/bomb.png");  
  candy1_img = loadImage("images/candy_01.png");
  candy2_img = loadImage("images/candy_02.png");
  stone1_img = loadImage("images/stone.png");

 // win=loadSound("images/sound1.mp3")


  obstaclesGroup = new Group();
  takingGroup = new Group();

 
}
function setup() {
  canvas = createCanvas(displayWidth +100 , displayHeight -90);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if(playerCount === 2){
    game.update(1);
  }
  
  

}