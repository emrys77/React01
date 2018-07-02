import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

const handleClick = (direction) => {
  console.log(' Received' + direction + ' click in Button');
 // this.props.passClick();
}

class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    var direction = this.props.direction;
    
    console.log('direction: ' + direction)

    if (direction=='backward') {
      var fa = 'angle-left'
    } else {
      var fa = 'angle-right'
    }

    return  (
      <button className={direction} onClick={handleClick(direction)}>
        <FontAwesome name={fa} />
      </button>
    );

  }

}

/*Button.propTypes = {
  direction: PropTypes.string.isRequired,
  passClick: PropTypes.function
};*/

export default Button;



/* https://codepen.io/PiotrBerebecki/pen/NRdAON 
   this.props.passClick();
*/