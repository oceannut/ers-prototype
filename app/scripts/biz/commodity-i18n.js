'use strict'

define(['angular'], 
	function(angular){
		
		angular.module('ers.commodity.i18n',
			['pascalprecht.translate'])
			.config(['$translateProvider', function($translateProvider){
				
			    $translateProvider.translations('en', {
			        COMMODITY: 'Commodity',
			        COMMODITY_NAME: 'Commodity Name',
			        COMMODITY_ABBR: 'Commodity Abbr',
				});
			    $translateProvider.translations('zh-CN', {
			        COMMODITY: '商品',
			        COMMODITY_NAME: '商品全名',
			        COMMODITY_ABBR: '商品简名',
				});
				
			}])
	
});