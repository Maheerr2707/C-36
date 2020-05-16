var canvas,playerCount;
var database,form;

var player,game;
var allPlayers;

var gamestate = 0;

function setup(){
    database = firebase.database();
    canvas = createCanvas(500,500);      
  game = new Game ()
  game.getState() 
  game.start()
}

function draw(){
  
    drawSprites();
}
