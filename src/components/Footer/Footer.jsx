import React from 'react'
//import Button from './Button.js'
import FontAwesome from 'react-fontawesome'
export default class Footer extends React.Component {

    handleBackwardClick = event => {
        event.preventDefault();
        console.log('backward')
        this.props.passClick( -1 );
      }
      handleForwardClick = event => {
          event.preventDefault();
          console.log('forward')
          this.props.passClick( 1 );
      }

    render() {
        if (this.props.section !== 'Intro') {
            return (
                <footer>
                    <nav>
                        <button className="backward" onClick={(e) => this.handleForwardClick(e)}>
                            <FontAwesome name='angle-left' size="2x" />
                        </button>
                        <div className="progress">{this.props.sectionStep} / {this.props.sectionCount}</div>
                        <button className="backward" onClick={(e) => this.handleBackwardClick(e)}>
                            <FontAwesome name='angle-right' size="2x" />
                        </button>
                    </nav>
                </footer>
            )
        } else return null 
    }
}

/*
<Button direction="backward" onClick={this.passClick} />
<Button direction="forward" onClick={this.passClick} />

*/