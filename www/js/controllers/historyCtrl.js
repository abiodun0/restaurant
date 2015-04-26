
'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('historyCtrl', function ($scope,$http,branches) {
		console.log(window.localStorage['name']);
		$scope.history = JSON.parse(window.localStorage['name'] || '[]');
		console.log($scope.history);
  });