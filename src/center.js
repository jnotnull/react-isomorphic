var React = require('react');
var ReactDom = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var Center = require('./app/pages/center/index.jsx');

document.addEventListener('DOMContentLoaded', function() {

	ReactDom.render((
		<Router>
		    <Route path="/" component={Center}>
		      
		    </Route>
		  </Router>
	), document.getElementById('app'))
});