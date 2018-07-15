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
    handleClick = (e,item) => {
        e.preventDefault();
        console.log(  item + 'was clicked.');
        this.setState({
            //selected: item
            selected: 'selected'
        });
    }

    // <button type="submit" onClick={() => { this.props.removeTaskFunction(todo) }}>Submit</button>
    // <button onClick={(e) => this.showVideo()}>

    // onClick={(e) => this.handleDelete(e, i)}
    /*
    <button className={this.state.disabled + ' ' + direction} direction={direction} onClick={(e) => this.props.onChange(e,step)}>
        <FontAwesome name={fa} size="2x" />
      </button>
      */

    // capitalize
    jsUcfirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        var label = this.jsUcfirst(this.props.value);
        return (
            <li onClick={(e) => { this.handleClick(e,this.props.value)}}><label className={this.state.selected + " radioBox"} key={this.props.liN}><input type="radio" name="Q3" value={this.props.value}  />{label}</label></li>
        )
    }

}
// *** https://stackoverflow.com/questions/47231559/react-component-function-returning-jsx-causes-error-when-used-in-render-method-o
// http://react.tips/radio-buttons-in-reactjs/
// https://github.com/yannickcr/eslint-plugin-react/issues/578