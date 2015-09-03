var foo = require('./foo1');
console.log("Foo loaded...");
var x = false;
foo(); // logs out : "a function in file foo"
x = true;
var zoo = null;
if( x) {
	zoo = require('./zoo');
}
if(x) {
	zoo();

}
