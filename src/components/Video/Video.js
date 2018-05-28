import React from 'react';
import PropTypes from 'prop-types';

function Video(props) {
  return (
    <div className="video">
        <div className="video_intro_text">{props.video_intro_text}</div>
        <div className="flex-video widescreen vimeo">
            <iframe title="vimeoPlayer" src={ `https://player.vimeo.com/video/${props.vimeo_code}` }width="500" height="281" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
 	    </div>
    </div>
  );
}


Video.propTypes = {
  vimeo_code: PropTypes.string,
  video_intro_text: PropTypes.string.isRequired
};

export default Video;
