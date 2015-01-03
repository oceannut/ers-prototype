'use strict'

define(['angular'], 
	function(angular){
		
		angular.module('ers.customer.i18n',
			['pascalprecht.translate'])
			.config(['$translateProvider', function($translateProvider){
				
				$translateProvider.translations('en', {
					PRIMARY_TITLE : 'Primary',
					FULL_NAME : 'Customer',
					SPELL : 'Spell',
					ID : 'ID',
					CATEGORY : 'Category',
					REGION : 'Region',
					INDUSTRY : 'Industry',
					SECONDARY_TITLE : 'Secondary',
					ADDRESS : 'Address',
					ZIP : 'Zip Code',
					TEL : 'Tel',
					FAX : 'Fax',
					LEGAL_PERSON : 'Legal Person',
					WEB_SITE : 'Web Site',
					EMAIL : 'Email',
				});
				$translateProvider.translations('zh-CN', {
					PRIMARY_TITLE : '主要信息',
					FULL_NAME : '单位名称',
					SPELL : '拼音码',
					ID : '单位编号',
					CATEGORY : '客户类别',
					REGION : '地区',
					INDUSTRY : '行业类型',
					SECONDARY_TITLE : '辅助信息',
					ADDRESS : '单位地址',
					ZIP : '邮政编码',
					TEL : '电话',
					FAX : '传真',
					LEGAL_PERSON : '法人代表',
					WEB_SITE : '公司主页',
					EMAIL : '电子邮件',
				});
				
			}])
	
});