import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends Component {
  render() {
    const videos = this.props.videos;
    const newVideos = videos.map(video => {
      return <VideoListItem
                onVideoClicked={ this.props.onVideoClicked }
                key={ video.id.videoId }
                videoItem={ video } />
    });

    return (
      <ul className="col-md-4 list-group">
        { newVideos }
      </ul>
    );
  }
}

export default VideoList;
