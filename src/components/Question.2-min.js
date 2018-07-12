'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header/Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer/Footer.jsx');

var _Footer2 = _interopRequireDefault(_Footer);

var _MultipleChoice = require('./MultipleChoice/MultipleChoice.js');

var _MultipleChoice2 = _interopRequireDefault(_MultipleChoice);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Text from './Text/Text.js'
//import Video from './Video/Video.js'


var Question = function (_Component) {
  _inherits(Question, _Component);

  function Question(props) {
    _classCallCheck(this, Question);

    var _this = _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).call(this, props));

    _this.state = { step: 1
      //this.passClick = this.passClick.bind(this);
    };return _this;
  }

  _createClass(Question, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var passClick = function passClick(move) {
        var nStep = move === 1 ? _this2.state.step - 1 : _this2.state.step + 1;
        _this2.setState({ step: nStep });
      };

      var findObjectByKey = function findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
            return array[i];
          }
        }
        return null;
      };

      // all the data
      var myData = this.props.data;
      var myDataCount = myData.length;

      //console.log(myData)

      //count the number in each section bung them in an array
      var accumulatedTotals = {};
      for (var i = 0; i < myData.length; i++) {
        var p = myData[i];
        accumulatedTotals[p.acf.section] = (accumulatedTotals[p.acf.section] || 0) + 1;
      }

      /*    console.log( accumulatedTotals)
      {Survive Armed Robbery: 3, The Offender: 10, New Crims, new ways: 9, The Robbery: 14, Conclusion: 12}
      */
      var step = this.state.step;

      // get the data for the question we are on
      var myQuestion = findObjectByKey(myData, 'menu_order', step);

      if (myQuestion) {
        var myQuestionArray = Object.entries(myQuestion);

        console.log('myQuestionArray: ');
        console.log(myQuestionArray);

        // work out which section we are in
        var section = myQuestionArray[16][1]['section'];
        // get how many steps in this section
        var sectionCount = accumulatedTotals[section];
        // and where we are in that section to pass to the footer
        var QNumber = myQuestionArray[16][1]['question_number'];
        // big fat h1 tag if it exists
        var title = myQuestionArray[16][1]['title'];
        var QTitle;
        console.log('title: ' + title);
        if (title) {
          QTitle = _react2.default.createElement('h1', { dangerouslySetInnerHTML: { __html: title } });
        } else {
          QTitle = null;
        }

        // what kind of question are we? intro/text/video/multiple choice/
        var QType = myQuestionArray[16][1]['type'];

        // get the background image if there is one
        var bg = myQuestionArray[16][1]['image'];
        if (bg) {
          var bgClass = 'bg';
        } else {
          var bgClass = 'nobg';
        }
        // console.log(QType)
        var Header;
        if (QType !== 'Intro') {
          Header = _react2.default.createElement(
            'header',
            null,
            'Survive Armed Robbery | ',
            section
          );
        } else {
          Header = null;
        }

        var styles, QRender;

        if (QType === 'Intro') {
          QRender = _react2.default.createElement('img', { src: bg, alt: section });
        }

        if (QType === 'Text') {
          if (bg) {
            styles = {
              background: 'url(' + bg + ') no-repeat right top',
              height: '100%'
            };
          }
          var QContent = myQuestionArray[16][1]['content'];
          QRender = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: QContent } });
        }

        if (QType === 'Video') {
          var video_intro_text = myQuestionArray[16][1]['video_intro_text'];
          var vimeo_code = myQuestionArray[16][1]['vimeo_code'];
          var video_url = 'https://player.vimeo.com/video/' + vimeo_code + 'playing';

          QRender = _react2.default.createElement(
            'div',
            { className: 'video-papa' },
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: video_intro_text } }),
            _react2.default.createElement(_reactPlayer2.default, { url: video_url })
          );
        }
        if (QType === 'Multiple Choice') {
          var question_text = myQuestionArray[10][1]['rendered'];
          var options = myQuestionArray[16][1]['multiple_choice_question'];

          // create an array for the question options list
          var rOptions = [];
          options.forEach(function (element) {
            rOptions.push(element.choice);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = options.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _step$value = _slicedToArray(_step.value, 2),
                    index = _step$value[0],
                    val = _step$value[1];

                //console.log('index: ' + index)
                //console.log('val: ' + val.is_this_the_correct_answer)
                if (val.is_this_the_correct_answer === true) {
                  console.log('correct: ' + index);
                  // var a = index 
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          });

          QRender = _react2.default.createElement(_MultipleChoice2.default, { question: question_text, options: rOptions, correct: 'a' });
        }
      } else {
        console.log('myQuestion is elsewhere');
      }

      return _react2.default.createElement(
        'div',
        { className: bgClass + ' content ' + QType + ' Q' + QNumber },
        Header,
        _react2.default.createElement(
          'div',
          { style: styles },
          _react2.default.createElement(
            'div',
            { className: "QContent Question" + this.state.step },
            QTitle,
            QRender
          ),
          _react2.default.createElement(_Footer2.default, { QNumber: QNumber, passClick: passClick, section: section, sectionStep: QNumber, sectionCount: sectionCount })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      /*   if ( {QType === 'Intro' }) {
           setTimeout(passClick(1), 5000)
         }*/
    }
  }]);

  return Question;
}(_react.Component);

/*
<FontAwesome name='fa-angle-right' />

function getQuestionData( responseArray, questionNumber ) {
    return responseArray.filter( item => item.type === 'the_course' )
        .find( item => item.acf.question_number === 1 );
}

/* var myQuestion = getQuestionData( questionData,1); 
var data= this.props.data; */
/*

responseArray = the array json with the 14 elements

const courseItemsArray = responseArray.filter( item => item.type === 'the_course' );
const questionData = courseItemsArray.find( item => item.acf.question_number === 1 );


function getQuestionData( responseArray, questionNumber ) {
 //   return responseArray.filter( item => item.type === 'the_course' )
 //       .find( item => item.menu_order ===  questionNumber );
      return responseArray.filter( item => item.menu_order ===  questionNumber );
}
*/

/*
function Question(props) {

  
  what do i do?
get all data from getdata
grab question number prop
get section from prop
work out how many questions there are in section
 work out question details question number in section
 work out question type
 work out what props to pass to question type and pass

 text: title, content
 video: vimeo_code, video_intro_text
 PopUp: intro, box1, box2
 MultipleChoice: question, options (array), correct
LearningCheck: intro, box1hd, box2hd, options (array)


  
}

Question.propTypes = {
  number: PropTypes.number.isRequired,
  data: PropTypes.any,
  emrys: PropTypes.string
};
*/

exports.default = Question;
