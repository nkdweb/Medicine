go2ahcApp.controller('mappingController', ['$scope', '$location', function($scope, $location) {

    var mappingProxy = new Mapping();

    $scope.setVal = function () {
        console.log($scope.Filter.userType);
        var userType = $scope.Filter.userType;
        
        //var getUserTypeList = {"nameSearch":"null","redemptionStatus":"null","userType":userType};
        //$scope.getUsersList(getUserTypeList);
    };

   
    $scope.Filter = {
         userType       : null
        ,userName    : null
    };

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

    $scope.getUsersList =  function(params) {
        mappingProxy.getUsersList(params, $scope.userListFetched, $scope.userListFailed);
    };

    $scope.filterList = function(userData) {
        var userType = $scope.Filter.userType;
        var userName = $scope.Filter.userName;
        if( userType == null ) {
            return true;
        } else if (userName == null) {
            return userType == userData.userType;     
        } else if (userName != null) {
            if(userType == userData.userType) {
                if(userData.name.indexOf(userName) != -1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }

    };

    $scope.init = function() {
        //mappingProxy.getUsersList(null, $scope.userListFetched, $scope.userListFailed);
        $scope.getUsersList(null);
    };
    $scope.init();
}]);

