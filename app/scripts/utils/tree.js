'use strict'

define(['angular', 'underscore'], function (angular, _) {

    angular.module('util.tree', [])
        .factory('TreeUtil', ['$log', function ($log) {

            function findNodeByTraverseTree(node, predicate) {
                var found = null;
                if (angular.isArray(node)) {
                    for (var i in node) {
                        found = findNodeByTraverseTree(node[i], predicate);
                        if (found !== null) {
                            break;
                        }
                    }
                } else {
                    if (predicate(node)) {
                        found = node;
                    } else {
                        if (angular.isArray(node.children)) {
                            for (var i in node.children) {
                                found = findNodeByTraverseTree(node.children[i], predicate);
                                if (found !== null) {
                                    break;
                                }
                            }
                        }
                    }
                }
                return found;
            }

            function findNode(node, predicate) {
                if (!angular.isObject(node)) {
                    return undefined;
                }
                if (!angular.isFunction(predicate)) {
                    return undefined;
                }
                return findNodeByTraverseTree(node, predicate);
            }

            return {
                findNode: findNode
            }

        }]);

});