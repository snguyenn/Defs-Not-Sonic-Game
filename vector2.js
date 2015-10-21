//Vector2
var Vector2 = function ( x, y ) {

	this.x = x || 0;
	this.y = y || 0;
};

Vector2.prototype = {
	//set function
	set: function ( x, y ) {
		this.x = x;
		this.y = y;
	},
	
	//copy function
	copy: function () {
		return new Vector2(this.x, this.y);
	},
	
	//Add
	add: function (v) {
		this.x+=v.x;
		this.y+=v.y;
	},
	
	//subtract
	subtract: function (v) {
		this.x-=v.x;
		this.y-=v.y;
	},
	
	//Multiply Scalar
	multiplyScalar: function (scalar) {
		this.x*=scalar;
		this.y*=scalar;
	},
	
	//Normalize 
	//Magnitude
	magnitude : function () {
		return Math.sqrt((this.x*this.x)+(this.y*this.y));
	},
	//Normalize Main
	normalize: function () {
		var m = this.magnitude();
				
		this.x = this.x/m;
		this.y = this.y/m;
	},
};