'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultipleChoice = function (_React$Component) {
    _inherits(MultipleChoice, _React$Component);

    function MultipleChoice(props) {
        _classCallCheck(this, MultipleChoice);

        var _this = _possibleConstructorReturn(this, (MultipleChoice.__proto__ || Object.getPrototypeOf(MultipleChoice)).call(this, props));

        _this.state = { selected: '' };

        return _this;
    }

    /* handleClick: remove class add class add selected , show submit button
    handle submit: compare answer and show appropriate message 
    do we need state? yes so we can re-render on change */

    _createClass(MultipleChoice, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var handleClick = function handleClick(e) {
                console.log(e.target.value);
                _this2.addClass;
                //this.setState({step: 2})
            };

            var itemsList = this.props.options.map(function (item, i) {
                return _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'label',
                        { className: 'radioBox', key: i },
                        _react2.default.createElement('input', { type: 'radio', name: 'Q3', value: item }),
                        item
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'multipleChoice wrapper' },
                _react2.default.createElement(
                    'p',
                    { className: 'question' },
                    this.props.question
                ),
                _react2.default.createElement(
                    'ol',
                    { className: 'alpha', onChange: handleClick.bind(this) },
                    itemsList
                )
            );
        }
    }]);

    return MultipleChoice;
}(_react2.default.Component);
/*
MultipleChoice.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.array,
  correct: PropTypes.string
}
*/


exports.default = MultipleChoice;
