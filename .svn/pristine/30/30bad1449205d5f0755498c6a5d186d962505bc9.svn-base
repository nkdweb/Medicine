function Proxy() {
    this.type = "";
    this.url = "";
    this.data = {};
    this.cache = false;
    this.async = false;
    this.method = "";
    this.contentType = "application/json; charset=utf-8";
    this.dataType = "json";
    this.processData = true;
}

Proxy.prototype.beforeSend = function (xhr) {
};

Proxy.prototype.onSuccess = function (result) {
		return result;
};

Proxy.prototype.onFailure = function (exception, textstatus) {
	console.log(exception);
    return exception;
};

Proxy.prototype.onComplete = function(xhr) {
    if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			//this.success();
        }
		
		if (xhr.status == 412) {
			//alert("Parameters not matching");
        }
    } 
};

//Generic function to call Web Service
Proxy.prototype.callService = function () {
    $.ajax({
         type	: this.type //GET or POST or PUT or DELETE verb.
        ,url	: this.url//Location of the Service
        ,data	: this.data//Data send to server
        ,async	: this.async
 		,cache	: this.cache //Cache to the browser
        ,dataType	: this.dataType//Expected data format from server
        ,processData: this.processData
        ,beforeSend	: this.beforeSend//before send service call need to any action
        ,success	: this.onSuccess// On Sucessfull service call
        ,error		: this.onFailure   //When service call fails
        ,contentType	: this.contentType //Content type Sent to server
        ,complete		: this.onComplete
    });
};