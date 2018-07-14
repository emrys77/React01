import React from 'react'
import PropTypes from 'prop-types';

export default class ListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = { selected: '' }
      var value = props.item;
      var liN = props.i;
    }
    // capitalize
    jsUcfirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        var label = this.jsUcfirst(this.props.value);
        return (
            <li><label className={this.state.selected + " radioBox"} key={this.props.liN}><input type="radio" name="Q3" value={this.props.value}  />{label}</label></li>
        )
    }

}
// *** https://stackoverflow.com/questions/47231559/react-component-function-returning-jsx-causes-error-when-used-in-render-method-o
// http://react.tips/radio-buttons-in-reactjs/
// https://github.com/yannickcr/eslint-plugin-react/issues/578