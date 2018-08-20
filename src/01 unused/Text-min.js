'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./components/Button.jsx');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Text(props) {
  return _react2.default.createElement(
    'div',
    { className: 'text' },
    _react2.default.createElement(
      'h2',
      { className: 'title' },
      props.title,
      'xxx'
    ),
    _react2.default.createElement(
      'div',
      { className: 'content' },
      props.content
    ),
    _react2.default.createElement('button', { direction: 'forward' })
  );
}

Text.propTypes = {
  title: _propTypes2.default.string,
  content: _propTypes2.default.string.isRequired
};

exports.default = Text;
