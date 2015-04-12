go2ahcApp.controller('userListController', ['$scope', '$location', function($scope, $location) {

    var userListProxy = new userList();

    $scope.userListFetched = function(result) {
        //console.log("login result = " + JSON.stringify(result));  

        $scope.userListData = result.getAllUsersResponseDetails;

	    $scope.totalItems = result.getAllUsersResponseDetails.length;
        $scope.itemsPerPage = 10;
        $scope.currentPage = 1;

        $scope.orderByName = false;

        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;


    };

    $scope.init = function() {
        userListProxy.getUsersList(null, $scope.userListFetched, $scope.userListFailed);
    };
    $scope.init();
}]);

