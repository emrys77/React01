import React from 'react'
import Button from '../Button.jsx'
import FontAwesome from 'react-fontawesome'

export default class Footer extends React.Component {

    render() {
        console.log('this.props.sectionStep: ' + this.props.sectionStep)
        if (this.props.step !== 1000) {
            return (
                <footer>
                    <nav>
                    
                        <Button direction="backward" onChange={ this.props.onChange } />
                        <div className="progress">{this.props.sectionStep} / {this.props.sectionCount}</div>
                        <Button direction="forward" onChange={ this.props.onChange } />

                    </nav>
                </footer>
            )
        } else return null 
    }
}
