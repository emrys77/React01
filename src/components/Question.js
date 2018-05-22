import React from 'react';
import PropTypes from 'prop-types';
//import BJBS from './GetData.js';

var data;
/* const questionData = SARCourse.SARarray.find( item => item.acf.question_number === 1 ); */


/*function getQuestionData( responseArray, questionNumber ) {
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

  //var result = Object.keys(data).map(function(key) {
  //  return [Number(key), data[key]];
  //});

  //console.log('Qjson: ', data, typeof data, Array.isArray(data));

  data = props.data;

  console.log( data.length );

  var myFuckingData = Object.keys(data).map(function(key) {
    return [Number(key), data[key]];
  });

  console.log('json: ', myFuckingData, typeof myFuckingData, Array.isArray(myFuckingData));

  return  (
    
    <div>
      <h2 className="question">Question { props.number }</h2>
      <p>{ props.emrys }</p>
    </div>

  );
}

Question.propTypes = {
  number: PropTypes.number.isRequired,
  data: PropTypes.any,
  emrys: PropTypes.string
};

export default Question;

