import React, { Component } from 'react';
// const Component = React.Component; // done with ES6 sytanx above { Component }

class SearchBar extends Component {
  constructor(props) {
    super(props); //calls parent method constructor
    
    this.state = { term: '?' };
  }
  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)}  placeholder="Search"/>
      </div>
    );
  }
  
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
  

export default SearchBar; // default export