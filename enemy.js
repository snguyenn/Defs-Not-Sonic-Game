var EnemyBasic = function() {
	this.image= document.createElement("img");
	this.x= //random generated
	this.y= //random
	this.width= //tba
	this.height= //tba
	this.image.src= //tba
};

var EnemyFlying = function() {
	this.image= document.createElement("img");
	this.x= //random generated
	this.y= //random
	this.width= //tba
	this.height= //tba
	this.image.src= //tba
};

var EnemyLazer = function() {
	this.image= document.createElement("img");
	this.x= //random generated
	this.y= //random
	this.width= //tba
	this.height= //tba
	this.image.src= //tba
};

var EnemyBomber = function() {
	this.image= document.createElement("img");
	this.x= //random generated
	this.y= //random
	this.width= //tba
	this.height= //tba
	this.image.src= //tba
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