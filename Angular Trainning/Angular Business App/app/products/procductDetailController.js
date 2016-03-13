(function () {
    "use strict";
    angular.module("productManagement").controller("productDetailController", ["$scope", "product","productService", productDetailController]);
    function productDetailController($scope, product,productService) {

        $scope.product = product;
        $scope.title = "Product Deatil :" + $scope.product.productName;
        
        $scope.marginPercent =
            productService.calculateMarginPercent($scope.product.price, $scope.product.cost);
        if ($scope.product.tag) {
            $scope.product.tagList = productDetailController.tag.toString();
        }


    }


}());