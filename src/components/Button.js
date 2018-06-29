import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'


const handleClick = (direction) => {
  console.log(' Received' + {direction} + ' click in Button');
 //this.props.passClick();
}



function Button(props) {

    if (props.direction=='backward') {
      var fa = 'angle-left'
    } else {
      var fa = 'angle-right'
    }
  
  return  (
    <button className={props.direction} onClick={handleClick()}>
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