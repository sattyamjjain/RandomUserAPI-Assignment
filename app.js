var testApp = angular.module("testApp", []);

testApp.controller("testController", function ($scope, $http) {
    $scope.datas = []
    $scope.getRequestSearch = function () {
        var url = "https://randomuser.me/api";
        $http.get(url).then(
            function successCallback(response) {
                $scope.datas.push(response.data.results[0])
                // console.log($scope.datas)
            },
            function errorCallback(response) {
                alert("Error Occurred");
            }
        );
    };
});