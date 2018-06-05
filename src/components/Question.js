import React from 'react';
import PropTypes from 'prop-types';

//import BJBS from './GetData.js';

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

*/
function getQuestionData( responseArray, questionNumber ) {
    return responseArray.filter( item => item.type === 'the_course' )
        .find( item => item.menu_order ===  questionNumber );
}


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

  //var result = Object.keys(data).map(function(key) {
  //  return [Number(key), data[key]];
  //});

  //console.log('Qjson: ', data, typeof data, Array.isArray(data));

  var myData = props.data;

  if (myData.length > 0) {
    console.log( myData );
    var myFuckingData = Object.keys(myData).map(function(key) {
      return [Number(key), myData[key]];
    });

    console.log(myFuckingData[2][1]['acf']['section']);

    console.log(myFuckingData[2][1]['menu_order']);

    var whatImGoingToShow = getQuestionData( myFuckingData, props.number);

    console.log(whatImGoingToShow);
  }

  //var MySection =  myData[2][1]['acf']['section'];
 // console.log('myData: ', myData, typeof myData, Array.isArray(myData));
  //console.log( 'myData length: ' + myData.length );
  //var section = data[0][1]['acf']['section'];
  //console.log( data[2][1]['acf']['section']);
  //data[2][1]['acf']['section']
  //console.log('myFuckingData: ', myFuckingData, typeof myFuckingData, Array.isArray(myFuckingData));

 
 
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

