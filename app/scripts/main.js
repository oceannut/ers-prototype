/*jshint unused: vars */
require
	.config({
		paths: {
			angular: '../../bower_components/angular/angular',
			'angular-animate': '../../bower_components/angular-animate/angular-animate',
			'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
			'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
			'angular-resource': '../../bower_components/angular-resource/angular-resource',
			'angular-route': '../../bower_components/angular-route/angular-route',
			'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
			'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
			'angular-touch': '../../bower_components/angular-touch/angular-touch',
			'angular-translate': '../../bower_components/angular-translate/angular-translate',
			jquery: '../../bower_components/jquery/dist/jquery',
			bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
			underscore: '../../bower_components/underscore/underscore'
		},
		shim: {
			angular: {
				exports: 'angular'
			},
			'angular-route': [
				'angular'
			],
			'angular-cookies': [
				'angular'
			],
			'angular-sanitize': [
				'angular'
			],
			'angular-resource': [
				'angular'
			],
			'angular-animate': [
				'angular'
			],
			'angular-touch': [
				'angular'
			],
			'angular-translate': [
				'angular'
			],
			'angular-mocks': {
				deps: [
					'angular'
				],
				exports: 'angular.mock'
			},
			bootstrap: [
				'jquery'
			],
			underscore: {
				exports: '_'
			}
		},
		priority: [
			'angular'
		],
		packages: [
	
		]
	});

// http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([ 'angular', 'app', 'angular-route', 'angular-cookies',
		'angular-sanitize', 'angular-resource', 'angular-animate',
		'angular-touch', 'angular-translate', 'jquery', 'bootstrap', 'underscore' ], function(
		angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate,
		ngTouch, ngTranslate, jquery, bootstrap, underscore) {
	'use strict';
	/* jshint ignore:start */
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	/* jshint ignore:end */
	angular.element().ready(function() {
		console.log(app.name);
		angular.resumeBootstrap([ app.name ]);
	});
});
