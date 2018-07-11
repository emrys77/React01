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

        var handleClick = (e) => {
            console.log(e.target.value);
            
            // add class
            // show submit button
            //this.setState({step: 2})
        }

        var itemsList = this.props.options.map(function(item,i){
            //return <li><label className="radioBox" key={i}><input type="radio" name="Q3" value={item}  />{item}</label></li>
            return <ListItem i={i} value={item} />
        })
 
        return  (
            <div className="multipleChoice wrapper">
                <p className="question">{this.props.question}</p>
                <ol className="alpha" onChange={handleClick.bind(this)}>
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
