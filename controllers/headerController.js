go2ahcApp.controller('headerController', ['$scope', '$location', function($scope, $location) {

    $scope.Init = function() {
        $scope.LoggedinUserFirstName = localStorage.getItem("firstName");
    };

    $scope.Init();
}]);
