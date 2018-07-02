import React from 'react';
import PropTypes from 'prop-types';

function MultipleChoice(props) {
    var items = props.options;
    var itemsList = items.map(function(item,i){
      return <label className="radioBox" key={i}><input type="radio" name="Q3" value={item} />{item}</label>
    })
    return  (
        <div className="multipleChoice wrapper">
          <h2 className="question">{props.question}</h2>
          { itemsList }
        </div>
      );
}

MultipleChoice.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.array,
  correct: PropTypes.string
}

export default MultipleChoice;