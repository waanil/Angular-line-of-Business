/**
 * Created by Deb on 8/26/2014.
 */
(function () {
    "use strict";
  

    angular
        .module("productManagement")
        .controller("productEditController",
        ["$scope","product","$state",
            ProductEditController]);

   
    function ProductEditController($scope, product,$state) {
       
        $scope.product = product;
        $scope.opened = false;

        if ($scope.product && $scope.product.productId) {
            $scope.title = "Edit: " + $scope.product.productName;
        }
        else {
            $scope.title = "New Product"
        }
        $scope.open = function ($event) {
            //alert('asdasd')
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = !$scope.opened;
        };
        $scope.submit = function () {
            console.log(product);
            $scope.product.$save(function (data) {
                toastr.success("Save Successful");
            }
            );
        }

        $scope.cancel = function () {
            $state.go('productList');
        }
        $scope.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                $scope.product.tags = $scope.product.tags ? $scope.product.tags.concat(array) : array;
                $scope.newTags = "";
            } else {
                alert("Please enter one or more tags separated by commas");
            }
        }

        $scope.removeTag = function (idx) {
            $scope.product.tags.splice(idx, 1);
        }
    }

   

}());
