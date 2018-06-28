import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'


/* https://codepen.io/PiotrBerebecki/pen/NRdAON 
   this.props.passClick();
*/

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    

    incrementQuestion = () => {
        //this.setState({ question: this.state.question + 1 });
        console.log('1. Received click in Button');
        this.props.passClick();
    }

    render() {
        return (
            <footer>
            <button className="forward" onClick={this.incrementQuestion}>
              <FontAwesome name='angle-right' />
            </button>
          </footer>
        )
    }
        
    
}
export default Footer;