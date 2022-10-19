var controladorApp=angular.module('controladores',[]);

	controladorApp.controller('controladorConMetodos',function($scope){
		$scope.valor1=0;
		$scope.valor2=0;
		//crear métedos y estos puedan estar dentro de un controlador

		
		$scope.multiplicar = function(){
			$scope.resultado=$scope.valor1 * $scope.valor2;
		}

		
	});