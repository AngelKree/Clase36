var gameState=0; //nos hizo falta inicializar el estado del juego
var playerCount;
var database;
var form;
var game;
var player;

function setup(){
  createCanvas();
  database = firebase.database();

  //Crear un nuevo objeto de juego
  game = new Game();
  //Obtener el estado del juego
  game.getState();
  //Empezar el juego
  game.start();
}

function draw(){
  
  
}
