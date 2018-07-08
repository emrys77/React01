import React, { Component } from 'react'
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'

class Button extends Component {

  render() { 

    var fa
    var direction = this.props.direction
    let passClick = this.props.passClick
    
    if (direction==='backward') {
      fa = 'angle-left'
    } else if (direction==='forward') {
      fa = 'angle-right'
    }

    return  (
      <button direction={direction} onClick={(e) => this.props.onChange(e)}>
        <FontAwesome name={fa} size="2x" />
      </button>
    );
  }
}

export default Button;
