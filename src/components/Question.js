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

  for(var member of data){
    console.log(member.acf.question_number + ' ' + member.acf.section + ' '+ member.acf.type); 
  }

  //var result = Object.keys(data).map(function(key) {
  //  return [Number(key), data[key]];
  //});


  return  (
    
    <div>
      <h2 className="question">Question { props.number }</h2>
      <div>Section: { member.acf.section }</div>
    </div>

  );
}

Question.propTypes = {
  number: PropTypes.number.isRequired,
  data: PropTypes.any
};

export default Question;

