'use strict'

define(['angular', 
        'i18n',
        'routes' ],
	function(angular){

		/**
		 * @ngdoc overview
		 * @name ers
		 * @description # ers
		 * 
		 * Main module of the application.
		 */
		return angular.module('ers',
			['ers.i18n',
			 'ers.routes']);
	
	});
