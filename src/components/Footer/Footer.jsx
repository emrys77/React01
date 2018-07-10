import React from 'react'
import Button from '../Button/Button.jsx'

export default class Footer extends React.Component {

    render() {
        
            return (
                <footer className={this.props.className}>
                    <nav>
                    
                        <Button direction="backward" onChange={ this.props.onChange } />
                        <div className="progress">{this.props.sectionStep} / {this.props.sectionCount}</div>
                        <Button direction="forward" onChange={ this.props.onChange } />

                    </nav>
                </footer>
            )
        
    }
}
