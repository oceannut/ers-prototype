'use strict'

define(['angular',
        'crm/contact-i18n'],
    function (angular) {

        angular.module('ers.contact.controllers', ['ers.contact.i18n'])
            .controller(
                'ContactCtrl',
                ['$scope',
                function ($scope) {

                    $scope.init = function () {
                        
                    }

                    $scope.selectContact = function (contact) {
                        $scope.currentContact = angular.extend({}, contact);
                        $scope.$broadcast('contactSelectionChanged', $scope.currentContact);
                    }

                    $scope.editContact = function (contact) {
                        $scope.selectContact(contact);
                        $('#editDialog').modal('show');
                    }

                    $scope.save = function () {
                        console.log("save");
                        console.log($scope.currentContact.Name);
                    }

                }])
            .controller('ContactDetailCtrl',
                ['$scope',
                function ($scope) {

                    console.log('contact-detail');
                    console.log($scope);

                    $scope.init = function () {
                        $scope.$parent.currentContact = $scope.contact = {
                            Name: undefined
                        };

                        $scope.$on('contactSelectionChanged', function (e, d) {
                            $scope.contact = d;
                        });
                    }

                }]);

    })
