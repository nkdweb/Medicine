function userList() { };

var userListUrl = "http://localhost:8090/telemedicine/services/rest";
userList.prototype.getUsersList = function (dataServer, callbackFn, callbackFnFailure) {
    var proxy = new Proxy();
    proxy.type = "POST";
    proxy.url = userListUrl+"/portal/getallUsers";
    proxy.data = dataServer;
    proxy.method = "";
    proxy.dataType = "";
    proxy.onSuccess = callbackFn;
    proxy.onFailure = callbackFnFailure;
    proxy.callService();
};

//Logout service call - Get
userList.prototype.getLogout = function (dataServer, callbackFn, callbackFnFailure) {
    var proxy = new Proxy();
    proxy.type = "GET";
    proxy.url = serverUrl+"/logout";
    proxy.data = dataServer;
    proxy.method = "";
    proxy.onSuccess = callbackFn;
    proxy.onFailure = callbackFnFailure;
    proxy.callService();
};
