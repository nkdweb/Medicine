function Mapping() { };

var userListUrl = "http://localhost:8090/telemedicine/services/rest";
Mapping.prototype.getUsersList = function (dataServer, callbackFn, callbackFnFailure) {
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

