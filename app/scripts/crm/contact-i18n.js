'use strict'

define(['angular'], 
	function(angular){
		
		angular.module('ers.contact.i18n',
			['pascalprecht.translate'])
			.config(['$translateProvider', function($translateProvider){
				
			    $translateProvider.translations('en', {
			        CONTACT: 'Contact',
				    CONTACT_NAME: 'Name',
				    CONTACT_BIRTHDAY: 'Birthday',
				    CONTACT_POST : 'Post',
				    CONTACT_SEX : 'Sex',
				    CONTACT_EDUCATION : 'Education Background',
				});
			    $translateProvider.translations('zh-CN', {
			        CONTACT: '联系人',
				    CONTACT_NAME: '姓名',
				    CONTACT_BIRTHDAY: '出生日期',
				    CONTACT_POST: '职务',
				    CONTACT_SEX: '性别',
				    CONTACT_EDUCATION: '学历',
				});
				
			}])
	
});