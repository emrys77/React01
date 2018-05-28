import React from 'react';
import PropTypes from 'prop-types';

function Text(props) {
  return  (
    <div className="text">
      <h2 className="title">{props.title}</h2>
      <div className="content">{props.content}</div>
    </div>
  );
}

Text.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired
};

export default Text;

