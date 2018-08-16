import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
/*import VimeoPlayer from 'react-player/lib/players/Vimeo';*/

import FontAwesome from 'react-fontawesome';

export default class Video extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { step: 'intro' }
    }
    
    showVideo = () => {
        this.setState({step: 'video'})
    }

    render() {
        const step = this.state.step==='intro'; 
        return (
             step ?
               ( <div className="video">
                    <div className="VideoIntro" dangerouslySetInnerHTML={{ __html: this.props.videoIntroText }}></div>  
                    <button onClick={() => this.showVideo()}>
                        <FontAwesome name="play" size="2x" />
                    </button>
                </div>
              ) : (
                <div className="player-wrapper">
                    <ReactPlayer 
                        url={'https://player.vimeo.com/video/' + this.props.vimeoCode } className="react-player"
                        width='100%'
                        height='100%' 
                    />
                </div>
              )
            
        )

    }
}

Video.propTypes = {
    videoIntroText: PropTypes.string,
    vimeoCode: PropTypes.string
};
