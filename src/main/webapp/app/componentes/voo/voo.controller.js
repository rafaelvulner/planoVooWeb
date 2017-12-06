(function () {
    angular
        .module('atech')
        .controller('myCtrl', myCtrl);

    function myCtrl($scope, VooService) {

        $scope.lista = [];
       
      VooService.buscarTodos().then(function(data){
         $scope.lista = data.data;
      })
    }
})()







