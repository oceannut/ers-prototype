'use strict'

function TreeNode(attributes) {
    attributes = attributes || {};
    if (angular.isString(attributes)) {
        attributes = { text: attributes };
    }

    this.text = attributes.text;
}

TreeNode.prototype.addChild = function (node) {
    console.log(node);
}