/*jshint unused: vars */
define(['angular', 'angular-mocks', 'utils/tree-node'], function (angular, mocks) {
    'use strict';

    describe('Util: TreeNode', function () {

        console.log(TreeNode);
        it('test', function () {
            var node = new TreeNode("test");
            expect(node).not.toBe(null);
            var node2 = new TreeNode("test2");
            expect(node2).not.toBe(null);
            expect(node2).not.toBe(node);
            expect(node2.addChild).toBe(node.addChild);

        });

    });

});
