
go2ahcApp.factory('sessionService', ['$rootScope',
    function ($rootScope) {
    var session = {
        init: function () {
            this.resetSession();
        },
        resetSession: function() {
            this.currentUser = null;
            this.loggedOut = true;
        },
        logout: function() {
            this.resetSession();
             $rootScope.$emit('session-changed-logout');
        },
        authSuccess: function(userData) {
        	console.log(userData);
            this.currentUser = userData;
            this.loggedOut = false;
            $rootScope.$emit('session-changed-login');
        },
        authFailed: function() {
            this.resetSession();
        }
    };
    session.init();
    return session;
}]);
