import React from 'react';
import ReactDOM from 'react-dom';

import YoutubePlayer from './components/youtube_player'

const YOUTUBE_API_KEY = "AIzaSyAlD6ekilwiiVW8TmfJlz3efZcFz8zDfvg";
const DEFAULT_TERN ="Kobe mix";

ReactDOM.render(
    <YoutubePlayer apiKey={YOUTUBE_API_KEY} tern={DEFAULT_TERN} />, document.querySelector('#container'));
