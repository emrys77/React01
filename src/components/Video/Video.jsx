import React from 'react'
import ReactPlayer from 'react-player'
import FontAwesome from 'react-fontawesome'

export default class Video extends React.Component {
    constructor(props) {
      super(props);
      this.state = { step: 1 }
      // 1=intro 2=video
    }
    
    showVideo = () => {
        this.setState({step: 2})
    }

    render() {

        const step = this.state.step;
        let content;

        if (step===1) {
            return (
                <div className="video">
                    <div className="VideoIntro" dangerouslySetInnerHTML={{ __html: this.props.video_intro_text }}></div>  
                    <button onClick={(e) => this.showVideo()}>
                        <FontAwesome name="play" size="2x" />
                    </button>
                </div>
            )
        } else if (step===2) {
            return (
                <ReactPlayer url={this.props.video_url} width="1000px" height="555px" /> 
            )
        }
    }
}
