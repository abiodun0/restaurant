
'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('transCtrl', function ($scope,$http,$stateParams) {
		var transaction = JSON.parse(window.localStorage['transaction'] || '[]');
		for(var i = 0; i<transaction.length; i++){

			if($stateParams.transId == transaction[i].transaction_id){
				$scope.currentTrans = transaction[i];
			}
		}
		$scope.currentItems = $scope.currentTrans.items_bought;
		console.log($scope.currentTrans);
		console.log($scope.currentItems);
  });