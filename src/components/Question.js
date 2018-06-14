import React, { Component } from 'react'
import Text from './Text/Text.js'
import Video from './Video/Video.js'
import MultipleChoice from './MultipleChoice/MultipleChoice.js'
import ReactPlayer from 'react-player'


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1
    }
    
  }

  incrementQuestion = () => {
    this.setState({ question: this.state.question + 1 });
  }

  


  render() {
  
    const findObjectByKey = (array, key, value) => {
      for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
              return array[i];
          }
      }
      return null;
    }

    const objectToArray = obj => {
    /*  Object.keys(obj).map(function(key) {
        return [Number(key), obj[key]];
      }); */
      //var output = Object.entries(obj).map(([key, value]) => ({key,value}));
      var dataArray = Object.keys(obj).map(function(k){return obj[k]});

      return [
        dataArray
      ]
    };
/*    
    var result = [];

result = data.map(function (el) {
    var key = Object.keys(el).pop()

    return [
        key, +el[key]
    ]
});

console.log(result);

*/
    const myData = this.props.data;
    const myDataCount = myData.length;
    let myNumber = this.state.question;
    let myQuestion = findObjectByKey(myData,'menu_order',myNumber);
    //var myQuestionArray = myQuestion.keys(obj).map((k) => obj[k])

    //console.log( myQuestion );

    let createMarkup = myhtml => {
      return {__html: myhtml};
    }
    
    let QSafeHTML = (myContent) => {
      return <div dangerouslySetInnerHTML={createMarkup( myContent )} />;
    }
    
    if ( myQuestion) {
      var myQuestionArray = Object.entries(myQuestion);

      console.log(myQuestionArray);

      var QType = myQuestionArray[16][1]['type'];

      if (QContent) {
        console.log('QContent: ' + QContent);
        //QSafeHTML();
        console.log(QSafeHTML({QContent}));
      }

   


      if (QType==='Text') {
        var QContent = myQuestionArray[16][1]['content'];
        var QRender = <div dangerouslySetInnerHTML={{ __html: QContent }}></div> 
//      vimeo_code: PropTypes.string,
//      video_intro_text: PropTypes.string.isRequired

      }
      if (QType==='Video') {
        var vimeo_code = myQuestionArray[16][1]['vimeo_code']
        var video_url = 'https://player.vimeo.com/video/' + vimeo_code + 'playing'

        var video_intro_text = myQuestionArray[16][1]['video_intro_text'];
        //console.log('v code: ' + vimeo_code);
        //console.log('intro: ' + video_intro_text);
        
        var QRender = <div className='video-papa'>
        <div dangerouslySetInnerHTML={{ __html: video_intro_text }}></div>
        <ReactPlayer url={video_url} />
        </div>
      }
      if (QType==='Multiple Choice') {
        var question_text = myQuestionArray[10][1]['rendered'];
        var options = myQuestionArray[16][1]['multiple_choice_question']; 
        
        // create an array for the render list
        var rOptions = [];
        var correct = 
        options.forEach(function(element) {
          rOptions.push(element.choice);
          if (rOptions.is_this_the_correct_answer == true ) {
            console.log('true')
          }
        });

        /*
        multiple_choice_question [
          {choice: "gambler", is_this_the_correct_answer: false}
          {choice: "drug user", is_this_the_correct_answer: true}
          {choice: "recently released criminal", is_this_the_correct_answer: false}
          {choice: "recovering alcoholic", is_this_the_correct_answer: false}
        ]
        
        */
        var QRender = <MultipleChoice question={question_text} options={rOptions} correct={'a'}  />

        
        /*
       
         question: PropTypes.string.isRequired,
  options: PropTypes.array,
  correct: PropTypes.string
*/

      }
    } else {
      console.log('myQuestion is elsewhere');
    }

    return  (
    
      <div>
        <h2 className="question">Question { this.state.question }</h2>
        <p>{ this.props.emrys }</p>
        
        <p>{QType}</p>

        {QRender}

        <button className="forward" onClick={this.incrementQuestion}>Forward</button>

      </div>

    );
  }

}

/*function getQuestionData( responseArray, questionNumber ) {
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

