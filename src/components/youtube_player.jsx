import _ from 'lodash';
import React, {Component} from 'react';
import YTSeach from 'youtube-api-search'
import SeachBar from './search_bar';
import VideoDetail from './video_detail';
import VideoList from './video_list';

class YoutubePlayer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            key: props.apiKey,
            term: props.term,
            videos: [],
            targetedVideo: null
        };

        this.seachVideo(this.state.term);

    }

    seachVideo(term) {
        YTSeach({
            key: this.state.key,
            term: term
        }, (videos) => {
            this.setState({videos: videos, targetedVideo: videos[0]});
        });
    }

    render() {
        const videoSeach = _.debounce((term) => {
            this.seachVideo(term)
        }, 500);

        return (
            <div>
                <div className="row">
                    <SeachBar onSearchChange={videoSeach}/>
                </div>
                <div className="row">
                    <VideoDetail video={this.state.targetedVideo}/>
                    <VideoList
                        onVideoSelect={targetedVideo => this.setState({targetedVideo})}
                        videos={this.state.videos}/>
                </div>
            </div>
        );
    }
};

export default YoutubePlayer;
