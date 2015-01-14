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
                ['$scope', '$log', '$routeParams', 'CategoryService',
                function ($scope, $log, $routeParams, CategoryService) {

                    $scope.init = function () {
                        $scope.categoryScope = $routeParams.categoryScope;
                        $scope.currentCategory = undefined;
                        $scope.$on('categorySelectionChanged', function (e, d) {
                            $scope.currentCategory = d;
                            console.log($scope.currentCategory);
                        });
                    }

                    $scope.edit = function () {
                        if ($scope.currentCategory === undefined) {
                            alert("请选择要编辑的节点");
                            return;
                        }
                    }

                    $scope.addRootNode = function () {

                    }

                    $scope.addChildNode = function () {
                        if ($scope.currentCategory === undefined) {
                            alert("请选择要编辑的节点");
                            return;
                        }
                    }

                    $scope.delete = function () {
                        if ($scope.currentCategory === undefined) {
                            alert("请选择要编辑的节点");
                            return;
                        }
                    }

                    $scope.deleteChildrenOnly = function () {
                        if ($scope.currentCategory === undefined) {
                            alert("请选择要编辑的节点");
                            return;
                        }
                    }

                    $scope.save = function () {

                    }

                    $scope.clear = function () {

                    }

                }]);

    })
