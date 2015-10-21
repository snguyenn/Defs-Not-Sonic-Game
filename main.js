var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

	//makes the states as variable
var STATE_SPLASH = 0;
var STATE_LEVEL = 1;
var STATE_GAME = 2;
var STATE_GAMEOVER = 3;

	//the original state is the splash state
var gameState = STATE_SPLASH;

	//load image for SPLASH state
var startBg = document.createElement("img");
startBg.src = "Strt.jpg";
var sBackground = [];

	//load image for level state
var levelBg = document.createElement("img");
levelBg.src = "Lvl.jpg";
var lBackground = [];

	//load image for GAME state
var gameBg = document.createElement("img");
gameBg.src = "Game.jpg";
var Background = [];

	//load image for GameOver state
var overBg = document.createElement("img");
overBg.src = "gmOver.jpg";
var goBackground = [];

function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;

		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;

	return deltaTime;
}

function runSplash(deltaTime)
{
		//makes the context for the canvas for the splash state
		//1st part puts in the background
for(var y=0; y<15; y++)
	{
		for(var x=0; x<20; x++)
		{
			context.drawImage(sBackground[y][x], x*0, y*0);
		}
	}
}

	//says height and width of all backgrounds
for(var y=0;y<15;y++)
{	
	sBackground[y] = [];
	for(var x=0; x<20; x++)
		sBackground[y][x] = startBg;
		
	lBackground[y] = [];
	for(var x=0; x<20; x++)
		lBackground[y][x] = levelBg;
		
	Background[y] = [];
	for(var x=0; x<20; x++)
		Background[y][x] = gameBg;
		
	goBackground[y] = [];
	for(var x=0; x<20; x++)
		goBackground[y][x] = overBg;
}

	// Collision Detection
function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if(y2 + h2 < y1 || x2 + w2 < x1 || x2 > x1 + w1 || y2 > y1 + h1)
	{
		return false;
	}
	return true;
}

function run(deltaTime)
{
	context.fillStyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	if(player.cooldownTimer > 0)
	player.cooldownTimer -= deltaTime;

	player.update
	
	switch(gameState)
	{
		case STATE_SPLASH:
			runSplash(deltaTime);
			break;
		case STATE_LEVEL:
			runLevel(deltaTime);
		case STATE_GAME:
			runGame(deltaTime);
			break;
		case STATE_GAMEOVER:
			runGameOver(deltaTime);
			break;
	}
}

	//Dont edit anything below
(function() {
 var onEachFrame;
 if (window.requestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
 _cb();
 };
 } else if (window.mozRequestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb();
window.mozRequestAnimationFrame(_cb); }
 _cb();
 };
 } else {
 onEachFrame = function(cb) {
 setInterval(cb, 1000 / 60);
 }
 }

 window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);