import React from 'react'
import Button from '../Button.jsx'
import FontAwesome from 'react-fontawesome'

export default class Footer extends React.Component {

    render() {
        console.log('this.props.sectionStep: ' + this.props.sectionStep)
        var BDisabled,FDisabled = null
        if (this.props.step == 1) {
            var Bdisabled=1
        }
        if (this.props.step == this.props.totalSteps) {
            var Fdisabled=1
        }
            return (
                <footer>
                    <nav>
                    
                        <Button disabled={BDisabled} direction="backward" onChange={ this.props.onChange } />
                        <div className="progress">{this.props.sectionStep} / {this.props.sectionCount}</div>
                        <Button disabled={FDisabled} direction="forward" onChange={ this.props.onChange } />

                    </nav>
                </footer>
            )
        
    }
}
