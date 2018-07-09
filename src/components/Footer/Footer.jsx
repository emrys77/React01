import React from 'react'
import Button from '../Button/Button.jsx'

export default class Footer extends React.Component {

    render() {
        console.log('this.props.sectionStep: ' + this.props.sectionStep)
        var disabled = null
        if (this.props.step === 1) {
            disabled=1
        }
        if (this.props.step === this.props.totalSteps) {
            disabled=1
        }
            return (
                <footer>
                    <nav>
                    
                        <Button disabled={disabled} direction="backward" onChange={ this.props.onChange } />
                        <div className="progress">{this.props.sectionStep} / {this.props.sectionCount}</div>
                        <Button disabled={disabled} direction="forward" onChange={ this.props.onChange } />

                    </nav>
                </footer>
            )
        
    }
}
