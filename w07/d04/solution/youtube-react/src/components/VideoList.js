import React, { Component } from 'react';
import VideoListItem from './VideoListItem'

class VideoList extends Component {
  render() {
    const videoItem = {
     "kind": "youtube#searchResult",
     "etag": "\"gMxXHe-zinKdE9lTnzKu8vjcmDI/XAHlx4DaROLLhaMDuybRPN8FN_Y\"",
     "id": {
      "kind": "youtube#video",
      "videoId": "APWXorE6h8U"
     },
     "snippet": {
      "publishedAt": "2009-12-03T04:40:11.000Z",
      "channelId": "UCoiHvLgTkGSoSmjqOdAcmZw",
      "title": "Arrested Development Chicken Dance Montage",
      "description": "I was searching youtube for this and came up with nothing so I made one myself...enjoy!",
      "thumbnails": {
       "default": {
        "url": "https://i.ytimg.com/vi/APWXorE6h8U/default.jpg",
        "width": 120,
        "height": 90
       },
       "medium": {
        "url": "https://i.ytimg.com/vi/APWXorE6h8U/mqdefault.jpg",
        "width": 320,
        "height": 180
       },
       "high": {
        "url": "https://i.ytimg.com/vi/APWXorE6h8U/hqdefault.jpg",
        "width": 480,
        "height": 360
       }
      },
      "channelTitle": "tammy lewis",
      "liveBroadcastContent": "none"
      }
    }

    return (
      <ul className="col-md-4 list-group">
        <VideoListItem videoItem={ videoItem } />
        <VideoListItem videoItem={ videoItem } />
        <VideoListItem videoItem={ videoItem } />
        <VideoListItem videoItem={ videoItem } />
      </ul>
    )
  }
}

export default VideoList;
