    /** Notes
     * Component or view is a snippet of code that produces HTML
     * nest these together to make complicated apps easily
     * JSX tester = https://babeljs.io/repl/
     * 
     * 
    **/
    
// react is diverging into 2 different libraries. 1. React Core   2. React DOM
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY ='AIzaSyAmTKbCVG_ES6RZV1mXiqFdwhaJjY8aHDU';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';





// Create a new component. This component should produce some HTML
class App extends Component { // this is creating a CLASS component, not an instance Component
  constructor(props) {
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null
      
    };
    
    // Populate videos in constructor with a search
    YTSearch({key: API_KEY, term: 'bachata workshop'}, (videos) => {
      //this.setState({ videos }); // in ES6 this willl be equal to this.setState({ videos: videos })
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

    render() {
       return (
         <div>
           <SearchBar />
           <VideoDetail video={this.state.selectedVideo}/>
           <VideoList videos={this.state.videos} />
         </div>  //html stuff in javascript is JSX, JSX gets transpiled into javascript
      );
    }
}


// Take this component's generated HTML and put it in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container')); // <App /> creates an instance of App class

