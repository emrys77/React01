'use strict';

var React = require('react');
var reactDragula = require('..');
var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        null,
        'Swap me around'
      ),
      React.createElement(
        'div',
        null,
        'Swap her around'
      ),
      React.createElement(
        'div',
        null,
        'Swap him around'
      ),
      React.createElement(
        'div',
        null,
        'Swap them around'
      ),
      React.createElement(
        'div',
        null,
        'Swap us around'
      ),
      React.createElement(
        'div',
        null,
        'Swap things around'
      ),
      React.createElement(
        'div',
        null,
        'Swap everything around'
      )
    );
  },
  componentDidMount: function componentDidMount() {
    var container = React.findDOMNode(this);
    reactDragula([container]);
  }
});
React.render(React.createElement(App, null), document.getElementById('examples'));
