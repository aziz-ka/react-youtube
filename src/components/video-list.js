import React, { Component } from 'react';
import VideoItem from './video-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect} />
    );
  });

  return (
    <ul className='col-xs-12 col-lg-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList;