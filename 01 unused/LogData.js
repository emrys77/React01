import React from 'react';
import PropTypes from 'prop-types';
import DataStore from '../flux/DataStore.js';

function LogData() {
    myData = DataStore.getAllQuestions();
  console.log( myData );
}

export default LogData;

