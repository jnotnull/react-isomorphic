/** @jsx React.DOM */
var React = require('react');
var api = require('../../utils/api');
var safeElement = require('../safe/safeElement');

var Center = module.exports = React.createClass({

  statics: {
    clientRender: true
  },

  render: function() {
    return (
      <div>
        <div>test</div>
      </div>
    );
  }
});