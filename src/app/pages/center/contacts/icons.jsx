var React = require('react');


function createIconClass(awesomeIconName) {
    return React.createClass({
        render: function () {
            var size = this.props.size || 1;
            var className = 'fa fa-' + awesomeIconName + ' fa-' + size + 'x icon-' + awesomeIconName;
            return <a href={this.props.href}>
                <i className={className}></i>
            </a>;
        }
    });
}

var Pinterest = createIconClass('pinterest');
var Instagram = createIconClass('instagram');
var Email     = createIconClass('inbox');

module.exports = {
    Pinterest: Pinterest,
    Instagram: Instagram,
    Email: Email
};
