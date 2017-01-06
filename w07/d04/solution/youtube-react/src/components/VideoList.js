import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends Component {
  render() {
    const videos = this.props.videos;
    const items = videos.map(video => {
      return <VideoListItem
                videoClicked={ this.props.videoClicked }
                videoItem={ video }
                key={ video.id.videoId } />
    });

    return (
      <ul className="col-md-4 list-group">
        { items }
      </ul>
    );
  }
}

export default VideoList;
