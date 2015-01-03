'use strict'

define(['angular',
        'common/category-services'],
    function (angular) {

        angular.module('ers.category.tree.controllers', ['ers.category.services'])
            .controller('CategoryTreeCtrl',
                ['$scope', 'CategoryService',
                function ($scope, CategoryService) {

                    $scope.init = function () {
                        buildTree();
                        $scope.$on('categoryCollectionChanged', function (e, d) {
                            console.log(d);
                        });
                    }

                    $scope.selectCategory = function (category) {
                        $scope.$emit('categorySelectionChanged', category);
                    }

                    function buildTree() {
                        CategoryService.query({ 'categoryScope': $scope.$parent.categoryScope })
                        .$promise
                            .then(function (result) {
                                $scope.categoryList = result;
                            }, function (error) {
                                console.log(error);
                            });
                    }

                }]);

    })
