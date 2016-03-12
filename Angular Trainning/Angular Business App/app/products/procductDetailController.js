(function () {
    "use strict";
    angular.module("productManagement").controller("productDetailController", ["$scope", "product", productDetailController]);
    function productDetailController($scope, product) {

        $scope.product = product;
        $scope.title = "Product Deatil :" + $scope.product.productName;
        if ($scope.product.tag) {
            $scope.product.tagList = productDetailController.tag.toString();
        }


    }


}());