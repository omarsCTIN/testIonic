angular.module('App')
.controller('EstadoUnoController', function ($scope) {
  $scope.modelo = {
    fecha: new Date(),    
    numero: 156,
    precio: 121,
    palabra: 'resortwifi'
  };
});