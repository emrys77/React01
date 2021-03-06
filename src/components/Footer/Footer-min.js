'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button/Button.jsx');

var _Button2 = _interopRequireDefault(_Button);

var _progess = require('./progess');

var _progess2 = _interopRequireDefault(_progess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//var progress =  Math.round((this.props.step/ this.props.myDataCount) * 100);

//console.log('Progress: ' + progress + '%' )
var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',

        // pass 2 props to handle the two buttons: fbState bbState

        value: function render() {

            var bbState = this.props.step !== 1 ? "active" : "disabled";
            var fbState = this.props.step === this.props.totalSteps ? "disabled" : "active";

            //console.log('bbState' + bbState)
            return _react2.default.createElement(
                'footer',
                { className: this.props.className },
                _react2.default.createElement(_progess2.default, { step: this.props.step, totalSteps: this.props.totalSteps }),
                _react2.default.createElement(
                    'nav',
                    null,
                    _react2.default.createElement(_Button2.default, { active: bbState, direction: 'backward', onChange: this.props.onChange }),
                    _react2.default.createElement(
                        'div',
                        { className: 'progress' },
                        this.props.sectionStep,
                        ' / ',
                        this.props.sectionCount
                    ),
                    _react2.default.createElement(_Button2.default, { active: fbState, direction: 'forward', onChange: this.props.onChange })
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

exports.default = Footer;
