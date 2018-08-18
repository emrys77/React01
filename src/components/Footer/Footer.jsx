import React from 'react'
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx'
import ProgressBar from './progess'
var Footer;
// function to work out if the forward button works
/* when is the forward button disabled?
multiple choice initial
modals not both done
learning check not complete

*/
export default Footer = ( props ) => {
    
    const bbState = (props.step!==1) ? "active" : "disabled";
    const fbState = (props.step === props.totalSteps)  ? "disabled" : "active";
    //if ((props.step === props.totalSteps) || ()
    var step = props.step===1; 
    const type = step ? 'initial' : null

    const footer = step ? 
    (
        <Button active={fbState} type={type} direction="forward" onChange={ props.onChange } />
    ) : (
        <div>
        <ProgressBar step={props.step} totalSteps={props.totalSteps} />
        <nav>
            <Button active={bbState} type={type} direction="backward" onChange={ props.onChange } />
            <div className="progress">{props.sectionStep} / {props.sectionCount}</div>
            <Button active={fbState} type={type} direction="forward" onChange={ props.onChange } />
        </nav>
        </div>
    )

    return (
        <footer className={props.className}>
            { footer }
        </footer>
    )
    
}

Footer.propTypes = {
    step: PropTypes.string, // which step of the course
    className: PropTypes.string, //if we are on the first page this is initial
    onChange: PropTypes.function,  // move forward/backward through the course
    sectionStep: PropTypes.string, // where we are in the section
    sectionCount: PropTypes.string, // total steps in the section
    QType: PropTypes.string // Question type
};


