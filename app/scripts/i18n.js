'use strict'

define(['angular'], 
	function(angular){
		
		angular.module('ers.i18n',
			['pascalprecht.translate'])
			.config(['$translateProvider', function($translateProvider){
				
				$translateProvider.translations('en', {
				    APP_TITLE: 'Enterprise Resource System',
				    NAV_CRM : 'CRM',
					NAV_CUSTOMER : 'Customer',
					NAV_CONTACT: 'Contact',
					FORM_PRIMARY_TITLE: 'Primary',
					FORM_SECONDARY_TITLE: 'Secondary',
				    FORM_DIALOG: 'Dialog',
					FORM_ID: 'ID',
					FORM_NAME: 'Name',
					FORM_SPELL: 'Spell',
					FORM_CATEGORY: 'Category',
					FORM_DEPT: 'Department',
					FORM_ADDRESS: 'Address',
					FORM_ZIP: 'Zip Code',
					FORM_TEL: 'Tel',
					FORM_CELL: 'Cell',
					FORM_FAX: 'Fax',
					FORM_WEB_SITE: 'Web Site',
					FORM_EMAIL: 'Email',
					FORM_REGION: 'Region',
					FORM_SPECS: 'Specifications',
					FORM_MODEL: 'Model',
					FORM_ORIGIN: 'Origin',
					FORM_USEFUL_LIFE: 'Useful Life',
					FORM_YEAR: 'Year',
					FORM_MONTH: 'Month',
					FORM_DAY: 'Day',
					ACTION_ADD: 'Add',
					ACTION_EDIT: 'Edit',
					ACTION_SAVE: 'Save',
					ACTION_DELETE: 'Delete',
					ACTION_QUERY: 'Query',
					ACTION_OK: 'Ok',
					ACTION_CANCEL: 'Cancel',
				});
				$translateProvider.translations('zh-CN', {
				    APP_TITLE: '企业资源管理',
				    NAV_CRM: '客户关系',
					NAV_CUSTOMER : '客户管理',
					NAV_CONTACT: '联系人管理',
					FORM_PRIMARY_TITLE: '主要信息',
					FORM_SECONDARY_TITLE: '辅助信息',
					FORM_DIALOG: '对话框',
					FORM_ID: '编号',
					FORM_NAME: '名称',
					FORM_SPELL: '拼音码',
					FORM_CATEGORY: '类别',
					FORM_DEPT: '部门',
					FORM_ADDRESS: '地址',
					FORM_ZIP: '邮政编码',
					FORM_TEL: '联系电话',
					FORM_CELL: '移动电话',
					FORM_FAX: '传真',
					FORM_WEB_SITE: '网站',
					FORM_EMAIL: '电子邮件',
					FORM_REGION: '地区',
					FORM_SPECS: '规格',
					FORM_MODEL: '型号',
					FORM_ORIGIN: '产地',
					FORM_USEFUL_LIFE: '有效期',
					FORM_YEAR: '年',
					FORM_MONTH: '月',
					FORM_DAY: '天',
					ACTION_ADD: '添加',
					ACTION_EDIT: '编辑',
					ACTION_SAVE: '保存',
					ACTION_DELETE: '删除',
					ACTION_QUERY: '查询',
					ACTION_OK: '确定',
					ACTION_CANCEL: '取消',
				});
				//$translateProvider.preferredLanguage('en');
				$translateProvider.preferredLanguage('zh-CN');
				
			}])
	
});