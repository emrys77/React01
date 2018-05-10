import React from 'react';
import PropTypes from 'prop-types';
import BJBSData from './GetData.js';


/* const questionData = SARCourse.SARarray.find( item => item.acf.question_number === 1 ); */

function getQuestionData( responseArray, questionNumber ) {
    return responseArray.filter( item => item.type === 'the_course' )
        .find( item => item.acf.question_number === 1 );
}

/* var myQuestion = getQuestionData( questionData,1); 
var data= this.props.data; */

function Question(props) {

  return  (
    
    <div>
      <h2 className="question">Question { props.number }</h2>
      <div>Data: { props.data }</div>
    </div>
  );
}

Question.propTypes = {
  number: PropTypes.number.isRequired,
  data: PropTypes.any
};

export default Question;

