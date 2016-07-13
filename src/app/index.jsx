var React = require('react');

var allPeople = require('./data/people.js');

var BaseLayout = require('./layouts/base.jsx');
var GeneralInfo = require('./views/general-info/index.jsx');
var Contacts = require('./views/contacts/index.jsx');
var Person = require('./views/person/index.jsx');


require('./index.scss');

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            people: allPeople
        };
    },

    render: function () {
        console.log("render");
        return <BaseLayout>
            <GeneralInfo />
            <Contacts />

            {this.renderPeople()}
        </BaseLayout>;
    },

    renderPeople: function () {
        return this.props.people.map(function (person, i) {
            return <Person person={person} key={"person-" + i} />;
        });
    }
});
