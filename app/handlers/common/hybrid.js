var util = require('./util');

//获得URL地址
var getUrl = function() {
  var url = {};

  if (util.isMobile.Android() && window.JSInterface) {
    url.SERVER_URL = JSInterface.getServerUrl();
    url.IMAGE_URL = JSInterface.getImageUrl();
  } else {
    // url.SERVER_URL = "http://app.lehumall.com/";
    var host = window.location.host;
    if (host.indexOf("http://") == -1) {
      host = "http://" + host;
    }
    url.SERVER_URL = host + "/";
    url.IMAGE_URL = "http://lehumall.b0.upaiyun.com/";
  }

  return url;
}

// 运行native代码
var nativeFun = function(params) {
  if (util.isMobile.Android()) {
    params = JSON.stringify(params);
    JSInterface.nativeFunction(params);
  } else if (util.isMobile.iOS()) {
    WebViewJavascriptBridge.send(params)
  }
}

var getUserId = function() {
  var defer = $.Deferred();

  var userId;

  if (util.isMobile.Android()) {
    userId = JSInterface.getUserId();
    defer.resolve(userId);
  } else if (util.isMobile.iOS()) {
    //ios获取userid

    function connectWebViewJavascriptBridge(callback) {
      if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
      } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
          callback(WebViewJavascriptBridge)
        }, false)
      }
    }
    connectWebViewJavascriptBridge(function(bridge) { /* Init your app here */
      bridge.init(function(message, responseCallback) {
        userId = message.UserId;
        defer.resolve(userId);
      })

      bridge.registerHandler('onPageShow', function(data, responseCallback) {
        userId = data.UserId;
        defer.resolve(userId);
      })

      bridge.registerHandler('onPageHide', function(data, responseCallback) {

      })
    })
  }

  return defer.promise();
}

var hybrid = module.exports = {
  "getUrl": getUrl,
  "nativeFun": nativeFun,
  "getUserId": getUserId
}