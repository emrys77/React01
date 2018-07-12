import React from 'react'

export default class ListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = { selected: '' }
    }

    render() {
        return (
            <li><label className={this.state.selected + "radioBox"} key={this.props.i}><input type="radio" name="Q3" value={this.props.item}  />{this.props.item}</label></li>
        )
    }

}
// *** https://stackoverflow.com/questions/47231559/react-component-function-returning-jsx-causes-error-when-used-in-render-method-o
// http://react.tips/radio-buttons-in-reactjs/
// https://github.com/yannickcr/eslint-plugin-react/issues/578