/*jshint unused: vars */
define(['angular', 'angular-mocks', 'common/category-tree-utils'], function (angular, mocks) {
    'use strict';

    describe('Util: CategoryTreeUtil', function () {

        beforeEach(module('ers.category.tree.utils'));

        var categoryTreeUtil, $log;
        var treeNodes = [{
            "Id": "01",
            "Name": "����",
            "Parent": null,
            "children": [{
                "Id": "0101",
                "Name": "����",
                "Parent": "01",
                "children": [{
                    "Id": "010101",
                    "Name": "֪����",
                    "Parent": "0101"
                }, {
                    "Id": "010102",
                    "Name": "�йش�",
                    "Parent": "0101",
                    "children": null
                }]
            }, {
                "Id": "0102",
                "Name": "����",
                "Parent": "01",
                "children": [{
                    "Id": "010201",
                    "Name": "������",
                    "Parent": "0102",
                    "children": []
                }, {
                    "Id": "010202",
                    "Name": "��ó",
                    "Parent": "0102"
                }]
            }]
        }];

        beforeEach(inject(function (_CategoryTreeUtil_, _$log_) {
            categoryTreeUtil = _CategoryTreeUtil_;
            $log = _$log_;
        }));

        it('findNodeByTraverseTree', function () {
            expect(categoryTreeUtil).toBeDefined();
            expect(categoryTreeUtil.findNodeByTraverseTree).toBeDefined();

            var node = categoryTreeUtil.findNodeByTraverseTree(treeNodes[0], '01');
            expect(node).not.toBe(null);
            node = categoryTreeUtil.findNodeByTraverseTree(treeNodes[0], '0102');
            expect(node).not.toBe(null);
            node = categoryTreeUtil.findNodeByTraverseTree(treeNodes[0], '010102');
            expect(node).not.toBe(null);
            node = categoryTreeUtil.findNodeByTraverseTree(treeNodes[0], 'none');
            expect(node).toBe(null);

            node = categoryTreeUtil.findNodeByTraverseTree(treeNodes, '01');
            expect(node).not.toBe(null);
            node = categoryTreeUtil.findNodeByTraverseTree(treeNodes, '010102');
            expect(node).not.toBe(null);

            node = categoryTreeUtil.findNodeByTraverseTree(null, '01');
            expect(node).toBe(null);
        });

    });

});
