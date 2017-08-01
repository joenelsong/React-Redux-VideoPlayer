    /** Notes
     * Component or view is a snippet of code that produces HTML
     * nest these together to make complicated apps easily
     * JSX tester = https://babeljs.io/repl/
     * 
     * 
    **/
    
// react is diverging into 2 different libraries. 1. React Core   2. React DOM
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY ='AIzaSyAmTKbCVG_ES6RZV1mXiqFdwhaJjY8aHDU';

// Create a new component. This component should produce some HTML
const App = () => { // this is creating a CLASS component, not an instance Component
    return (
      <div>
        <SearchBar />
      </div>  //html stuff in javascript is JSX, JSX gets transpiled into javascript
    );
}


// Take this component's generated HTML and put it in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container')); // <App /> creates an instance of App class

