'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('profileCtrl', function ($scope,$http) {
  	
		$scope.formData = JSON.parse(window.localStorage['profile'] || '{}');
		$scope.submitinfo = function(){
		window.localStorage['profile'] = JSON.stringify($scope.formData);
		alert("profile updated");
	}
  });