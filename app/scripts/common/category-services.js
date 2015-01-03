'use strict'

define(['angular'], function(angular){
	
	angular.module('ers.category.services', ['ngResource'])
		.factory('CategoryService', ['$resource', function($resource){
		    return $resource('/temp-data/:categoryScope.json/');
		}]);
	
	
})
