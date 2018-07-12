import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'

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

