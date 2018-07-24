import React, { Component } from 'react'
import PropTypes from 'prop-types';
import InformationModal from './InformationModal.jsx';

const modals = props.modals.map((heading, information, i) => <InformationModal heading={heading} information={information} number={i} key={i} />)

const InformationModals = (props) => {
    return  (
        <div>
            <div dangerouslySetInnerHTML={{ __html: props.intro }}></div>
            <div>{modals}</div>
        </div>
    );
  }
  //             
  export default InformationModals;

  
