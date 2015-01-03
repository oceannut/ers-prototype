'use strict'

define(['angular',
        'common/category-tree-controllers',
        'common/category-services'],
    function (angular) {

        angular.module('ers.category.controllers',
            ['ers.category.tree.controllers',
                'ers.category.services'])
            .controller(
                'CategoryCtrl',
                ['$scope', '$routeParams', 'CategoryService',
                function ($scope, $routeParams, CategoryService) {

                    $scope.init = function () {
                        $scope.categoryScope = $routeParams.categoryScope;
                        $scope.currentCategory = undefined;
                        $scope.$on('categorySelectionChanged', function (e, d) {
                            $scope.currentCategory = d;
                            console.log($scope.currentCategory);
                        });
                    }

                    $scope.save = function () {

                    }

                    $scope.clear = function () {

                    }

                }]);

    })
