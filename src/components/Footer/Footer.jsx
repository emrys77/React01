import React from 'react'
import Button from '../Button/Button.jsx'
import ProgressBar from './progess'

//var progress =  Math.round((this.props.step/ this.props.myDataCount) * 100);

//console.log('Progress: ' + progress + '%' )
export default class Footer extends React.Component {
// pass 2 props to handle the two buttons: fbState bbState
    
    render() {

        var bbState = (this.props.step!==1) ? "active" : "disabled" 
        var fbState = (this.props.step === this.props.totalSteps)  ? "disabled" : "active" 
        
        const step = this.props.step===1; 

        //console.log('bbState' + bbState)
            return (
                step ? 
                (
                    <footer className={this.props.className}>
                        <Button active={fbState} type="initial" direction="forward" onChange={ this.props.onChange } />
                    </footer>
                ) : (
                    <footer className={this.props.className}>
                        <ProgressBar step={this.props.step} totalSteps={this.props.totalSteps} />
                        <nav>
                            <Button active={bbState} direction="backward" onChange={ this.props.onChange } />
                            <div className="progress">{this.props.sectionStep} / {this.props.sectionCount}</div>
                            <Button active={fbState} direction="forward" onChange={ this.props.onChange } />
                        </nav>
                    </footer>
                )
            )
        
    }
}
