var React = require('react');
var ReactDomServer = require('react-dom/server');

var webpackRequire = require('enhanced-require')(module, {
    recursive: true,
    extensions: ['', '.js', '.jsx', '.json', '.scss'],
    resolve: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.scss$/, loader: 'raw' }
        ]
    }
});

// ReactApp = React.createFactory(require('../components/ReactApp'));
var app = React.createElement(webpackRequire('jsx!../index.jsx'));

module.exports = function(server) {

	server.get('/', function (req, res) {
	    var appString = ReactDomServer.renderToString(app);

	    res.render('index.ejs', {reactOutput: appString});
	});

	server.get('/application.css', function (req, res) {
	    res.status(200).send('');
	});

};
