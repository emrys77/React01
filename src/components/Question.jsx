import React, { Component } from 'react'

import Video from './Video/Video.jsx'
import Text from './Text/Text.js'
import InformationBoxes from './InformationBoxes/InformationBoxes.jsx'
//import Header from './Header/Header.js'
import Footer from './Footer/Footer.jsx'
import MultipleChoice from './MultipleChoice/MultipleChoice.jsx'
import LearningCheck from './LearningCheck/LearningCheck.jsx'


// utility to strip commas and spaces
const className = (w) => w.replace(/\s/g,'-').replace(/,/g,'');

// utility to add an index to array elements

const addIndex = (a) => {
  a.map = (el,i) => {
    var o = Object.assign({}, el);
    o.index = i;
    return o;
  }
}


/*
const addIndex = function(a) {
  a.map(function(el,i) {
    var o = Object.assign({}, el);
    o.index = i;
    return o;
  });

} 
*/


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 }
  }
  
  

  moveQuestion = (e,move) => {
    var nStep = (move === 1) ? this.state.step+1 : this.state.step-1;
    this.setState({step: nStep})
  }

  introPause = wait => {
    var nStep = this.state.step+1
      setTimeout(() => {
        this.setState({step: nStep})
      }, {wait});
  }

  componentDidMount() {
   // console.log('componentDidMount fired, QTYPE: ' + this.QType)
    if ( this.QType === 'Intro' ) {
        this.introPause(5000)
    }
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

//      console.log('myQuestionArray: ');
      console.log(myQuestionArray);

      // work out which section we are in
      var section = myQuestionArray[17][1]['section'];
      // strip the spaces and commas so we can use it as a class name 
      //var sectionClass = section.replace(/\s/g,'-').replace(/,/g,''); 
      var sectionClass = className(section);
      // get how many steps in this section
      var sectionCount = accumulatedTotals[section];
      // and where we are in that section to pass to the footer
      var QNumber = myQuestionArray[17][1]['question_number'];
      // big fat h1 tag if it exists
      var title = myQuestionArray[17][1]['title']
      var QTitle
      //console.log('title: ' + title)
      if (title) {
        QTitle = <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
      } else {
        QTitle = null
      }

      // what kind of question are we? intro/text/video/multiple choice/
      this.QType = myQuestionArray[17][1]['type'];

      var QTypeClass = className(this.QType);
      
      // get the background image if there is one
      var bg = myQuestionArray[17][1]['image'];
      //var bgClass = 'nobg'

      var bgClass = bg ? 'bg' : 'nobg' 

      // console.log(QType)
      var Header
      if (this.QType !== 'Intro'){
        Header = <header>Survive Armed Robbery | {section}</header>
      } else {
        Header = null
      }
      
      var styles, QRender; 

      if ( this.QType === 'Intro') {
       // QRender = <img src={bg} alt={section} />
      }

      if ( this.QType === 'Text') {
        var QContent = myQuestionArray[17][1]['content'];
        QRender = <Text content={QContent} />
      }

      if (this.QType==='Video') {
        var video_intro_text = myQuestionArray[17][1]['video_intro_text'];
        var vimeo_code = myQuestionArray[17][1]['vimeo_code']
        var video_url = 'https://player.vimeo.com/video/' + vimeo_code + 'playing'
        
        QRender = 
        <Video video_intro_text={video_intro_text} video_url={video_url} />
      }

      if (this.QType==='Multiple Choice') {
        var question_text = myQuestionArray[10][1]['rendered']
        var options = myQuestionArray[17][1]['multiple_choice_question']
        var incorrect_response = myQuestionArray[17][1]['incorrect_answer_response']
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

     // console.log( 'theAnswer: ' + theAnswer)
        
      QRender = <MultipleChoice question={question_text} incorrectResponse={incorrect_response} options={rOptions} correct={ theAnswer }  />

      }

      if (this.QType==='Information Boxes') {
        const intro = myQuestionArray[17][1]['further_information_intro'];
        const modals = myQuestionArray[17][1]['information_modal'];
        QRender = <InformationBoxes intro={intro} modals={modals} />
      }

      if (this.QType==='Learning Check') {
        const intro = myQuestionArray[17][1]['learning_check_intro_text'];
        const boxes = myQuestionArray[17][1]['learning_check_drop_boxes']; // array
        //const box1heading = myQuestionArray[17][1]['box_1_heading'];
        //const box2heading = myQuestionArray[17][1]['box_2_heading'];
        // 
        const learning_check = myQuestionArray[17][1]['learning_check'];

        console.log(learning_check);
/* 1: {group: "1", content: "Pharmacies", order: "0"}*/

console.log('learning_check: ', learning_check, typeof learning_check, Array.isArray(learning_check));

        //add an index to each element
        var items = learning_check.map(function(el,i) {
          var o = Object.assign({}, el);
          o.key = i;
          return o;
        });

/*         
        const items = addIndex(learning_check);
*/
        console.log('items: ' + items);


/*
var itemsList = this.props.options.map((item,i) => {
            return <ListItem key={i} itemID={i} activeItem={ this.state.selected } value={item} onChange={ onChange }/>
        }, this);
var task_names = tasks.map(function (task, index, array) {
 
    return task.name; 
 
});
group content order

console.log(materials.map(material => material.length));

(8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
{
content : "Service stations"
group : "1"
order : "0"
      }

      
Array[8]
0:
{…}
content:"Service stations"
group:"1"
order:"0"
*/
        
      /*  const items = learning_check.map(i, group, content, order) => {
            return [index, group,content, order]
        }*/

        QRender = <LearningCheck intro={intro} boxes={boxes} items={items} />
      }

    } else {
      console.log('myQuestion is elsewhere');
    }

    return  (
    
      <div className={ bgClass + ' content ' + QTypeClass + ' Q' + QNumber + ' ' + sectionClass}>
        {Header}
        <div style={styles}>
          <div className={ "QContent Step" + this.state.step } >
            {QTitle}
            {QRender}
          </div>
          <Footer className={'Step'+this.state.step} QNumber={QNumber} onChange={this.moveQuestion} section={section} sectionStep={QNumber} sectionCount={sectionCount} step={this.state.step} totalSteps={myDataCount} />
        </div>
      </div>

    );
  }

}

export default Question;

