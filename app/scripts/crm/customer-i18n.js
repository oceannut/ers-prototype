'use strict'

define(['angular'], 
	function(angular){
		
		angular.module('ers.customer.i18n',
			['pascalprecht.translate'])
			.config(['$translateProvider', function($translateProvider){
				
			    $translateProvider.translations('en', {
			        CUSTOMER : 'Customer',
					CUSTOMER_COMPANY : 'Company',
					CUSTOMER_INDUSTRY: 'Industry',
					CUSTOMER_LEGAL_PERSON: 'Legal Person',
					CUSTOMER_CONTACT_LIST: 'Contact List',
				});
			    $translateProvider.translations('zh-CN', {
			        CUSTOMER: '客户信息',
				    CUSTOMER_COMPANY: '公司',
				    CUSTOMER_INDUSTRY: '行业',
				    CUSTOMER_LEGAL_PERSON: '法人代表',
				    CUSTOMER_CONTACT_LIST: '联系人',
				});
				
			}])
	
});