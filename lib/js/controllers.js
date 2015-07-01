var angular = require('angular')

module.exports = angular.module('tecsite.controller', [])
	.controller('mostartCtrl', ['$scope', function($scope){
		
		$scope.mostrar = function (esquema){
			//condition ? instructionIfTrue : instructionIfFalse;
			if(esquema == 'senasica'){
				($scope.senasica == true) ? $scope.senasica = false : $scope.senasica = true;
			}
			if(esquema == 'usda'){
				($scope.usda == true) ? $scope.usda = false : $scope.usda = true;
			}
			if(esquema == 'global'){
				($scope.global == true) ? $scope.global = false : $scope.global = true;
			}
			if(esquema == 'haccp'){
				($scope.haccp == true) ? $scope.haccp = false : $scope.haccp = true;
			}
			if(esquema == 'primus'){
				($scope.primus == true) ? $scope.primus = false : $scope.primus = true;
			}
			if(esquema == 'ctpat'){
				($scope.ctpat == true) ? $scope.ctpat = false : $scope.ctpat = true;
			}
			if(esquema == 'bpa'){
				($scope.bpa == true) ? $scope.bpa = false : $scope.bpa = true;
			}
			if(esquema == 'buma'){
				($scope.buma == true) ? $scope.buma = false : $scope.buma = true;
			}
			if(esquema == 'bpm'){
				($scope.bpm == true) ? $scope.bpm = false : $scope.bpm = true;
			}
			if(esquema == 'stps'){
				($scope.stps == true) ? $scope.stps = false : $scope.stps = true;
			}
			if(esquema == 'scs'){
				($scope.scs == true) ? $scope.scs = false : $scope.scs = true;
			}
			if(esquema == 'lgpgir'){
				($scope.lgpgir == true) ? $scope.lgpgir = false : $scope.lgpgir = true;
			}
		}	

	}])