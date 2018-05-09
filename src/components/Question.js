import React from 'react';
import PropTypes from 'prop-types';
import BJBS from './GetData.js';


/* const questionData = SARCourse.SARarray.find( item => item.acf.question_number === 1 ); */

function getQuestionData( responseArray, questionNumber ) {
    return responseArray.filter( item => item.type === 'the_course' )
        .find( item => item.acf.question_number === 1 );
}

/* var myQuestion = getQuestionData( questionData,1); */

function Question(props) {
  return  (
    
    <div>
      <h2 className="question">{props.number}</h2> 
      <div>{ props.json.title }</div>
    </div>
  );
}

Question.propTypes = {
  number: PropTypes.number.isRequired,
  json: PropTypes.any
};

export default Question;

