
function ContatosController($scope, $http) {


    $scope.setValues = function() {
    	console.log($scope.value);

		$http.post('/setValues', $scope.value).success(function() {
			//$scope.contatos.push($scope.contato);
			//$scope.contato = new Contato();
			consol.log("POST SUCCSESS")
		});
	}


    setInterval(() => {
        $http.get('/getData').success(function(retorno) {


        $scope.data = retorno.data.replace(/'/g, '"');


        console.log(JSON.parse($scope.data));

        var json  = JSON.parse($scope.data);

        function State() {
            this.temp = json.temp_state;
            this.umid = json.hum_state;
        }

        $scope.state = new State();

        console.log($scope.state)

    });
}, 5000);





}
