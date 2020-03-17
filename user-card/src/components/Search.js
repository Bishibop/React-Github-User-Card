import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: ''
    };
  }

  handleChange = event => {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleSubmit = event => {
    this.props.searchGithub(this.state.searchQuery);
    this.setState({
      searchQuery: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.searchQuery} onChange={this.handleChange} />
        <button type='submit'>Search Github</button>
      </form>
    );
  }
}


export default Search;
