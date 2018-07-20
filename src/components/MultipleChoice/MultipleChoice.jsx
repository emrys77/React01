import React from 'react'
import ListItem from './ListItem.jsx'

export default class MultipleChoice extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          emrys: 'emrys',
          selected: -1 
        }
    }

/* handleClick: remove class add class add selected , show submit button
handle submit: compare answer and show appropriate message 
do we need state? yes so we can re-render on change */ 
    submitButton = (s) => {
        if (s != -1) {
            return <span>submit</span>
            console.log('show submit')
        }
        return <span>no me submit</span>
        console.log('no show submit')
    };

    render() {

        var onChange = (e,clicked) => {
            //console.log('Clicked: ' + e.target.value);
            e.preventDefault();
            //console.log('Clicked: ' + select)
            console.log('onChange in MC fired')
            console.log( clicked + ' was clicked')
           // console.log('event.target.id: ' + event.target.id)
            this.setState({
                selected: clicked
            });

        }
        
       /* var selKey = this.state.selected; // hoisted var

        var itemsList = this.props.options.map(function(item,i){
            //return <li><label className="radioBox" key={i}><input type="radio" name="Q3" value={item}  />{item}</label></li>
            return <ListItem i={i} value={item} activeItem={ selKey } onChange={ onChange }/>
        })
*/
        var itemsList = this.props.options.map((item,i) => {
            return <ListItem key={i} itemID={i} activeItem={ this.state.selected } value={item} onChange={ onChange }/>
        }, this);


        var selected = this.state.selected;
        console.log ('selected: ' + selected );
        var submitButton = this.submitButton(selected);
        
    
        return  (
            <div className="multipleChoice wrapper">
                <p className="question">{this.props.question}</p>
                <ol className="alpha">
                { itemsList }
                </ol>
                { submitButton }
            </div>
        );
    }
}
/*
MultipleChoice.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.array,
  correct: PropTypes.string
}
have a submit button appear when an item is selected
submit button component
onClick test answer
2 functions to show messages
and make forward button active

*/
