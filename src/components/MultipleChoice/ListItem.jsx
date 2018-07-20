import React from 'react'
import PropTypes from 'prop-types';

export default class ListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = { selected: '' }
      var value = props.item;
      var liN = props.i;

      // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    // ****** this never fires ********* //
    handleClick = (e,item) => {
        e.preventDefault();
        //console.log(  item + 'was clicked.');
        
        console.log('handle click was fired')
        this.setState({
            selected: item
            //selected: 'selected'
        });
    }

    // <button type="submit" onClick={() => { this.props.removeTaskFunction(todo) }}>Submit</button>
    // <button onClick={(e) => this.showVideo()}>

    // onClick={(e) => this.handleDelete(e, i)}


    // capitalize
    jsUcfirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        var label = this.jsUcfirst(this.props.value);
        
        return (
            <li><label className={this.props.activeItem === this.props.itemID ? 'selected radiobox' : 'radiobox'} onClick={(e) => this.props.onChange(e,this.props.itemID)}><input type="radio" name="Q3" value={this.props.value} />{label}</label></li>
        )
    }

}

/** 
 * 
 * onClick={() => handler(index)}

 * className={this.props.activeItem === index ? 'selected' : ''}
 * 
 * 
onClick={(e) => { this.handleClick(e,this.props.value)}}
onClick={(e) => this.props.onChange(e,step)}

https://stackoverflow.com/questions/47231559/react-component-function-returning-jsx-causes-error-when-used-in-render-method-o
// http://react.tips/radio-buttons-in-reactjs/
// https://github.com/yannickcr/eslint-plugin-react/issues/578

*/