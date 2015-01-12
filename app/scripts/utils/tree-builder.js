'use strict'

define(['angular', 'underscore', 'utils/tree-node', 'utils/tree-traverse'],
    function (angular, _, treeNode, traverse) {

    angular.module('util.treeBuilder', ['util.treeTraverse'])
        .factory('TreeBuilder', ['$log', 'TreeTraverse', function ($log, TreeTraverse) {

            function _idAccessor(e) {
                return e.id;
            }

            function _parentIdAccessor(e) {
                return e.parentId;
            }

            function _itemCreateAction(e) {
                return e;
            }

            function buildTree(source, options) {
                var tree = [];
                if (angular.isArray(source)) {
                    var idAccessor = _idAccessor;
                    var parentIdAccessor = _parentIdAccessor;
                    var itemCreateAction = _itemCreateAction;
                    if (angular.isObject(options)) {
                        idAccessor = options.idAccessor || idAccessor;
                        parentIdAccessor = options.parentIdAccessor || parentIdAccessor;
                        itemCreateAction = options.itemCreateAction || itemCreateAction;
                    } else if (angular.isFunction(options)) {
                        itemCreateAction = options || itemCreateAction;
                    }

                    var arr = source.slice(0);
                    for (var i = 0; i < arr.length; i++) {
                        var item = arr[i];
                        var parentId = parentIdAccessor(item);
                        if (angular.isUndefined(parentId) || parentId === null) {
                            tree.push(new treeNode.TreeNode(itemCreateAction(item)));
                            arr.splice(i, 1);
                            i--;
                        }
                    }

                    while (arr.length > 0) {
                        var current = arr.shift();
                        var parentId = parentIdAccessor(current);
                        var parentNode = TreeTraverse.findNode(tree, function (e) {
                            return parentId === idAccessor(e);
                        });
                        if (parentNode !== null) {
                            parentNode.addChild(itemCreateAction(current));
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