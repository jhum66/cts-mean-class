// Animal Base class
function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
};

var animal = new Animal('elephant');
animal.walk('Bandipur'); // elephant is walking to Bandipur

// util function
var inherits = require('util').inherits;

// Bird Child class
function Bird(name) {
    // Call parent constructor
    Animal.call(this, name);

    // Additional construction code
}
inherits(Bird, Animal);

// Additional member functions
Bird.prototype.fly = function (destination) {
    console.log(this.name, 'is flying to', destination);
}

var bird = new Bird('sparrow');
bird.walk('Vedanthangal'); // sparrow is walking to Vedanthangal
bird.fly('Pulicat'); // sparrow is flying to Pulicat
