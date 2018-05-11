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
/*
const Child = (props) => {
  return (
    <div style={{backgroundColor: props.eyeColor}} />
  )
}

  const questionData = data.find( item => item.acf.question_number === 1 );
*/
function Question(props) {
  const myData = JSON.parse(props.data);
  //const questionData = myData.find( item => item.acf.question_number === 1 );

  
  return  (
    
    <div>
      <h2 className="question">Question { props.number }</h2>
      <div>Data: { myData }</div>
    </div>

  );
}

Question.propTypes = {
  number: PropTypes.number.isRequired,
  data: PropTypes.any
};

export default Question;

