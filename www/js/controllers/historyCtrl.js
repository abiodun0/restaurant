
'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('historyCtrl', function ($scope,$http) {
		$scope.history = JSON.parse(window.localStorage['transaction'] || '[]');
		console.log($scope.history);
		$scope.clear = function(){
			if(confirm("Are You sure You want to clear history")){
				window.localStorage['transaction'] = [];
				$scope.history = [];
			}
		}
  });