/*jshint unused: vars */
define(['angular', 'angular-mocks', 'utils/tree'], function (angular, mocks) {
    'use strict';

    describe('Util: TreeUtil', function () {

        beforeEach(module('util.tree'));

        var treeUtil, $log, treeNodes;

        beforeEach(inject(function (_TreeUtil_, _$log_) {
            treeUtil = _TreeUtil_;
            $log = _$log_;
        }));

        beforeEach(function () {
            treeNodes = [{
                "Id": "01",
                "Name": "����",
                "parentId": null,
                "children": [{
                    "Id": "0101",
                    "Name": "����",
                    "parentId": "01",
                    "children": [{
                        "Id": "010101",
                        "Name": "֪����",
                        "parentId": "0101"
                    }, {
                        "Id": "010102",
                        "Name": "�йش�",
                        "parentId": "0101",
                        "children": null
                    }]
                }, {
                    "Id": "0102",
                    "Name": "����",
                    "parentId": "01",
                    "children": [{
                        "Id": "010201",
                        "Name": "������",
                        "parentId": "0102",
                        "children": []
                    }, {
                        "Id": "010202",
                        "Name": "��ó",
                        "parentId": "0102"
                    }]
                }]
            }, {
                "Id": "02",
                "Name": "�Ϻ�",
                "parentId": null
            }];
        });

        it('findNode', function () {
            expect(treeUtil).toBeDefined();
            expect(treeUtil.findNode).toBeDefined();

            var node = treeUtil.findNode(treeNodes[0], function (node) { return node.Id === '01'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes[0], function (node) { return node.Id === '0102'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes[0], function (node) { return node.Id === '010102'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes[0], function (node) { return node.Id === 'none'; });
            expect(node).toBe(null);

            node = treeUtil.findNode(treeNodes, function (node) { return node.Id === '01'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes, function (node) { return node.Id === '010102'; });
            expect(node).not.toBe(null);
            node = treeUtil.findNode(treeNodes, function (node) { return node.Id === '02'; });
            expect(node).not.toBe(null);

            node = treeUtil.findNode(null, function (node) { return node.Id === '01'; });
            expect(node).not.toBeDefined();
            node = treeUtil.findNode(treeNodes, null);
            expect(node).not.toBeDefined();
            node = treeUtil.findNode(treeNodes, true);
            expect(node).not.toBeDefined();
        });

    });

});
