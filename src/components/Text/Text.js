import React from 'react';
import PropTypes from 'prop-types';

// if his is the second to last  question show a checkbox


function Text(props) {
  return  (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>

    </div>
  );
}

Text.propTypes = {
  content: PropTypes.string.isRequired,
  step: PropTypes.number
};

export default Text;

