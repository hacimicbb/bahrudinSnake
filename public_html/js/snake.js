var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameIntialize();
gameDraw();

function gameIntialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeigh;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    
}

function gameDraw() {
    context.fillStyle = "rgb(242, 200, 12)";
    context.fillRect(0, 0, screenWidth, screenHeight);
    
}