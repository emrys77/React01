import React from 'react'

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
                <nav>
                    <Button direction="backward" />
                    <Button direction="forward" />
                </nav>
            </footer>
        )
    }
        
    
}
export default Footer;