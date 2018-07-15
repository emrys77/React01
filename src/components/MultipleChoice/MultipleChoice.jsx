import React from 'react'
import ListItem from './ListItem.jsx'

export default class MultipleChoice extends React.Component {
    constructor(props) {
      super(props);
      this.state = { selected: '' }
    }

/* handleClick: remove class add class add selected , show submit button
handle submit: compare answer and show appropriate message 
do we need state? yes so we can re-render on change */ 

    render() {

        var onChange = (e,select) => {
            //console.log('Clicked: ' + e.target.value);
            e.preventDefault();
            console.log('Clicked: ' + select)
            this.setState({
                //selected: item
                selected: select
            });

        }

        var itemsList = this.props.options.map(function(item,i){
            //return <li><label className="radioBox" key={i}><input type="radio" name="Q3" value={item}  />{item}</label></li>
            return <ListItem i={i} value={item} onChange={ onChange }/>
        })
 
        return  (
            <div className="multipleChoice wrapper">
                <p className="question">{this.props.question}</p>
                <ol className="alpha">
                { itemsList }
                </ol>
            </div>
        );
    }
}
/*
MultipleChoice.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.array,
  correct: PropTypes.string
}
*/
