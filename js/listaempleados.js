var miApp=angular.module('filtrodatos',[]);

	miApp.controller('listas',function($scope){
		$scope.empleados=[
			{
				nombre:'Armando',
				apellido:'Alegria',
				edad: 32,
				sueldo:1500,
			},
			{
				nombre:'Julio',
				apellido:'Cegarra',
				edad: 25,
				sueldo:1000,
			},
			{
				nombre:'Micaela',
				apellido:'Huaman',
				edad: 21,
				sueldo:1800,
			},
			{
				nombre:'Jose',
				apellido:'Alcantara',
				edad: 33,
				sueldo:1150,
			},
			{
				nombre:'Manuel',
				apellido:'Perez',
				edad: 44,
				sueldo:1050,
			},
			{
				nombre:'Luis',
				apellido:'Pablo',
				edad: 62,
				sueldo:1560,
			},
			{
				nombre:'Mariana',
				apellido:'Gutierrez',
				edad: 51,
				sueldo:1720,
			},
			{
				nombre:'Ernesto',
				apellido:'Gutierrez',
				edad: 41,
				sueldo:1455,
			},
			{
				nombre:'Katty',
				apellido:'Estela',
				edad: 28,
				sueldo:1500,
			},
			{
				nombre:'Milagros',
				apellido:'Bonifacio',
				edad: 63,
				sueldo:1399,
			},
			{
				nombre:'Camila',
				apellido:'Bello',
				edad: 55,
				sueldo:3000,
			},
			{
				nombre:'Benito',
				apellido:'Huaman',
				edad: 40,
				sueldo:3150,
			},
			{
				nombre:'Gianfranco',
				apellido:'Estrella',
				edad: 38,
				sueldo:2000,
			}
		];
	});