import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import API_KEY from '../config';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleVideoSelect = this.handleVideoSelect.bind(this);
    this.videoSearch = this.videoSearch.bind(this);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch();
  }
  videoSearch(query = '') {
    YTSearch({
      key: API_KEY,
      term: query
    }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  handleVideoSelect(selectedVideo) {
    this.setState({
      selectedVideo 
    });
  }
  render() {
    const handleInputChange = _.debounce((query) => { this.videoSearch(query) }, 300);

    return (
      <div>
        <SearchBar onSearch={handleInputChange} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.handleVideoSelect} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container-fluid'));