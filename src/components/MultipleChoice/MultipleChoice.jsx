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

    // shows the message
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
        var submitButton = this.submitButton(selected); 
        var clicked = ( this.state.selected === this.props.correct) ? <p>That's right</p>  : <div>{ this.props.incorrectResponse}</div>
        
        return  (
            <div className="multipleChoice wrapper">
                <p className="question">{this.props.question}</p>
                <ol className="alpha">
                { itemsList }
                </ol>
                {!this.state.messageHidden && clicked }
                { submitButton }
            </div>
        );
    }
}
