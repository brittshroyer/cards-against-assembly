import React, { Component } from 'react';

class VideoMain extends Component {
  render() {
    return (
      <div className="video-main col-md-8">
        <div className="embed-responsive embed-responsive-16by9"><iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1TphEh0Qgv0"></iframe></div>
        <div className="details">
          <div>Arrested Development - Chicken Dance (Whole Family)</div>
          <p>Possibly the funniest scene from the funniest show ever. (every other version of this scene on YouTube either left out Gob coming in at the end or was part of a ...</p>
        </div>
      </div>
    )
  }
}

export default VideoMain;
