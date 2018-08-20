'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Video(props) {
  return _react2.default.createElement(
    'div',
    { className: 'video' },
    _react2.default.createElement(
      'div',
      { className: 'Video_Intro' },
      props.video_intro_text
    ),
    _react2.default.createElement(
      'div',
      { className: 'flex-video widescreen vimeo' },
      _react2.default.createElement('iframe', { title: 'vimeoPlayer', src: 'https://player.vimeo.com/video/' + props.vimeo_code, width: '500', height: '281', frameBorder: '0', webkitallowfullscreen: '', mozallowfullscreen: '', allowFullScreen: '' })
    )
  );
}

Video.propTypes = {
  vimeo_code: _propTypes2.default.string,
  video_intro_text: _propTypes2.default.string.isRequired
};

exports.default = Video;
