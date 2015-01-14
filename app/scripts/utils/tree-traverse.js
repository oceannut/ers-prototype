'use strict'

define(['angular', 'underscore'], function (angular, _) {

    angular.module('util.treeTraverse', [])
        .factory('TreeTraverse', ['$log', function ($log) {

            function findNodeByRecursive(node, predicate) {
                var found = null;
                if (angular.isArray(node)) {
                    for (var i in node) {
                        found = findNodeByRecursive(node[i], predicate);
                        if (found !== null) {
                            break;
                        }
                    }
                } else {
                    if (predicate(node)) {
                        found = node;
                    } else {
                        if (angular.isArray(node.childNodes)) {
                            for (var i in node.childNodes) {
                                found = findNodeByRecursive(node.childNodes[i], predicate);
                                if (found !== null) {
                                    break;
                                }
                            }
                        }
                    }
                }
                return found;
            }

            function findNodeByStack(node, predicate) {
                var found = null;
                var arr = [];
                if (angular.isArray(node)) {
                    for (var i = node.length - 1; i >= 0; i--) {
                        arr.unshift(node[i]);
                    }
                } else {
                    arr.unshift(node);
                }
                while (arr.length > 0) {
                    var current = arr.shift();
                    if (predicate(current)) {
                        found = current;
                        arr.length = 0;
                        break;
                    } else if (current.childNodes.length > 0) {
                        for (var i = current.childNodes.length - 1; i >= 0; i--) {
                            arr.unshift(current.childNodes[i]);
                        }
                    }
                }
                return found;
            }

            function traverse(tree, action) {
                tree = tree || [];
                if (tree.length == 0) {
                    return;
                }
                action = action || angular.noop;

                var arr = [];
                for (var i = tree.length - 1; i >= 0; i--) {
                    arr.unshift(tree[i]);
                }
                while (arr.length > 0) {
                    var current = arr.shift();
                    action(current);
                    if (current.childNodes.length > 0) {
                        for (var i = current.childNodes.length - 1; i >= 0; i--) {
                            arr.unshift(current.childNodes[i]);
                        }
                    }
                }
            }

            function sort(tree, action) {
                tree = tree || [];
                if (tree.length == 0) {
                    return;
                }
                action = action || angular.noop;

                traverse(tree, function (node) {
                    action(node);
                    if (node.childNodes.length > 0) {
                        node.childNodes.sort(function (e1, e2) {
                            if (angular.isDefined(e1.sequence) && angular.isDefined(e2.sequence)) {
                                return e1.sequence - e2.sequence;
                            } else if (angular.isString(e1.id) && angular.isString(e2.id)) {
                                return e1.id.localeCompare(e2.id);
                            } else {
                                return 0;
                            }
                        })
                    }
                });
            }

            function findNode(node, predicate) {
                if (!angular.isObject(node)) {
                    return undefined;
                }
                if (!angular.isFunction(predicate)) {
                    return undefined;
                }
                return findNodeByStack(node, predicate);
            }

            return {
                findNode: findNode,
                traverse: traverse,
                sort: sort
            }

        }]);

});