import React from 'react';
import PropTypes from 'prop-types';

function MultipleChoice(props) {
    var items = props.options;
    var itemsList = items.map(function(item,i){
      return <li><label className="radioBox" key={i}><input type="radio" name="Q3" value={item} />{item}</label></li>
    })
    return  (
        <div className="multipleChoice wrapper">
          <p className="question">{props.question}</p>
          <ol className="alpha">
          { itemsList }
          </ol>
        </div>
      );
}

MultipleChoice.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.array,
  correct: PropTypes.string
}

export default MultipleChoice;