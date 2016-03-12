(function(){
  "use strict";
  angular.module('productManagement').controller("prodcutListController",["$scope","productResource",prodcutListController])

  function prodcutListController($scope,productResource){

$scope.showImage = false;


  productResource.query(function(data){
    $scope.products = data;
  })
  $scope.toggleImage = function(){
    $scope.showImage = !$scope.showImage;
  }
  }
}());
