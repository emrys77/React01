import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1
    }
  }


  render() {

    var IncrementQuestion = () => {
      this.setState({ question: this.state.question + 1 });
    }
  
    const findObjectByKey = (array, key, value) => {
      for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
              return array[i];
          }
      }
      return null;
    }

    let myData = this.props.data;
    let myNumber = this.state.question;
    let myQuestion = findObjectByKey(myData,'menu_order',myNumber);

    console.log(myQuestion);

    return  (
    
      <div>
        <h2 className="question">Question { this.state.question }</h2>
        <p>{ this.props.emrys }</p>
        <button onClick={this.IncrementQuestion}>Click to increment by 1</button>
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




function Question(props) {

  /*
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
*/

  
}

Question.propTypes = {
  number: PropTypes.number.isRequired,
  data: PropTypes.any,
  emrys: PropTypes.string
};

export default Question;

