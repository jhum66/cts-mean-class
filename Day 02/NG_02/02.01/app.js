(function(angular) {
 	'use strict';
	//declare a module
	var myAppModule = angular.module('myApp', []);
	var myController = myAppModule.controller('controller', ['$scope', function ($scope) {}]);
	// configure the module.
	// in this example we will create a greeting filter
	myAppModule.filter('greet', function() {
 		return function(name) {
    		return 'Hello, ' + name + '!';
  		};
  		//return 'Hello, ' + name + '!';  //this will not work
	});
	
})(window.angular);