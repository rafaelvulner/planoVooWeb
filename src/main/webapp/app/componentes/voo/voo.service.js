(function() {
	angular.module('atech').factory('VooService', VooService);

	function VooService($http) {
		var service = {
			buscarTodos : buscarTodos
		}

		return service;

		function buscarTodos() {
			return $http.get("http://localhost:8080/voo/buscarTodos").then();
		}

	}

})()