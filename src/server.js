var express = require('express');
var path = require('path');
var React = require('react');
var ReactDomServer = require('react-dom/server');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

// 获得当前环境
var isDev = process.env.NODE_ENV === 'development';

// 根据不同环境加载不同配置
var webpackConfig
if (isDev){
	webpackConfig = require('../webpack.dev.config.js');
} else {
	webpackConfig = require('../webpack.prd.config.js');
}

// 设置模板引擎
var server = express();
server.set('views', path.join(__dirname, '/app/templates'));
server.set('view engine', 'ejs');

// 设置路由
require('./app/routes/core-routes.js')(server);

// 设置中间件
server.use(webpackMiddleware(webpack(webpackConfig), {
  noInfo: false,
  quiet: false,
  publicPath: '/assets/',
  stats: {
    color: true
  }
}));

// 设置监听端口
server.listen(3000, function(err) {
  if(err) {
    console.log(err);
  }
  console.log('Listening on ' + process.env.NODE_ENV );
});
