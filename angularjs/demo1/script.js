(function() {
    var $myApp = angular.module('myApp', []);
    $myApp.controller('InvoiceCntl', function($scope) {
        $scope.qty = 1;
		$scope.cost = 19.95;
    });
}());