var React = require('react');

var allPeople = require('../../data/people.js');

var BaseLayout = require('./layouts/base.jsx');
var GeneralInfo = require('./general-info/index.jsx');
var Contacts = require('./contacts/index.jsx');
var Person = require('./person/index.jsx');


require('./index.scss');

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            people: allPeople
        };
    },

    shouldUpdateReactComponent: function (prevElement, nextElement) {
        console.dir(prevElement)
    },

    componentWillMount: function(argument) {
        console.log("componentWillMount");
    },

    componentDidMount: function(argument) {
        console.log("componentDidMount");
    },

    render: function () {
        console.log("render detail");
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
