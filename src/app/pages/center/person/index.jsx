var React = require('react');


require('./index.scss');

module.exports = React.createClass({
    render: function () {
        return <li>
            <a  onClick={this.alertName}>{this.props.person.name}</a>
        </li>;
    },

    alertName: function () {
        alert(this.props.person.name);
    }
});
