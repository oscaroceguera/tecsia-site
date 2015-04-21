(function(){
	var tecsiteEN = angular.module('tecsiteEN', ['ngRoute'])
		.config(['$routeProvider',function($routeProvider) {
			$routeProvider
				.when('/',{
					templateUrl: '../views/info.html'
				})
				.when('/info',{
					templateUrl: '../views/info.html'
				})
				.when('/services',{
					templateUrl: '../views/services.html'
				})
				.when('/clients',{
					templateUrl: '../views/clients.html'
				})
				.when('/contac',{
					templateUrl: '../views/contac.html'
				})
				.otherwise({
					redirecTo: '/'
				});
		}]);

})();