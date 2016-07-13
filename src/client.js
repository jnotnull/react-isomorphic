var React = require('react');
var ReactDom = require('react-dom');
var App = require('./app/index.jsx');

var app = React.createElement(App, {});

document.addEventListener('DOMContentLoaded', function () {
    ReactDom.render(app, document.getElementById('app'));
});
