import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const WEATHER_API="91659606c139bb6a65199aba5caf6ea4";



import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideosList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY='AIzaSyCSod0d-Efc6ZdEArbgF6JkC9rOOZsuLBg';


class App extends Component {

  constructor(props){
    super(props);

    this.state={
      videos:[],
    };
    selectedVideo:null

this.videoSearch('React JS');

  }

videoSearch(term){
  YTSearch({key:API_KEY, term:term}, (videos) => {this.setState({videos:videos,
  selectedVideo:videos[0]
  })});

}

render(){

const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
  return(

  <div>

  <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>


  <VideoDetail video={this.state.selectedVideo}/>
  <VideosList
   onVideoSelect={selectedVideo => this.setState({selectedVideo})}
   videos={this.state.videos}/>



  </div>
 );

}


}

ReactDOM.render(
  <div>
     <App/>
  </div>,document.querySelector('.container'));



//ReactDOM.render(<GenericWeather city="Jerusalem" temp=17.61 status="sun"/>,document.querySelector('.container'));
