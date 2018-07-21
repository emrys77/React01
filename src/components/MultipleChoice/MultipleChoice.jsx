import React from 'react'
import ListItem from './ListItem.jsx'

export default class MultipleChoice extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          selected: -1 
        }
    }

    // on submit enable forward button regardless if answer is correct

    submitButton = (s) => {
        if (s !== -1) {
            return <button className="submit active">Submit</button>
        }
        return <button className="submit disabled">Submit</button>
    };

    

//    Q3: That’s not right. Increased risk of apprehension is the major reason armed robbers avoid banks.
//      That's right.
//
//
//
//
//



    render() {

        var onChange = (e,clicked) => {
            e.preventDefault();
        //    console.log('onChange in MC fired')
        //    console.log( clicked + ' was clicked')
            this.setState({
                selected: clicked
            });

        }

        var itemsList = this.props.options.map((item,i) => {
            return <ListItem key={i} itemID={i} activeItem={ this.state.selected } value={item} onChange={ onChange }/>
        }, this);

        var selected = this.state.selected;
        console.log ('selected: ' + selected );
        var submitButton = this.submitButton(selected); 
        
        // incorrectResponse, theAnswer
        var message = (props) => {
            if (this.state.selected == -1) {
                return null
            } else if ( this.state.selected == this.props.theAnswer) {
                return  <text>That's right</text> 
            } else {
                return <text>{ this.props.incorrectResponse}</text>
            }
        
        };

        return  (
            <div className="multipleChoice wrapper">
                <p className="question">{this.props.question}</p>
                <ol className="alpha">
                { itemsList }
                </ol>
                { message( selected ) }
                { submitButton }
            </div>
        );
    }
}
