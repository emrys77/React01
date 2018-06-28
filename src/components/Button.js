import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

function Button(props) {
  if (direction=='backward') {
    var fa = angle-left
  } else {
    var fa = angle-right
  }
  handleClick = () => {
    console.log(' Received' + direction + ' click in Button');
    this.props.passClick();
  }
  return  (
    <button className={direction} onClick={this.handleClick}>
      <FontAwesome name={fa} />
    </button>
  );
}

Button.propTypes = {
  direction: PropTypes.string.isRequired
};

export default Button;



/* https://codepen.io/PiotrBerebecki/pen/NRdAON 
   this.props.passClick();
*/