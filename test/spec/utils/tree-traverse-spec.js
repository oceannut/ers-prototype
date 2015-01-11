/*jshint unused: vars */
define(['angular', 'angular-mocks', 'utils/tree-traverse', 'utils/tree-node'],
    function (angular, mocks, traverse, treeNode) {
    'use strict';

    describe('Util: TreeTraverse', function () {

        beforeEach(module('util.treeTraverse'));

        var treeUtil, $log;

        beforeEach(inject(function (_TreeTraverse_, _$log_) {
            treeUtil = _TreeTraverse_;
            $log = _$log_;
        }));

        it('findNode', function () {

            var bj = new treeNode.TreeNode({ id: '01', text: 'bj' });
            var hd = new treeNode.TreeNode({ id: '0101', text: 'hd' });
            bj.addChild(hd);
            var zcl = new treeNode.TreeNode({ id: '010101', text: 'zcl' });
            hd.addChild(zcl);
            expect(zcl.parentNode).toBe(hd);
            var zgc = new treeNode.TreeNode({ id: '010102', text: 'zgc' });
            hd.addChild(zgc);
            expect(zgc.parentNode).toBe(hd);
            var cy = new treeNode.TreeNode({ id: '0102', text: 'cy' });
            bj.addChild(cy);
            var slt = new treeNode.TreeNode({ id: '010201', text: 'slt' });
            cy.addChild(slt);
            var gm = new treeNode.TreeNode({ id: '010202', text: 'gm' });
            cy.addChild(gm);
            var sh = new treeNode.TreeNode({ id: '02', text: 'sh' });
            var treeNodes = [bj, sh];

            expect(treeUtil).toBeDefined();
            expect(treeUtil.findNode).toBeDefined();

            var node = treeUtil.findNode(treeNodes[0], function (node) { return node.id === '01'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes[0], function (node) { return node.id === '0102'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes[0], function (node) { return node.id === '010102'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes[0], function (node) { return node.id === 'none'; });
            expect(node).toBe(null);

            node = treeUtil.findNode(treeNodes, function (node) { return node.id === '01'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes, function (node) { return node.id === '010102'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes, function (node) { return node.id === '02'; });
            expect(node).not.toBe(null);

            node = treeUtil.findNode(null, function (node) { return node.id === '01'; });
            expect(node).not.toBeDefined();
            node = treeUtil.findNode(treeNodes, null);
            expect(node).not.toBeDefined();
            node = treeUtil.findNode(treeNodes, true);
            expect(node).not.toBeDefined();
        });

    });

});
