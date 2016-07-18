var React = require('react');
var ReactDom = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var Detail = require('./app/pages/detail/index.jsx');

document.addEventListener('DOMContentLoaded', function() {

	ReactDom.render((
		<Router>
		    <Route path="/" component={Detail}>
		      
		    </Route>
		  </Router>
	), document.getElementById('app'))
});