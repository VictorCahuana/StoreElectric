 var misEstilos = angular.module('estiloCompra',[]);

    misEstilos.controller('controladorEstilos', function($scope){
      $scope.imagenActiva = 'img/alarma.jpg';
      $scope.imagenActiva1 = 'img/box.jpeg';
      $scope.opcionA =function(){
        $scope.opcion = 'a';
        $scope.imagenActiva= 'img/aro.jpg';
        $scope.imagenActiva1= 'img/soporte_motor.jpg';
      }
      $scope.opcionB= function(){
        $scope.opcion = 'b';
        $scope.imagenActiva='img/filtro_aceite.jpg';
        $scope.imagenActiva1= 'img/filtro_aire.jpg';
      }
    });