import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'rc-checkbox';

// if his is the second to last  question show a checkbox
const checkbox = (s) => {
  if (s === 47) {
      return <div className="checkboxContainer"><label><Checkbox /><span>I agree</span></label></div>
  }
  return null;
};

function Text(props) {
  return  (
    <div>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
        {checkbox(props.step)}    
    </div>
  );
}

Text.propTypes = {
  content: PropTypes.string.isRequired,
  step: PropTypes.number
};

export default Text;

