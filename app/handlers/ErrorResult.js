var React = require('react');

var ErrorResult = module.exports = React.createClass({

	render() {
		return <h1>{this.props.error.msg}</h1>;
	}

});