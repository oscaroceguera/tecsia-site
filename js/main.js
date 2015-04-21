(function(){
	var tecsite = angular.module('tecsite', ['ngRoute'])
		.config(['$routeProvider',function($routeProvider) {
			$routeProvider
				.when('/',{
					templateUrl: 'views/nosotros.html'
				})
				.when('/nosotros',{
					templateUrl: 'views/nosotros.html'
				})
				.when('/servicios',{
					templateUrl: 'views/servicios.html'
				})
				.when('/clientes',{
					templateUrl: 'views/clientes.html'
				})
				.when('/contacto',{
					templateUrl: 'views/contacto.html'
				})
				.otherwise({
					redirecTo: '/'
				});
		}]);

})();