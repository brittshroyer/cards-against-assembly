import React, { Component } from 'react';

class VideoMain extends Component {
  render() {
    let snippet = this.props.video.snippet;

    if (!snippet) {
      snippet = {
        title: 'Loading...',
        description: ''
      }
    }

    const embedUrl = (this.props.video.id) ?
            `https://www.youtube.com/embed/${ this.props.video.id.videoId }` :
            'http://placehold.it/725x400'

    return (
      <div className="video-main col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={ embedUrl }></iframe>
        </div>
        <div className="details">
          <div>{ snippet.title }</div>
          <p>{ snippet.description }</p>
        </div>
      </div>
    )
  }
}

export default VideoMain;
