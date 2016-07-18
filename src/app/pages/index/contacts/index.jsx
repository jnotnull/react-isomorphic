var React = require('react');

var Icons = require('./icons.jsx');

require('./index.scss');

module.exports = React.createClass({
    render: function () {
        return <div className="contacts-block">
            <h3>Contacts</h3>
            <ul>
                <li>
                    <Icons.Email size="2" href="" />
                </li>
                <li>
                    <Icons.Instagram size="2" href="" />
                </li>
                <li>
                    <Icons.Pinterest size="2" href="" />
                </li>
            </ul>
        </div>;
    }
});
