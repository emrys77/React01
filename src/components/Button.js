import React, { Component } from 'react'
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'

class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  handleClick = (direction) => {
    console.log(' Received' + direction + ' click in Button');
    this.props.passClick(direction);
  }
  
  render() {

    var direction = this.props.direction
    var fa, step

    console.log('direction: ' + direction)

    if (direction==='backward') {
      fa = 'angle-left'
      step = -1
    } else if (direction==='forward') {
      fa = 'angle-right'
      step = 1
    }

    return  (
      <button className={direction} onClick={this.handleClick(step)}>
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