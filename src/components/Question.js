import React, { Component } from 'react';
import Text from './Text/Text.js'

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


    
    if ( myQuestion) {
      
      console.log('convert this putanna into an array');
      //var myQuestionArray = Object.values(myQuestion); 
      //var myQuestionArray = objectToArray(myQuestion);
      var myQuestionArray = Object.entries(myQuestion);

      var QType = myQuestionArray[16][1]['type'];

      if (QType==='Text') {
        var content = myQuestionArray[16][1]['content'];
      }



      //console.log( myQuestionArray);
     // var myQuestionType = myQuestionArray[16]['type'];
      
    } else {
      console.log('myQuestion is elsewhere');
    }



    console.log(myQuestion);
    console.log( myQuestionArray);

  //  console.log(myQuestionArray);
   // console.log(result);
    console.log( myDataCount );

    function createMarkup() {
      return {__html: 'First &middot; Second'};
    }
    
    function MyComponent() {
      return <div dangerouslySetInnerHTML={createMarkup()} />;
    }

    return  (
    
      <div>
        <h2 className="question">Question { this.state.question }</h2>
        <p>{ this.props.emrys }</p>
        <button onClick={this.incrementQuestion}>Click to increment by 1</button>
        <p>{QType}</p>
        <div dangerouslySetInnerHTML={content}></div>
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

