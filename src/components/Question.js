/*
question    --> converts object to js array
            --> works out what type we are, does a conditional fork
            --> passes props to question type

            -->     multiple choice
                    text
                    etc

            --|->   pass response and answer? answer test should be above?
            -->     right/wrong here what happens? 
*/

import React, { Component } from 'react';
import GetData from './GetData';
import myQuestion from './GetData';

if ( myQuestion){ 
  console.log('we have myquestion, and it looks a little like this: ' + myQuestion); 
}

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      questionData: myQuestion
    }
  }
  
  objectToArray = obj => {
    var dataArray = Object.keys(obj).map(function(k){return obj[k]});
    return [
      dataArray
    ]
  };

  incrementQuestion = () => {
    this.setState({ question: this.state.question + 1 });
  }



  render() {

    const objectToArray = obj => {
      var dataArray = Object.keys(obj).map(function(k){return obj[k]});
      return [
        dataArray
      ]
    };

    let myNumber = this.state.question;

    //console.log( this.state.questionData);
        
    if ( this.state.questionData ) {
      
      var questionDataArray = Object.entries(this.state.question);
      //var myType = questionDataArray[16][1]['type'];
      
    } else {
      console.log('myQuestion is elsewhere');
    }

    //console.log(myQuestion);
    //console.log( questionDataArray);

    return  (
    
      <div>
        <h2 className="question">Question { this.state.question }</h2>

        <button onClick={this.incrementQuestion}>Click to increment by 1</button>
        <p>{this.props.emrys}</p>
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

