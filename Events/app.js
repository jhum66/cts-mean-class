angular.module('myModule', [])

    .run(function($rootScope) {
        $rootScope.message=null;
        /*
            Receive emitted message and broadcast it.
            Event names must be distinct or browser will blow up!
        */
        $rootScope.$on('handleEmit', function(event, args) {
            $rootScope.message='myModule: ' + args.message;
            $rootScope.$broadcast('handleBroadcast', args);
        });
    })
    .controller('ControllerZero', ['$scope', function($scope){
        $scope.handleClick = function(msg) {
            $scope.$emit('handleEmit', {message: msg});
        };
    }])
    .controller('ControllerOne', ['$scope', function($scope){
        $scope.$on('handleBroadcast', function(event, args) {
            $scope.message = 'ONE: ' + args.message;
        }); 
    }])
    .controller('ControllerTwo', ['$scope', function($scope){
        $scope.$on('handleBroadcast', function(event, args) {
            $scope.message = 'TWO: ' + args.message;
        });
    }]);


