'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('mainCtrl', function ($scope,$http,branches) {
    
    $scope.selectedItems = [];
        $scope.value = function (isSelected, item) {
        if (isSelected == true) {
            $scope.selectedItems.push(item);
        } else {
           // console.log(item.name);
            angular.forEach($scope.selectedItems, function (itemRmv, $index) {
                if (itemRmv.itemid == item.itemid) {
                    $scope.selectedItems.splice($index, 1);
                }
            })
        }
        console.log($scope.selectedItems);
    }
  
  });