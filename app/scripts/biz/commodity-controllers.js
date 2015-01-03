'use strict'

define(['angular',
        'biz/commodity-i18n'],
    function (angular) {

        angular.module('ers.commodity.controllers', ['ers.commodity.i18n'])
            .controller(
                'CommodityCtrl',
                ['$scope',
                function ($scope) {

                    $scope.init = function () {
                        
                    }

                }])
            .controller('CommodityDetailCtrl',
                ['$scope',
                function ($scope) {


                }]);

    })
