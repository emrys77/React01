import React, { Component } from 'react'

//import Text from './Text/Text.js'
//import Video from './Video/Video.js'
import Footer from './Footer.jsx'
import MultipleChoice from './MultipleChoice/MultipleChoice.js'
import ReactPlayer from 'react-player'


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 }
    //this.passClick = this.passClick.bind(this);
  }

  render() {
    
    const passClick = (e, step) => {
      this.setState({step: step})
    }

    const findObjectByKey = (array, key, value) => {
      for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
              return array[i];
          }
      }
      return null;
    }

    /* function to create an array from the js object so we can pull out what we need
    const objectToArray = obj => {
      var dataArray = Object.keys(obj).map(function(k){return obj[k]});
      return [
        dataArray
      ]
    }; */

    // all the data
    const myData = this.props.data;
    const myDataCount = myData.length;

    console.log(myData)

    //count the number in each section bung them in an array
    const accumulatedTotals = {}
    for ( let i = 0; i < myData.length; i++ ) {
      const p = myData[i]
      accumulatedTotals[ p.acf.section ] = (accumulatedTotals[ p.acf.section ] || 0) + 1
    }

    console.log( accumulatedTotals)

    // create array of the images that appear on the side
    // section : image
  /*  var sideImages = new Map([
      ['Survive Armed Robbery','378x572_Image.jpg'],
      ['The Crime','378x572_ArmedRobbery.jpg'],
      ['New Crims, new ways,''],
      ['The Robbery,''],
      ['Conclusion,'']
    ]); */
   // m.get('a'); // 'b'
// trish and bernie served time Q8 VideoImg_01
// new crims new ways what weapons are used 378x572_Trish
    let step = this.state.step;
    
    // get the data for the question we are on
    let myQuestion = findObjectByKey(myData,'menu_order',step);
    var QRender;

    if ( myQuestion) {
      var myQuestionArray = Object.entries(myQuestion);

      // console.log(myQuestionArray);

      // work out which section we are in
      var section = myQuestionArray[16][1]['section'];

      // count how many steps in this section




      // what kind of question are we? text/video/multiple choice/
      var QType = myQuestionArray[16][1]['type'];

      // question number to pass to the footer
      var QNumber = myQuestionArray[16][1]['question_number'];

      // get the background image if there is one
      var bg = myQuestionArray[16][1]['image'];

      if (bg) {
        var bgClass = 'bg'
        var imgRender = <img src={bg} alt="" />
      }
      

      

      if (QType==='Text') {
        var QContent = myQuestionArray[16][1]['content'];
        QRender = <div dangerouslySetInnerHTML={{ __html: QContent }}></div> 
      }
      if (QType==='Video') {
        var video_intro_text = myQuestionArray[16][1]['video_intro_text'];
        var vimeo_code = myQuestionArray[16][1]['vimeo_code']
        var video_url = 'https://player.vimeo.com/video/' + vimeo_code + 'playing'
        
        QRender = <div className='video-papa'>
        <div dangerouslySetInnerHTML={{ __html: video_intro_text }}></div>
          <ReactPlayer url={video_url} />
        </div>
      }
      if (QType==='Multiple Choice') {
        var question_text = myQuestionArray[10][1]['rendered'];
        var options = myQuestionArray[16][1]['multiple_choice_question'];

        
        // create an array for the question options list
        var rOptions = [];
        options.forEach(function(element) {
          rOptions.push(element.choice);

          for (let [index, val] of options.entries()) {
            //console.log('index: ' + index)
            //console.log('val: ' + val.is_this_the_correct_answer)
            if ( val.is_this_the_correct_answer === true ) {
              console.log('correct: ' + index)
              // var a = index 
            }
          }
        });

        QRender = <MultipleChoice question={question_text} options={rOptions} correct={'a'}  />

      }

      /*if (QContent) {
        console.log('QContent: ' + QContent);
      }*/

    } else {
      console.log('myQuestion is elsewhere');
    }

    return  (
    
      <div>
        <header>Survive Armed Robbery | {section}</header>
        <div>
          {imgRender}
          <div className={ bgClass + " QContent question" + this.state.question  }>
            {QRender}
          </div>
          
          <Footer QNumber={QNumber} passClick={ passClick } />
          
        </div>
      </div>

    );
  }

}

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

export default Question;

