'use strict'

define(['angular', 'underscore', 'utils/tree-node', 'utils/tree-traverse'],
    function (angular, _, treeNode, traverse) {

    angular.module('util.treeBuilder', ['util.treeTraverse'])
        .factory('TreeBuilder', ['$log', 'TreeTraverse', function ($log, TreeTraverse) {

            function buildTree(source, itemAction) {
                itemAction = itemAction || function (e) {
                    return e;
                };
                var tree = [];
                if (angular.isArray(source)) {
                    var arr = source.slice(0);
                    for (var i = 0; i < arr.length; i++) {
                        var item = arr[i];
                        if (angular.isUndefined(item.parentId) || item.parentId === null) {
                            tree.push(new treeNode.TreeNode(itemAction(item)));
                            arr.splice(i, 1);
                            i--;
                        }
                    }

                    while (arr.length > 0) {
                        var current = arr.shift();
                        var parentNode = TreeTraverse.findNode(tree, function (e) {
                            return current.parentId === e.id;
                        });
                        if (parentNode !== null) {
                            parentNode.addChild(itemAction(current));
                        } else {
                            arr.push(current);
                        }
                    } 
                }

                return tree;
            }

            return {
                buildTree: buildTree
            }

        }]);

});