'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log( 'width: ' + Math.round((this.props.step/this.props.totalSteps) * 100) );

/*
 stateless component to show progress in the course
we need two props: 
1. which question we are on
2. the total number of questions
we have an outer boder with a bg colour
and a progress meter with a width we calculate from the props
*/
var ProgressBar = function ProgressBar(props) {
    return _react2.default.createElement(
        'div',
        { className: 'bar-container' },
        _react2.default.createElement('div', { style: { width: Math.round(props.step / props.totalSteps * 100) + '%' } })
    );
};

exports.default = ProgressBar;


ProgressBar.propTypes = {
    step: _propTypes2.default.number,
    totalSteps: _propTypes2.default.number
};
