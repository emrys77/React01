'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactResponsiveModal = require('react-responsive-modal');

var _reactResponsiveModal2 = _interopRequireDefault(_reactResponsiveModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InformationBoxes(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: props.intro } }),
    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: props.box1 } }),
    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: props.box2 } })
  );
}

Text.propTypes = {
  intro: _propTypes2.default.string.isRequired,
  box1: _propTypes2.default.string.isRequired,
  box2: _propTypes2.default.string.isRequired
};

exports.default = InformationBoxes;
