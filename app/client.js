// /** @jsx React.DOM */
var React = require('react');
var {
  render
} = require('react-dom');

var {
  match,
  Router,
  RouterContext
} = require('react-router');

var {
  EventEmitter
} = require('events');

var fetchData = require('./utils/fetchData');
var rehydrate = require('./utils/rehydrate');
var routes = require('./routes.js');

var loadingEvents = new EventEmitter();

const {
  pathname,
  search,
  hash
} = window.location
const location = `${pathname}${search}${hash}`

function createElementFn(data) {
  return function(Component, props) {
    return <Component {...data} {...props} />
  }
}

match({
  routes,
  location
}, (error, redirectLocation, props) => {

  loadingEvents.emit('start');

  if (props.components[1].clientRender) {

    var path = props.routes[0].path;
    var currentRouteData = {
      "data": null,
      "query": path,
      "loadingEvents": loadingEvents
    };

    render(<RouterContext {...props} createElement={createElementFn(currentRouteData)}/>,
      document.getElementById('app')
    );
  } else {
    var token = rehydrate();

    fetchData(token, props).then((data) => {

      loadingEvents.emit('end');

      var path = props.routes[0].path;
      var currentRouteData = {
        "data": data[path],
        "query": path,
        "loadingEvents": loadingEvents
      };

      render(<RouterContext {...props} createElement={createElementFn(currentRouteData)} />,
        document.getElementById('app')
      );
    });
  }


})