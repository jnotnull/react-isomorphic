var React = require('react');
var {
  RoutingContext
} = require('react-router');
var api = require('../utils/api');

var Root = module.exports = React.createClass({

  getInitialState() {
    return {
      longLoad: false
    };
  },

  componentDidMount() {
    var timeout;
    this.props.loadingEvents.on('start', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.setState({
          longLoad: true
        });
      }, 250);
    });
    this.props.loadingEvents.on('end', () => {
      clearTimeout(timeout);
      this.setState({
        longLoad: false
      });
    });
  },

  render: function() {

    var className = 'App';
    if (this.state.longLoad)
      className += ' App--loading';
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
});