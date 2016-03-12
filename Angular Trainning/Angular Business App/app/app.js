(function () {
    "use strict";
    var v = angular.module('productManagement', ["common.services", "ui.router","ui.mask","ui.bootstrap", "productResourceMock"]);

    v.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("home", {
            url: "/",
            templateUrl: "app/welcomeView.html"

        })
        $stateProvider.state("productList", {
            url: "/products",
            templateUrl: "app/products/prodcutListView.html",
            controller: "prodcutListController"
        })
        $stateProvider.state("productEdit", {
            abstract :true,
            url: "/products/edit/:productId",
            templateUrl: "app/products/productEditView.html",
            controller: "productEditController",
            resolve: {
                productResource: "productResource",

                product: function (productResource, $stateParams) {
                    var productId = $stateParams.productId;
                    return productResource.get({ productId: productId }).$promise;
                }
            }
        })
        .state("productEdit.info", {
            url: "/info",
            templateUrl: "app/products/productEditInfoView.html"
        })
       .state("productEdit.price", {
             url: "/price",
             templateUrl: "app/products/productEditPriceView.html"
        })
        .state("productEdit.tags", {
             url: "/tags",
             templateUrl: "app/products/productEditTagsView.html"
        })
        $stateProvider.state("productDetail", {
            url: "/products/:productId",
            templateUrl: "app/products/productDetailView.html",
            controller: "productDetailController",
            resolve: {
                productResource: "productResource",

                product: function (productResource, $stateParams) {
                    var productId = $stateParams.productId;
                    return productResource.get({ productId: productId }).$promise;
                }
            }
        })
        //$stateProvider.state("productDetail", {
        //    url: "/products/:productId",
        //    templateUrl: "app/products/productDetailView.html",
        //    controller: "productDetailController",
        //    resolve: {
        //        productResource: "productResource",

        //        product: function (productResource, $stateParams) {
        //            alert('ggg')
        //            var productId = $stateParams.productId;
        //            return productResource.get({ productId: productId }).$promise;
        //        }

        //    }

        //})

    }]
  );
}());
