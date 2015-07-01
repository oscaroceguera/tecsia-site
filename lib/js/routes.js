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
	.when('/clientes',{
		templateUrl: './public/views/clientes/template.html',
	})
	.when('/contacto',{
		templateUrl: './public/views/contacto/template.html',
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

