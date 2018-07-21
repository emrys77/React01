import React from 'react';
import PropTypes from 'prop-types';

function Text(props) {
  return  (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </div>
  );
}

Text.propTypes = {
  content: PropTypes.string.isRequired
};

export default Text;

