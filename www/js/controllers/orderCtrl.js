'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('orderCtrl', function ($scope,$http,branches,$filter) {

  	console.log($scope.testName);
  	window.localStorage['history'] = JSON.stringify($scope.selectedItems);
  	$scope.total = $filter('getprice')($scope.selectedItems);
  	console.log($scope.total);
  	console.log(window.localStorage['history']);
    console.log($scope.selectedItems); 	
		$scope.items = $scope.selectedItems;
		$scope.formData = JSON.parse(window.localStorage['profile'] || '{}');
		$scope.submitinfo = function(){
			console.log($scope.formData);
			window.localStorage['profile'] = JSON.stringify($scope.formData);
		}
  });