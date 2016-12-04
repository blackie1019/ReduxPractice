import React, {Component} from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={video.snippet.thumbnails.default.url}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h5>{video.snippet.title}</h5>
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            </div>
        </li>
    );

}

export default VideoListItem;