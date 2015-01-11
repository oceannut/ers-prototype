/*jshint unused: vars */
define(['angular', 'angular-mocks', 'utils/tree-builder', 'utils/tree-traverse'],
    function (angular, mocks) {
    'use strict';

    describe('Util: TreeBuilder', function () {

        beforeEach(module('util.treeBuilder'));
        beforeEach(module('util.treeTraverse'));

        var treeBuilder, treeTraverse;

        beforeEach(inject(function (_TreeBuilder_, _TreeTraverse_) {
            treeBuilder = _TreeBuilder_;
            treeTraverse = _TreeTraverse_;
        }));

        it('buildTree', function () {
            var arr = [
                {
                    "id": "1",
                    "name": "material",
                    "parentId": null,
                    "sequence": 1
                },
                {
                    "id": "2",
                    "name": "stanz",
                    "sequence": 2
                },
                {
                    "id": "11",
                    "name": "IgA",
                    "parentId": "1",
                    "sequence": 1
                },
                {
                    "id": "13",
                    "name": "IgE",
                    "parentId": "1",
                    "sequence": 3
                },
                {
                    "id": "111",
                    "name": "IgA-human",
                    "parentId": "11",
                    "sequence": 1
                },
                {
                    "id": "3",
                    "name": "OEM",
                    "parentId": null,
                    "sequence": 3
                },
                {
                    "id": "12",
                    "name": "IgB",
                    "parentId": "1",
                    "sequence": 2
                },
                {
                    "id": "21",
                    "name": "Hcy",
                    "parentId": "2",
                    "sequence": 1
                },
                {
                    "id": "121",
                    "name": "IgB-mouse",
                    "parentId": "12",
                    "sequence": 1
                }
            ];
            var tree = treeBuilder.buildTree(arr, function (e) {
                return {
                    id: e.id,
                    text: e.name
                };
            });
            expect(arr.length).toBeGreaterThan(0);
            expect(tree).toEqual(jasmine.any(Array));
            expect(tree.length).toBe(3);
            treeTraverse.sort(tree, function (e) {
                console.log(e);
            });
        });

        it('buildTree2', function () {
            var arr = [
                {
                    "id": "1",
                    "text": "material",
                    "parentId": null,
                    "sequence": 1
                },
                {
                    "id": "2",
                    "text": "stanz",
                    "sequence": 2
                },
                {
                    "id": "11",
                    "text": "IgA",
                    "parentId": "1",
                    "sequence": 1
                }
            ];
            var tree = treeBuilder.buildTree(arr);
            expect(arr.length).toBeGreaterThan(0);
            expect(tree).toEqual(jasmine.any(Array));
            expect(tree.length).toBe(2);
            treeTraverse.traverse(tree, function (e) {
                console.log(e);
            });
        });

    });

});
