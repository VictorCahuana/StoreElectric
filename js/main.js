//creacion del modulo, este va a permitir
//routear las paginas es decir la redireccion de las paginas
var angularRoutingApp=angular.module('angularRoutingApp',['ngRoute']);

//configuracion de las rutas, a donde lo vamos a enlazar
angularRoutingApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'pages/ListaEmpleados.html',
		controller: 'mainController'
	})

	.when('/ingresarproducto',{
		templateUrl: 'pages/IngresarProducto.html',
		controller: 'ingresarproductoController'
	})

	.when('/calculadora',{
		templateUrl: 'pages/Calculadora.html',
		controller: 'calculadoraController'
	})

	.otherwise({
		redirectTo: '/'
	});
});

/*angularRoutingApp.controller('mainController',function($scope){
	$scope.message="Usted está viendo la lista de empleados";
});*/

angularRoutingApp.controller('ingresarproductoController',function($scope){
	$scope.message="Esta es la pagina para ingresar productos";
});

angularRoutingApp.controller('calculadoraController',function($scope){
	$scope.message="Esta es la pagina para calcular precios";
});

angularRoutingApp.controller('controladorConMetodos',function($scope){
		$scope.valor1=0;
		$scope.valor2=0;
		//crear métedos y estos puedan estar dentro de un controlador

		
		$scope.multiplicar = function(){
			$scope.resultado=$scope.valor1 * $scope.valor2;
			$scope.dolar=($scope.valor1 * $scope.valor2)/3.84;
		}

});

angularRoutingApp.controller('listas',function($scope){
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

angularRoutingApp.controller('listaproducto',function($scope){
		$scope.productos=[
			{
				nombre:'Bastón de seguridad timón',
				precio:44,
				marca:'Districol',
				stock:5,
			},
			{
				nombre:'Kit de emergencia para auto',
				precio:89,
				marca:'Diseños JERIG',
				stock:2,
			},
			{
				nombre:'Alarma integrada para autos',
				precio:140,
				marca:'Oz Tuning',
				stock:6,
			},
			{
				nombre:'Espejo de Retroceso Montable 4.3" con cámara',
				precio:200,
				marca:'Oz Tuning',
				stock:10,
			},
			{
				nombre:'Batería para Auto 13 Placas 70Ah FF-13 PL P/D',
				precio:319,
				marca:'ETNA',
				stock:5,
			},
			{
				nombre:'Kit Interior Eco',
				precio:39.90,
				marca:'ECO-FULL',
				stock:10,
			},
			{
				nombre:'Llanta LT225/70R16 102/99T',
				precio:489.90,
				marca:'Pirelli',
				stock:4,
			},
			{
				nombre:'Lavaparabrisa Concentrado',
				precio:16.90,
				marca:'Sonax',
				stock:20,
			},
			{
				nombre:'Tapasol de lunas laterales de Auto',
				precio:11,
				marca:'Tecgo',
				stock:3,
			},
			{
				nombre:'Pistola sopladora',
				precio:21.90,
				marca:'Redline',
				stock:6,
			},
			{
				nombre:'Llanta 105/55R18 105W Latitude Sport',
				precio:200,
				marca:'Michelin',
				stock:8,
			},
			{
				nombre:'Cinta Señalización 400mt Amarillo',
				precio:67.90,
				marca:'RFX',
				stock:8,
			},
			{
				nombre:'Cobertor Funda Kia Seltos Gris',
				precio:224,
				marca:'Tecgo',
				stock:4,
			},
			{
				nombre:'Batería para auto 13 placas 12V 13 WI',
				precio:229,
				marca:'CAPSA',
				stock:5,
			},
			{
				nombre:'Batería para auto 13 placas 75Ah W-13 PRO',
				precio:224.90,
				marca:'ETNA',
				stock:8,
			},
			{
				nombre:'Cargador auto dual 2.1 A negro',
				precio:24.90,
				marca:'Usams',
				stock:3,
			}
		];
	});