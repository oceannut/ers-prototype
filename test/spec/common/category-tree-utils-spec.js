/*jshint unused: vars */
define(['angular', 'angular-mocks', 'common/category-tree-utils'], function (angular, mocks) {
    'use strict';

    describe('Util: CategoryTreeUtil', function () {

        beforeEach(module('ers.category.tree.utils'));

        var categoryTreeUtil, $log;
        var treeNodes = [{
            "Id": "01",
            "Name": "北京",
            "Parent": null,
            "children": [{
                "Id": "0101",
                "Name": "海淀",
                "Parent": "01",
                "children": [{
                    "Id": "010101",
                    "Name": "知春里",
                    "Parent": "0101"
                }, {
                    "Id": "010102",
                    "Name": "中关村",
                    "Parent": "0101",
                    "children": null
                }]
            }, {
                "Id": "0102",
                "Name": "朝阳",
                "Parent": "01",
                "children": [{
                    "Id": "010201",
                    "Name": "三里屯",
                    "Parent": "0102",
                    "children": []
                }, {
                    "Id": "010202",
                    "Name": "国贸",
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
