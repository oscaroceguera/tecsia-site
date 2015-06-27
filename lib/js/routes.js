var angular = require('angular')
var ngRoute = require('angular-route')
require('./controllers.js')

var tecsite = angular.module('tecsite', ['ngRoute','tecsite.controller'])
	.config(['$routeProvider',function($routeProvider) {
			$routeProvider
				.when('/',{
					templateUrl: './public/views/nosotros/template.html'
				})
				.when('/nosotros',{
					templateUrl: './public/views/nosotros/template.html'
				})
				.when('/servicios',{
					templateUrl: './public/views/servicios/template.html',
					controller : 'mostartCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
	}]);

