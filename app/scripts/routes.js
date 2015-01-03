'use strict'

define(['angular',
        'common/category-controllers',
        'biz/commodity-controllers',
		'crm/customer-controllers',
		'crm/contact-controllers'], 
	function(angular){
		
		angular.module('ers.routes', 
			['ngRoute',
             'ers.category.controllers',
             'ers.commodity.controllers',
			 'ers.customer.controllers',
			 'ers.contact.controllers'])
			.config(['$routeProvider', function($routeProvider) {
			    $routeProvider
                    .when('/category/:categoryScope', {
                        templateUrl: 'views/common/category-list.html',
                        controller: 'CategoryCtrl'
                    })
                    .when('/commodity', {
                        templateUrl: 'views/biz/commodity-list.html',
                        controller: 'CommodityCtrl'
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
					    redirectTo: '/commodity'
					});
	
			}]);
	
});