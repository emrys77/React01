import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'


class Footer extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    incrementQuestion = () => {
        this.setState({ question: this.state.question + 1 });
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