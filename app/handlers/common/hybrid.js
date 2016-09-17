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

var hybrid = module.exports = {
  "getUrl": getUrl,
  "nativeFun": nativeFun
}