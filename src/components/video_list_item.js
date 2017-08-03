import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { //putting {video} instead of (props) does const video = props.video;
  //const video = props.videos;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={ ()=> onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
    
    );
};

export default VideoListItem;