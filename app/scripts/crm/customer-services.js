'use strict'

define(['angular'], function(angular){
	
	angular.module('ers.customer.services', ['ngResource'])
		.factory('CustomerService', ['$resource', function($resource){
			return $resource('/temp-data/customer.json/');
		}]);
	
	
})
