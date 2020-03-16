import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/bishibop').then(response => {
      this.setState({
        user: response.data
      });
    });
    axios.get('https://api.github.com/users/bishibop/followers')
      .then(response => {
        console.log('followers: ', response.data);
        this.setState({
          followers: response.data
        });
    });

  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
