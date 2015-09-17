function outerFunction(arg) {
    var variableInOuterFunction = arg;

    return (function () {
        //console.log(variableInOuterFunction); // Access a variable from the outer scope
        return {value: variableInOuterFunction};
    });

   
}

var closure = outerFunction('hello closure!'); // logs hello closure! 

console.log(closure().value);

console.log(typeof closure);
