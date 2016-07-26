var React = require('react');
var ReactDom = require('react-dom');
// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var Link = require('react-router').Link;

var Index = require('./app/pages/index/index.jsx');

var app = React.createElement(Index, {});

document.addEventListener('DOMContentLoaded', function() {

	ReactDom.render(app, document.getElementById('app'));

	// ReactDom.render((
	// 	<Router>
	// 	    <Route path="/" component={Index}>

	// 	    </Route>
	// 	  </Router>
	// ), document.getElementById('app'))
});