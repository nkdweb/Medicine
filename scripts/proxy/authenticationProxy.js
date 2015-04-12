function Authentication() { };

var loginUrl = "http://203.123.181.194:8104/telemedicine/services/rest/admin";
Authentication.prototype.login = function (dataServer, callbackFn, callbackFnFailure) {
    var proxy = new Proxy();
    proxy.type = "POST";
    proxy.url = loginUrl+"/login";
    proxy.data = dataServer;
    proxy.method = "";
    proxy.dataType = "";
    proxy.onSuccess = callbackFn;
    proxy.onFailure = callbackFnFailure;
    proxy.callService();
};

//Logout service call - Get
Authentication.prototype.getLogout = function (dataServer, callbackFn, callbackFnFailure) {
    var proxy = new Proxy();
    proxy.type = "GET";
    proxy.url = serverUrl+"/logout";
    proxy.data = dataServer;
    proxy.method = "";
    proxy.onSuccess = callbackFn;
    proxy.onFailure = callbackFnFailure;
    proxy.callService();
};
