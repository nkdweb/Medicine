go2ahcApp.controller('loginController', ['$scope', '$location', '$rootScope','sessionService', function($scope, $location, $rootScope, sessionService) {
    var authenticationProxy = new Authentication();

    $rootScope.Appln = {
        hideHeader: true
    };

    // Initializing the variables
    $scope.Login = {
        userName: "",
        password: "",
        rememberMe: false
    };

    $scope.loginSubmit = function(event, bool) {
        var loginUsername = $scope.Login.userName;
        var loginPassword = $scope.Login.password;
        var loginServObj = $scope.Login;
        delete loginServObj.rememberMe;
        authenticationProxy.login(JSON.stringify(loginServObj), loginSuccess, loginFailure);
    };

    /**
     * Purpose : To redirect the user to dashboard/profile completion page after login successfull
     * Scope   : This method will execute on successfull login service
     */
    loginSuccess = function(result) {
        //console.log("login result = " + JSON.stringify(result));      
        var loggedInUserFirstName = result['userName'];
        var status = result['statusvalue'];
             
        if(status == "1") {
            sessionService.authSuccess(result);  
            var Names = {
                firstName: loggedInUserFirstName,
                authentication: true
            };
            globalfn.mergeSourceInToTarget(localStorage, Names);
            $location.path('/contacts');
        } else {
            $location.path('/home');
            $scope.loginError = "Username or password doesn't exist!";
        }

    };

    /**
     * Purpose : To display error message in login form
     * Scope   : This method will execute on login success failure
     */
    loginFailure = function(result) {
        $scope.loginError = "Username or password doesn't exist!";
    };


}]);
