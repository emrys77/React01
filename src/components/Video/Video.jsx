import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
/*import VimeoPlayer from 'react-player/lib/players/Vimeo';*/

import FontAwesome from 'react-fontawesome';

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
        const step = this.state.step===1; 
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
                    <ReactPlayer url={'https://player.vimeo.com/video/' + 245558041 } />
                </div>
              )
            


        )

//         const video_url = 'https://player.vimeo.com/video/' + vimeo_code + 'playing';

/*
<ReactPlayer url={'https://player.vimeo.com/video/' + 245558041 } width='100%'
          height='100%' playing={true} />


https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2Fundefinedplaying&domain=localhost&autopause=false&byline=false&portrait=false&title=false&url=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2Fundefinedplaying&autoplay=false&muted=false&loop=false */
        

    }
}

Video.propTypes = {
    videoIntroText: PropTypes.string,
    vimeoCode: PropTypes.number
};
