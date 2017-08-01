import React, { Component } from 'react';
// const Component = React.Component; // done with ES6 sytanx above { Component }

class SearchBar extends Component {
  constructor(props) {
    super(props); //calls parent method constructor
    
    this.state = { term: '?' };
  }
  render() {
    return (
      <div>
        <p>Searching for: {this.state.term}</p>
        <input onChange={event => this.setState({ term: event.target.value})} />
      </div>
    );
  }
}
  

export default SearchBar; // default export