import React, { Component } from 'react'
import PropTypes from 'prop-types';
import InformationModal from './InformationModal.jsx';


const InformationModals = (boxes) => {
    return  (
        <div>
            {boxes.map((box, i) => <InformationModal obj={box} key={i} />)}
        </div>
    );
  }
  
  InformationModals.propTypes = {
    content: PropTypes.string.isRequired
  };
  
  export default InformationModals;

  
