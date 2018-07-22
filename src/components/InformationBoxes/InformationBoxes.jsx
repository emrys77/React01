import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Modal from '../react-modal';

function InformationBoxes(props) {
  return  (
        <div>
            <div dangerouslySetInnerHTML={{ __html: props.intro }}></div>
            <div dangerouslySetInnerHTML={{ __html: props.box1 }}></div>
            <div dangerouslySetInnerHTML={{ __html: props.box2 }}></div>
        </div>
  );
}

Text.propTypes = {
  intro: PropTypes.string.isRequired,
  box1: PropTypes.string.isRequired,
  box2: PropTypes.string.isRequired
};

export default InformationBoxes;

