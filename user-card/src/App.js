import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserCard from './components/UserCard';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <UserCard />
      </div>
    );
  }
}

export default App;
