/** @jsx React.DOM */
var React = require('react');
var api = require('../../utils/api');

var Banner = require('./Banner');
var Tags = require('./Tags');

var Index = module.exports = React.createClass({

  statics: {
    fetchData: (token, params, query) => {
      return api.get('/initIndex.do', token);
    }
  },

  componentDidMount: function() {
    var LazyloadImg = require('./../vendor/lazyloadImg');
    var lazyloadImg = new LazyloadImg({
      el: '[data-src]',
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      qriginal: false,
      before: function(el) {

      },
      load: function(el) {
        el.style.cssText += '-webkit-animation: fadeIn 01s ease 0.2s 1 both;animation: fadeIn 1s ease 0.2s 1 both;';
      },
      error: function(el) {

      }
    });

    window.addEventListener('scroll', (event) => {
      lazyloadImg.start();
    });
  },

  render: function() {
    return (
      <div>
        <Banner {...this.props} ></Banner>
        <Tags {...this.props} ></Tags>
      </div>
    );
  }
});