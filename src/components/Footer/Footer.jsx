import React from 'react'
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx'
import ProgressBar from './progess'

// function to work out if the forward button works
/* when is the forward button disabled?
multiple choice initial
modals not both done
learning check not complete


export default Footer = ( props ) => {
*/



export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            bbState: false,
            fbState: false
        }
    }
    
    UNSAFE_componentWillReceiveProps({bbState,fbState}) {
        this.setState({
            bbState: bbState,
            fbState: fbState
        })
    }

    render() {
        
        //const bbState = (this.state.bbState) ? "active" : "disabled";
        //const fbState = (this.state.fbState)  ? "active" : "disabled";
        const bbState = true;
        const fbState = true;

        //if ((props.step === props.totalSteps) || ()
        var step = this.props.step===1; 
        const type = step ? 'initial' : null

        const footer = step ? 
        (
            <Button active={fbState} type={type} direction="forward" onChange={ this.props.onChange } />
        ) : (
            <div>
            <ProgressBar step={this.props.step} totalSteps={this.props.totalSteps} />
            <nav>
                <Button active={bbState} type={type} direction="backward" onChange={ this.props.onChange } />
                <div className="progress">{this.props.sectionStep} / {this.props.sectionCount}</div>
                <Button active={fbState} type={type} direction="forward" onChange={ this.props.onChange } />
            </nav>
            </div>
        )

        return (
            <footer className={this.props.className}>
                { footer }
            </footer>
        )
    }
}

Footer.propTypes = {
    step: PropTypes.number, // which step of the course
    className: PropTypes.string, //if we are on the first page this is initial
    onChange: PropTypes.any,  // function to move forward/backward through the course
    sectionStep: PropTypes.string, // where we are in the section
    sectionCount: PropTypes.number, // total steps in the section
    QType: PropTypes.string, // Question type
    bbState: PropTypes.bool, // backward button initial
    fbState: PropTypes.bool, // forward button initial
};


