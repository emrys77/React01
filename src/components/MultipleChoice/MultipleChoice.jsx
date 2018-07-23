import React from 'react'
import ListItem from './ListItem.jsx'

export default class MultipleChoice extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          selected: -1,
          messageHidden: true
        }
    }

    // on submit enable forward button regardless if answer is correct

    submitButton = (s) => {
        if (s !== -1) {
            return <button onClick={this.unHide.bind(this)} className="submit active">Submit</button>
        }
        return <button className="submit disabled">Submit</button>
    };

    unHide = () => {
        this.setState({
          messageHidden: false
        })
    }

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
        
        var Message = (clicked) => {
            console.log('this.props.correct: ' + this.props.correct )
            console.log('clicked: ' + clicked )
            console.log('this.state.selected: ' + this.state.selected )
            if ( this.state.selected === this.props.correct) {
                return  <p>That's right</p> 
            } else {
                return <div>{ this.props.incorrectResponse}</div>
            }
        };
        
        return  (
            <div className="multipleChoice wrapper">
                <p className="question">{this.props.question}</p>
                <ol className="alpha">
                { itemsList }
                </ol>
                {!this.state.messageHidden && <Message />}
                { submitButton }
            </div>
        );
    }
}
