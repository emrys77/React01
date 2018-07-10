import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class Button extends Component {
  constructor() {
    super();
  }

  render() { 

    var fa, step
    var direction = this.props.direction
    
    if (direction==='backward') {
      fa = 'angle-left'
      step = -1
    } else if (direction==='forward') {
      fa = 'angle-right'
      step = 1
    }

    return  (
      <button className={direction} direction={direction} onClick={(e) => this.props.onChange(e,step)}>
        <FontAwesome name={fa} size="2x" />
      </button>
    );
  }
}

export default Button;
