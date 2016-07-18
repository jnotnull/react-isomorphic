var React = require('react');
var ReactDom = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var App = require('./app/pages/index/index.jsx');

// var app = React.createElement(App, {});

document.addEventListener('DOMContentLoaded', function() {
	// ReactDom.render((<Router history={hashHistory}>
	// 	    <Route path="/" component={App}/>
	// 	</Router>), document.getElementById('app'));

	ReactDom.render((
		<Router>
		    <Route path="/" component={App}>
		      
		    </Route>
		  </Router>
	), document.getElementById('app'))
});