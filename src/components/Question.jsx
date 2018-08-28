import React, { Component } from 'react'

import Video from './Video/Video.jsx'
import Text from './Text/Text.js'
import InformationBoxes from './InformationBoxes/InformationBoxes.jsx'
import Footer from './Footer/Footer.jsx'
import MultipleChoice from './MultipleChoice/MultipleChoice.jsx'
import LearningCheck from './LearningCheck/LearningCheck.jsx'

// utility to strip commas and spaces
const className = (w) => w.replace(/\s/g,'-').replace(/,/g,'');

// utility to add an index to array elements
const addIndex = (a) => {
  console.log('addIndex initiated')
  return a.map((el, i) => Object.assign({
    key: i
  }, el));
}

var efbFired = false;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      step: 1
    }
  }
    
  // function to move us backwards and forwards through the course
  moveQuestion = (e,move) => {
    var nStep = (move === 1) ? this.state.step+1 : this.state.step-1;
    this.setState({
      step: nStep
    })
  }

  findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }
  
  enableForwardButton = () => {
    console.log('enableForwardButton fired');
    efbFired = true
  }
  

  render() {

    console.log('efbFired: ' + efbFired);

    // all the data
    const myData = this.props.data;

    // this is how many steps we have in total
    const myDataCount = this.props.data.length;
    //console.log(myData)

    //count the number in each section bung them in an array
    const accumulatedTotals = {}
    for ( let i = 0; i < myData.length; i++ ) {
      const p = myData[i]
      accumulatedTotals[ p.acf.section ] = (accumulatedTotals[ p.acf.section ] || 0) + 1
    }

/*    console.log( accumulatedTotals)
{Survive Armed Robbery: 3, The Offender: 10, New Crims, new ways: 9, The Robbery: 14, Conclusion: 12}
*/
    var step = this.state.step;
    
    // get the data for the question we are on
    const myQuestion = this.findObjectByKey(myData,'menu_order',step);

    if ( myQuestion) {
      var myQuestionArray = Object.entries(myQuestion);

//      console.log('myQuestionArray: ');
//      console.log(myQuestionArray);

      // work out which section we are in
      var section = myQuestionArray[17][1]['section'];
      // strip the spaces, commas and backticks so we can use it as a class name 
      var sectionClass = className(section);
      // get how many steps in this section
      var sectionCount = accumulatedTotals[section];
      // and where we are in that section to pass to the footer
      var QNumber = myQuestionArray[17][1]['question_number'];
      // big fat h1 tag if it exists
      var title = myQuestionArray[17][1]['title']
      //console.log('title: ' + title)
      var QTitle = title ? <h1 dangerouslySetInnerHTML={{ __html: title }}></h1> : null

      // what kind of question are we? intro/text/video/multiple choice/
      this.QType = myQuestionArray[17][1]['type'];

      var QTypeClass = className(this.QType);
      
      var Header = (this.QType !== 'Intro') ? <header>Survive Armed Robbery | {section}</header> : null

      // footer navigation initial state
      var bbState = myQuestionArray[17][1]['backward'];
      // if our funky function fires move on.....
      var fbState = (efbFired) ? true : myQuestionArray[17][1]['forward'];
      
      var QRender; 

      if ( this.QType === 'Text') {
        const QContent = myQuestionArray[17][1]['content'];
        QRender = <Text content={QContent} step={this.state.step} />
      }

      if (this.QType === 'Video') {
        const video_intro_text = myQuestionArray[17][1]['video_intro_text'];
        const vimeo_code = myQuestionArray[17][1]['vimeo_code'];        
        QRender = 
        <Video videoIntroText={video_intro_text} vimeoCode={vimeo_code} />
      }

      if (this.QType==='Multiple Choice') {
        const question_text = myQuestionArray[10][1]['rendered'];
        const options = myQuestionArray[17][1]['multiple_choice_question'];
        const incorrect_response = myQuestionArray[17][1]['incorrect_answer_response'];
        
        // create an array for the question options list
        var rOptions = [];
        // and the answer
        var theAnswer;
        options.forEach(function(element) {
          rOptions.push(element.choice);

          for (let [index, val] of options.entries()) {
            if ( val.is_this_the_correct_answer === true ) {
              theAnswer = index 
            }
          }
        }
      );
        
      QRender = <MultipleChoice onChange={this.enableForwardButton} question={question_text} incorrectResponse={incorrect_response} options={rOptions} correct={theAnswer} initialSelection={-1} initialMessageHidden={true} />

      }

      if (this.QType==='Information Boxes') {
        const intro = myQuestionArray[17][1]['further_information_intro'];
        const modals = myQuestionArray[17][1]['information_modal'];
        QRender = <InformationBoxes intro={intro} modals={modals} />
      }

      if (this.QType==='Learning Check') {
        const intro = myQuestionArray[17][1]['learning_check_intro_text'];
        const boxes = myQuestionArray[17][1]['learning_check_drop_boxes']; // array
        const learning_check = myQuestionArray[17][1]['learning_check'];
        const items = addIndex(learning_check);

        QRender = <LearningCheck intro={intro} boxes={boxes} items={items} />
      }

    } else {
      console.log('myQuestion is elsewhere');
    }

    return  (
    
      <div className={ 'content ' + QTypeClass + ' Q' + QNumber + ' ' + sectionClass}>
        {Header}
          <div className={ "QContent Step" + this.state.step } >
            {QTitle}
            {QRender}
          </div>
        <Footer className={'footer Step'+this.state.step} QType={this.QType} QNumber={QNumber} onChange={this.moveQuestion} section={section} sectionStep={QNumber} sectionCount={sectionCount} step={this.state.step} totalSteps={myDataCount} bbState={bbState} fbState={fbState} />

      </div>

    );
  }

}

export default Question;

