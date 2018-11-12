var ForagerBee = function() {
	HoneyMakerBee.call(this);
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function() {
	this.treasureChest.push('treasure');
}



//es6 class.grubs.extends()