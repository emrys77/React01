/*
 stateless component to show progress in the course
we need two props: 
1. which question we are on
2. the total number of questions
we have an outer boder with a bg colour
and a progress meter with a width we calculate from the props
*/
import React from 'react'
import PropTypes from 'prop-types';

//console.log( 'width: ' + Math.round((this.props.step/this.props.totalSteps) * 100) );

const ProgressBar = (props) => {
    return (
        <div className="bar-container">
            <div style={{width: Math.round((props.step/props.totalSteps) * 100)+ '%'}} />
        </div>
    )
}

export default ProgressBar;

ProgressBar.propTypes = {
    step: PropTypes.number,
    totalSteps: PropTypes.number
};