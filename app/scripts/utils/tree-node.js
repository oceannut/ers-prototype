'use strict'

define(['angular', 'underscore'], function (angular, _) {

    function TreeNode(attributes) {
        attributes = attributes || {};
        if (angular.isString(attributes)) {
            attributes = {
                text: attributes
            };
        }

        this.id = attributes.id;
        this.text = attributes.text;
        this.parentNode = attributes.parentNode;
        this.childNodes = attributes.childNodes || [];
        if (!angular.isArray(this.childNodes)) {
            this.childNodes = [];
        }
    }

    TreeNode.prototype.addChild = function (node) {
        var item;
        if (angular.isString(node)) {
            item = new TreeNode({ id: node });
        } else if (node instanceof TreeNode) {
            item = node;
        } else {
            item = new TreeNode(node);
        }
        this.childNodes.push(item);
        item.parentNode = this;
        return item;
    }

    TreeNode.prototype.removeChild = function (node) {
        if (angular.isString(node)) {
            this.childNodes = _.reject(this.childNodes, function (e) {
                if (node === e.id) {
                    e.parentNode = undefined;
                    return true;
                } else {
                    return false;
                }
            })
        } else if (angular.isDefined(node.id)) {
            this.childNodes = _.reject(this.childNodes, function (e) {
                if (node.id === e.id) {
                    e.parentNode = undefined;
                    return true;
                } else {
                    return false;
                }
            })
        }
    }

    TreeNode.prototype.containsChild = function (node) {
        var found;
        if (angular.isString(node)) {
            found = _.find(this.childNodes, function (e) {
                return node === e.id;
            })
        } else if (angular.isDefined(node.id)) {
            found = _.find(this.childNodes, function (e) {
                return node.id === e.id;
            })
        }
        return (found !== undefined && found !== null);
    }

    return {
        TreeNode: TreeNode
    }

});