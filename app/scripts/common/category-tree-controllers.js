'use strict'

define(['angular',
        'utils/tree-builder',
        'utils/tree-traverse',
        'common/category-services'],
    function (angular) {

        angular.module('ers.category.tree.controllers', [
            'util.treeBuilder',
            'util.treeTraverse',
            'ers.category.services'])
            .controller('CategoryTreeCtrl',
                ['$scope', 'TreeBuilder', 'TreeTraverse', 'CategoryService',
                function ($scope, TreeBuilder, TreeTraverse, CategoryService) {

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
                                //$scope.categoryList = tree;
                                TreeTraverse.traverse(tree, function (e) {
                                    e.nodes = e.childNodes;
                                    //e.href = "#node-1";
                                    //e.tags = ['available'];
                                });
                                $('#tree').treeview({
                                    data: tree,
                                    showBorder: false,
                                    nodeIcon: '',
                                    collapseIcon: 'fa fa-minus-square-o',
                                    expandIcon: 'fa fa-plus-square-o',
                                    //enableLinks: true,
                                    //showTags: true,
                                    onNodeSelected: function (event, node) {
                                        console.log(node);
                                    }
                                });
                            }, function (error) {
                                console.log(error);
                            });
                        
                    }

                }]);

    })
