/*jshint unused: vars */
define(['angular', 'angular-mocks', 'utils/tree-node'], function (angular, mocks, treeNode) {
    'use strict';

    describe('Util: TreeNode', function () {

        it('new', function () {
            var node = new treeNode.TreeNode("node");
            expect(node).not.toBe(null);
            expect('node').toBe(node.text);
            var node2 = new treeNode.TreeNode("another node");
            expect(node2).not.toBe(null);
            expect('another node').toBe(node2.text);
            expect(node2).not.toBe(node);
            expect(node2.addChild).toBe(node.addChild);
            expect(node2.removeChild).toBe(node.removeChild);
            expect(node2.containsChild).toBe(node.containsChild);
        });

        it('add', function () {
            var node = new treeNode.TreeNode("me is parent");
            node.addChild('one child');
            expect(node.childNodes.length).toBe(1);
            expect('one child').toBe(node.childNodes[0].id);
            node.addChild({ text: 'second child' });
            expect(node.childNodes.length).toBe(2);
            expect('second child').toBe(node.childNodes[1].text);
            node.addChild({ id: '3', text: 'third child' });
            expect(node.childNodes.length).toBe(3);
            expect('3').toBe(node.childNodes[2].id);
            expect('third child').toBe(node.childNodes[2].text);
        });

        it('remove', function () {
            var node = new treeNode.TreeNode("me is parent");
            var node1 = node.addChild('one child');
            var node2 = node.addChild({ id: '2', text: 'second child' });
            var node3 = node.addChild({ id: '3', text: 'third child' });

            expect(node.childNodes.length).toBe(3);
            node.removeChild('one child');
            expect(node.childNodes.length).toBe(2);
            node.removeChild(node3);
            expect(node.childNodes.length).toBe(1);
            expect(node2).toBe(node.childNodes[0]);
        });

        it('contains', function () {
            var node = new treeNode.TreeNode("me is parent");
            var node1 = node.addChild('one child');
            var node2 = node.addChild({ id: '2', text: 'second child' });
            var node3 = node.addChild({ id: '3', text: 'third child' });

            expect(node.childNodes.length).toBe(3);
            expect(node.containsChild('one child')).toBe(true);
            expect(node.containsChild({ id: 'one child' })).toBe(true);
            expect(node.containsChild('2')).toBe(true);
            expect(node.containsChild({ id: '2', text: 'second child' })).toBe(true);
        });

    });

});
