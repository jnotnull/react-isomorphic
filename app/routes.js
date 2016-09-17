// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
var React = require('react');

var {
	Route,
	IndexRedirect,
	Redirect
} = require('react-router');

const Root = require('./handlers/Root');

const Index = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('./handlers/Index/Index'))
	}, 'index')
};

const Center = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('./handlers/Center/Index'))
	}, 'center')
};

module.exports = (
	<Route path="/" component={Root}>
		<IndexRedirect to="/index" />
		<Route path="/index" getComponent={Index}></Route>
		<Route path="/center" getComponent={Center}></Route>
		<Redirect from="/index.html" to="/index" />
		<Redirect from="/list.html" to="/list" />
	</Route>
);