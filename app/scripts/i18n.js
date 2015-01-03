'use strict'

define(['angular'], 
	function(angular){
		
		angular.module('ers.i18n',
			['pascalprecht.translate'])
			.config(['$translateProvider', function($translateProvider){
				
				$translateProvider.translations('en', {
					APP_TITLE : 'Enterprise Resource System',
					NAV_CUSTOMER : 'Customer',
					NAV_CONTACT : 'Contact',
				});
				$translateProvider.translations('zh-CN', {
					APP_TITLE : '企业资源管理',
					NAV_CUSTOMER : '客户管理',
					NAV_CONTACT : '联系人管理',
				});
				//$translateProvider.preferredLanguage('en');
				$translateProvider.preferredLanguage('zh-CN');
				
			}])
	
});