(function(angular) {
  'use strict';
angular.module('my.service', [])

  .value('greeter', {
    salutation: 'Hello',
    localize: function(localization) {
      this.salutation = localization.salutation;
    },
    greet: function(name) {
      return this.salutation + ' ' + name + '!';
    }
  })

  .value('user', {
    load: function(name) {
      this.name = name;
    }
  });

angular.module('my.directive', []);

angular.module('my.filter', []);

angular.module('top', ['my.service', 'my.directive', 'my.filter'])

  .run(function(greeter, user) {
    // This is effectively part of the main method initialization code
    greeter.localize({
      salutation: 'Namasthe'
    });
    user.load('Subhash');
  })

  .controller('TopController', function($scope, greeter, user){
    user.load('Srinivas');
    $scope.greeting = greeter.greet(user.name);
  });
})(window.angular);