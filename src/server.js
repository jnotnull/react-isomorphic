var express = require('express');
var path = require('path');
var React = require('react');
var ReactDomServer = require('react-dom/server');

var webpackConfig = require('../webpack.config.js');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');


var server = express();

server.set('views', path.join(__dirname, '/app/templates'));
server.set('view engine', 'ejs');

require('./app/routes/core-routes.js')(server);

server.use(webpackMiddleware(webpack(webpackConfig), {
    noInfo: false,
    quiet: false,
    publicPath: '/assets/',
    stats: {
        color: true
    }
}));

server.listen(3000);
