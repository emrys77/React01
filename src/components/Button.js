import React, { Component } from 'react'
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'

class Button extends Component {
/*  
  handleBackClick = event => {
    event.preventDefault();
    console.log('backward')
    this.props.passClick( -1 );
  }
  handleNextClick = event => {
      event.preventDefault();
      console.log('forward')
      this.props.passClick( 1 );
  }
*/
  handleClick = (direction,step,event) => {
    event.preventDefault();
    console.log(direction + ' clicked' + step)
    //this.props.passClick( step );
    this.passClick = this.passClick.bind(this);
  }

  render() {

    var direction = this.props.direction
    var fa, step

    if (direction==='backward') {
      fa = 'angle-left'
      step = -1
    } else if (direction==='forward') {
      fa = 'angle-right'
      step = 1
    }

    return  (
     // <button className={direction} onClick={ this.handleClick(direction) } >
      <button className={direction} onClick={(e) => this.handleClick(direction,step, e)}>
        <FontAwesome name={fa} size="2x" />
      </button>
    );

  }

}

Button.propTypes = {
  direction: PropTypes.string.isRequired,
  passClick: PropTypes.func
};

export default Button;



/* https://codepen.io/PiotrBerebecki/pen/NRdAON 
   this.props.passClick();
*/