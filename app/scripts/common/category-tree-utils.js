'use strict'

define(['angular', 'underscore'], function (angular, _) {

    angular.module('ers.category.tree.utils', [])
        .factory('CategoryTreeUtil', ['$log', function ($log) {

            function findNodeByTraverseTree(node, comparand) {
                node = node || {};
                var found = null;
                if (angular.isArray(node)) {
                    for (var i in node) {
                        found = findNodeByTraverseTree(node[i], comparand);
                        if (found !== null) {
                            break;
                        }
                    }
                } else {
                    if (node.Id === comparand) {
                        found = node;
                    } else {
                        if (angular.isArray(node.children)) {
                            for (var i in node.children) {
                                found = findNodeByTraverseTree(node.children[i], comparand);
                                if (found !== null) {
                                    break;
                                }
                            }
                        }
                    }
                }
                return found;
            }

            return {
                findNodeByTraverseTree: findNodeByTraverseTree
            }

        }]);

});