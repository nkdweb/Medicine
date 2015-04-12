go2ahcApp.controller('dashboardController', ['$scope', '$location', function($scope, $location) {
    $scope.underCons = function() {
        $location.path("/contacts_import");
    };
    $scope.gotoMapping = function() {
        $location.path("/mapping");
    };
    $scope.gotoGrouping = function() {
        $location.path("/construction");
    };

    $scope.gotoContacts = function() {
        $location.path("/contacts");
    };
    $scope.gotoSetting = function() {
        $location.path("/setting");
    };

    $scope.logout = function(event, bool) {
        var Names = {
            firstName: null,
            authentication: false
        };

        globalfn.mergeSourceInToTarget(localStorage, Names);
        $location.path('/home');
    };
}]);
