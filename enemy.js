var EnemyBasic = function() {
	this.image= document.createElement("img");
	this.x= 0//random generated
	this.y= 0//random
	this.width= 0//tba
	this.height= 0//tba
	this.image.src= 0//tba
};

var EnemyFlying = function() {
	this.image= document.createElement("img");
	this.x= 0//random generated
	this.y= 0//random
	this.width= 0//tba
	this.height= 0//tba
	this.image.src= 0//tba
};

var EnemyLazer = function() {
	this.image= document.createElement("img");
	this.x= 0//random generated
	this.y= 0//random
	this.width= 0//tba
	this.height= 0//tba
	this.image.src= 0//tba
};

var EnemyBomber = function() {
	this.image= document.createElement("img");
	this.x= 0//random generated
	this.y= 0//random
	this.width= 0//tba
	this.height= 0//tba
	this.image.src= 0//tba
};


EnemyBasic.prototype.draw= function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}

EnemyFlying.prototype.draw= function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}

EnemyLazer.prototype.draw= function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}

EnemyBomber.prototype.draw= function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}