import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button.js'


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
       //this.props.passClick();
    }

    render() {
        return (
            <footer>
                <Button direction="forward" />
            </footer>
        )
    }
        
    
}
export default Footer;