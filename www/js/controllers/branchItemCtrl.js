'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
    .controller('branchitemCtrl', function ($scope,$stateParams,$http) {
      
    console.log($stateParams.id);
      $http.get('testData/fastFood.json').success(function(data){
        for(var i=0; i<data.length; i++){

          if($stateParams.id == data[i].id){

                $scope.testData = data[i];
          }
        }

      

      });
      $http.get('testData/itemList.json').success(function(data){
        var foodlist = [];
        for(var i=0; i<data.length; i++){

          if($stateParams.id == data[i].restuarant_id){
            foodlist.push(data[i]);

                
          }
        }

      $scope.testFood = foodlist;
      //console.log($scope.testFood);

      });
      $scope.getDate = {
        value: new Date()
      };
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


    /*branchitems.getFoodList($stateParams.id).then(function(data){
      //console.log("success");
      
      $scope.availableFood = data;
      console.log($scope.availableFood);
        
    });*/

  }); 
