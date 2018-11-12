var Bee = function() {
	
	
	//this.food is inherited from Grub
	//eat is inherited from Grub
	//ORDER MATTERS, call first to inherit and then change properties
	Grub.call(this);
	this.age = 5;
	this.color = 'yellow';
	//this.prototype.age = 5; WRONG
	this.job = 'keep on growing';
	// Bee.prototype.age = 5;
};

  Bee.prototype = Object.create(Grub.prototype);
  Bee.prototype.constructor = Bee;
 