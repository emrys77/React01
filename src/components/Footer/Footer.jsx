import React from 'react'
import Button from '../Button/Button.jsx'

export default class Footer extends React.Component {
// pass 2 props to handle the two buttons: fbState bbState
    
    render() {

        var bbState = (this.props.step!==1) ? "disabled" : "active" 
        var fbState = (this.props.step === this.props.totalSteps)  ? "disabled" : "active" 
        
        console.log('bbState' + bbState)
            return (
                <footer className={this.props.className}>
                    <nav>
                    
                        <Button bState={bbState} direction="backward" onChange={ this.props.onChange } />
                        <div className="progress">{this.props.sectionStep} / {this.props.sectionCount}</div>
                        <Button bState={fbState} direction="forward" onChange={ this.props.onChange } />

                    </nav>
                </footer>
            )
        
    }
}
