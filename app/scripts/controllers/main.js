define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name ersPrototypeApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the ersPrototypeApp
   */
  angular.module('ersPrototypeApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
