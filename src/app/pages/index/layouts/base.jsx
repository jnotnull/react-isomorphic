require('./base.scss');

var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <div className="test-app">
            <div className="container container-vertical">
                <header className="container-item">
                    <h1>Test App</h1>
                </header>
                <main className="container-item content-holder">
                    {this.props.children}
                </main>
            </div>
        </div>;
    }
});
