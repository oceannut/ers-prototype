'use strict'

define(['angular',
        'controllers/main',
		'controllers/about', 
		'crm/customer-controllers',
		'crm/contact-controllers'], 
	function(angular){
		
		angular.module('ers.routes', 
			['ngRoute',  
			 'ersPrototypeApp.controllers.MainCtrl',
			 'ersPrototypeApp.controllers.AboutCtrl',
			 'ers.customer.controllers',
			 'ers.contact.controllers'])
			.config(['$routeProvider', function($routeProvider) {
				$routeProvider
					.when('/', {
						templateUrl : 'views/main.html',
						controller : 'MainCtrl'
					})
					.when('/about', {
						templateUrl : 'views/about.html',
						controller : 'AboutCtrl'
					})
					.when('/customer', {
						templateUrl : 'views/crm/customer-list.html',
						controller : 'CustomerCtrl'
					})
					.when('/contact', {
						templateUrl : 'views/crm/contact-list.html',
						controller : 'ContactCtrl'
					})
					.otherwise({
						redirectTo : '/'
					});
	
			}]);
	
});