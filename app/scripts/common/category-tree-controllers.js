'use strict'

define(['angular',
        'utils/tree-builder',
        'common/category-services'],
    function (angular) {

        angular.module('ers.category.tree.controllers', [
            'util.treeBuilder',
            'ers.category.services'])
            .controller('CategoryTreeCtrl',
                ['$scope', 'TreeBuilder', 'CategoryService',
                function ($scope, TreeBuilder, CategoryService) {

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
                                var tree = TreeBuilder.buildTree(result, function (e) {
                                    return {
                                        id: e.id,
                                        text: e.name
                                    };
                                });
                                $scope.categoryList = tree;
                            }, function (error) {
                                console.log(error);
                            });

                        var tree = [{
                                text: "Parent 1",
                                nodes: [{
                                    text: "Child 1",
                                    nodes: [{
                                        text: "Grandchild 1"
                                    }, {
                                        text: "Grandchild 2"
                                    }]
                                }, {
                                    text: "Child 2"
                                }]
                            }, {
                                text: "Parent 2"
                            }, {
                                text: "Parent 3"
                            }, {
                                text: "Parent 4"
                            }, {
                                text: "Parent 5"
                            }];
                        $('#tree').treeview({ data: tree });
                    }

                }]);

    })
