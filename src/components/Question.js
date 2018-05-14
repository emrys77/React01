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
responseArray = the array json with the 14 elements

const courseItemsArray = responseArray.filter( item => item.type === 'the_course' );
const questionData = courseItemsArray.find( item => item.acf.question_number === 1 );


function getQuestionData( responseArray, questionNumber ) {
    return responseArray.filter( item => item.type === 'the_course' )
        .find( item => item.acf.question_number === 1 );
}

*/
function Question(props) {
  //const myData = JSON.parse();
  //const questionData = myData.find( item => item.acf.question_number === 1 );

  //var json = JSON.stringify( data );
  //console.log('json: ' + data);
  return  (
    
    <div>
      <h2 className="question">Question { props.number }</h2>
      <div>Data: {  }</div>
    </div>

  );
}

Question.propTypes = {
  number: PropTypes.number.isRequired,
  data: PropTypes.any
};

export default Question;

