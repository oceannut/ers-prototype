define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name ersPrototypeApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the ersPrototypeApp
   */
  angular.module('ersPrototypeApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
