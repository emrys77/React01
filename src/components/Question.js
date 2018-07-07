import React, { Component } from 'react'

import Video from './Video/Video.jsx'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.jsx'
import MultipleChoice from './MultipleChoice/MultipleChoice.jsx'

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 }
    //this.passClick = this.passClick.bind(this);
  }
  
  render() {

    const passClick = (move) => {
      var nStep = (move === 1) ? this.state.step-1 : this.state.step+1;
      this.setState({step: nStep})
    }

    const findObjectByKey = (array, key, value) => {
      for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
              return array[i];
          }
      }
      return null;
    }

    // all the data
    const myData = this.props.data;
    const myDataCount = myData.length;

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
    let step = this.state.step;
    
    // get the data for the question we are on
    let myQuestion = findObjectByKey(myData,'menu_order',step);

    if ( myQuestion) {
      var myQuestionArray = Object.entries(myQuestion);

      console.log('myQuestionArray: ');
      console.log(myQuestionArray);

      // work out which section we are in
      var section = myQuestionArray[16][1]['section'];
      // get how many steps in this section
      var sectionCount = accumulatedTotals[section];
      // and where we are in that section to pass to the footer
      var QNumber = myQuestionArray[16][1]['question_number'];
      // big fat h1 tag if it exists
      var title = myQuestionArray[16][1]['title']
      var QTitle
      console.log('title: ' + title)
      if (title) {
        QTitle = <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
      } else {
        QTitle = null
      }
      
      

      // what kind of question are we? intro/text/video/multiple choice/
      var QType = myQuestionArray[16][1]['type'];
      
      // get the background image if there is one
      var bg = myQuestionArray[16][1]['image'];
      if (bg) {
          var bgClass = 'bg'
          styles = {
            background: 'url(' + bg + ') no-repeat right top',
            height: '100%'
          }
      } else {
        var bgClass = 'nobg'
      }
      
      // console.log(QType)
      var Header
      if (QType !== 'Intro'){
        Header = <header>Survive Armed Robbery | {section}</header>
      } else {
        Header = null
      }
      
      var styles, QRender; 

      if ( QType === 'Intro') {
       // QRender = <img src={bg} alt={section} />
      }

      if ( QType === 'Text') {
        var QContent = myQuestionArray[16][1]['content'];
        QRender = <div dangerouslySetInnerHTML={{ __html: QContent }}></div>  
      }
/* <div className='video-papa'>
          <ReactPlayer url={video_url} /> 
        </div> */

      if (QType==='Video') {
        var video_intro_text = myQuestionArray[16][1]['video_intro_text'];
        var vimeo_code = myQuestionArray[16][1]['vimeo_code']
        var video_url = 'https://player.vimeo.com/video/' + vimeo_code + 'playing'
        
        QRender = 
        <Video video_intro_text={video_intro_text} video_url={video_url} />
        
      }
      if (QType==='Multiple Choice') {
        var question_text = myQuestionArray[10][1]['rendered']
        var options = myQuestionArray[16][1]['multiple_choice_question']
        // create an array for the question options list
        var rOptions = [];
        options.forEach(function(element) {
          rOptions.push(element.choice);

          for (let [index, val] of options.entries()) {
            //console.log('index: ' + index)
            //console.log('val: ' + val.is_this_the_correct_answer)
            if ( val.is_this_the_correct_answer === true ) {
              console.log('correct: ' + index)
              // var a = index 
            }
          }
        });
        
        QRender = <MultipleChoice question={question_text} options={rOptions} correct={'a'}  />

      }

    } else {
      console.log('myQuestion is elsewhere');
    }

    return  (
    
      <div className={ bgClass + ' content ' + QType + ' Q' + QNumber}>
        {Header}
        <div style={styles}>
          <div className={ "QContent Question" + this.state.step } >
            {QTitle}
            {QRender}
          </div>
          <Footer QNumber={QNumber} passClick={ passClick } section={section} sectionStep={QNumber} sectionCount={sectionCount} />
        </div>
      </div>

    );
  }

  componentDidMount() {
 /*   if ( {QType === 'Intro' }) {
      setTimeout(passClick(1), 5000)
    }*/
  }

}

export default Question;

