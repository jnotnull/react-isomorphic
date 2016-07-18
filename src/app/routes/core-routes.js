var React = require('react');
var ReactDomServer = require('react-dom/server');

var webpackRequire = require('enhanced-require')(module, {
    recursive: true,
    extensions: ['', '.js', '.jsx', '.json', '.scss'],
    resolve: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.scss$/,
            loader: 'raw'
        }]
    }
});

module.exports = function(server) {

    server.get('/', function(req, res) {
        var app = React.createElement(webpackRequire('jsx!../pages/index/index.jsx'));
        var appString = ReactDomServer.renderToString(app);

        res.render('index.ejs', {
            reactOutput: appString
        });
    });

    server.get('/detail/*.html', function(req, res) {
        var app = React.createElement(webpackRequire('jsx!../pages/detail/index.jsx'));

        var appString = ReactDomServer.renderToString(app);

        res.render('detail.ejs', {
            reactOutput: appString
        });
    });

    server.get('/center.html', function(req, res) {
        var app = React.createElement(webpackRequire('jsx!../pages/center/index.jsx'));

        var appString = ReactDomServer.renderToString(app);

        res.render('center.ejs', {
            reactOutput: appString
        });
    });

};