'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('myAppVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
