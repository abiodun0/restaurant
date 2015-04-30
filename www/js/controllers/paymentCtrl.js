'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('paymentCtrl', function ($scope,$http,$state,$filter) {
  	console.log($scope.selectedItems);
  	var totalCost = $filter('getprice')($scope.selectedItems);
  	console.log(totalCost);
  $scope.stripeCallback = function (code, result) {

    if (result.error) {
        window.alert('it failed! error: ' + result.error.message);
    } else {
    	 	var transaction = {
    	 		token : result.id,
    	 		total_cost: totalCost
    	 	}
        window.alert('success! token: ' + result.id);
        $http.post('http://golden0.com/stripe/stripe.php',transaction).success(function(data){
        	window.alert('success: ' + data);

        })
    }
};

  });