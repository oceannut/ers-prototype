'use strict'

define([ 'angular', 
         'crm/customer-services' , 
         'crm/customer-i18n' ], 
    function(angular) {

	angular.module('ers.customer.controllers', 
			[ 'ers.customer.services',
			  'ers.customer.i18n' ])
			.controller(
					'CustomerCtrl',
					[ '$scope', 'CustomerService',
					function($scope, CustomerService) {

						$scope.init = function() {
							CustomerService.query()
							.$promise
								.then(function(result){
									if(result.length>0){
										$scope.customerList=result;
									}
								},function(error){
									console.log(error);
								});
						}
						
						$scope.selectCustomer = function(customer){
							$scope.currentCustomer = angular.extend({},customer);
							$scope.$broadcast('customerSelectionChanged',$scope.currentCustomer);
						}
						
						$scope.editCustomer=function(customer){
							$scope.selectCustomer(customer);
							$('#editDialog').modal('show');
						}

						$scope.save = function() {
							console.log("save");
							console.log($scope.currentCustomer.Name);
						}

					} ])
			.controller('CustomerDetailCtrl',
					[ '$scope', 
				    function($scope) {

						console.log('customer-detail');
						console.log($scope);
						
						$scope.init= function(){
							$scope.$parent.currentCustomer = $scope.customer = {
									Name : undefined
								};
						
							$scope.$on('customerSelectionChanged', function(e, d) {
							    $scope.customer = d;
							});
						}

					} ]);

})
