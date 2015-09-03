
function getMeClosure() { 
	var private = "Here!"; 
	return (function(){
		return {public: private? private:"No such variable available" };
	});
}
var closure = getMeClosure(); 
console.log(closure().public);
