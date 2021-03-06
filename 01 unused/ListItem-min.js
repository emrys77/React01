'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_React$Component) {
    _inherits(ListItem, _React$Component);

    function ListItem(props) {
        _classCallCheck(this, ListItem);

        var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

        _this.state = { selected: '' };
        var value = props.item;
        var liN = props.i;
        return _this;
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'label',
                    { className: this.state.selected + " radioBox", key: this.props.liN },
                    _react2.default.createElement('input', { type: 'radio', name: 'Q3', value: this.props.value }),
                    this.props.value
                )
            );
        }
    }]);

    return ListItem;
}(_react2.default.Component);
// *** https://stackoverflow.com/questions/47231559/react-component-function-returning-jsx-causes-error-when-used-in-render-method-o
// http://react.tips/radio-buttons-in-reactjs/
// https://github.com/yannickcr/eslint-plugin-react/issues/578


exports.default = ListItem;
