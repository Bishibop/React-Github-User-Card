import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

import Search from './Search';

const StyledUser = styled.div`
  width: 70%;
  margin: 50px auto 50px auto;
  border: 1px black solid;
  border-radius: 5px;
  padding-bottom: 50px;
`

const StyledProfile = styled.img`
  width: 50%;
  border: 2px black solid;
  border-radius: 5px;
`

const StyledFollower = styled.div`
  border: 5px blue solid;
  border-radius: 5px;
  width: 70%;
  margin: 30px auto 0px auto;
  padding-bottom: 60px;
`

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    this.getUserData('bishibop');
  }

  getUserData = login => {
    axios.get(`https://api.github.com/users/${login}`).then(response => {
      this.setState({
        user: response.data
      });
    });
    axios.get(`https://api.github.com/users/${login}/followers`)
      .then(response => {
        console.log('followers: ', response.data);
        this.setState({
          followers: response.data
        });
    });
  }

  searchGithub = (query) => {
    console.log('searching github: ', query);
    axios.get(`https://api.github.com/search/users?q=${query}`)
      .then(response => {
        console.log('search results: ', response.data);
        this.getUserData(response.data.items[0].login);
    });
  }

  render() {
    return (
      <>
        <StyledUser className="user-card">
          <Search searchGithub={this.searchGithub}/>
          <h2>{this.state.user.login}</h2>
          <StyledProfile src={this.state.user.avatar_url} alt="avatar" />
          <p>Name: {this.state.user.name}</p>
          <p>Bio: {this.state.user.bio}</p>
          <p>Location: {this.state.user.location}</p>
          <div><a href={this.state.user.html_url}>Profile Page</a></div>
          <div><a href={this.state.user.repos_url}>Repos</a></div>
          <h3>Followers:</h3>
          <div className='followers'>
            {this.state.followers.map(follower => (
              <StyledFollower key={follower.id} className='follower'>
                <h3>{follower.login}</h3>
                <StyledProfile src={follower.avatar_url} alt="avatar" />
                <div><a href={follower.repos_url}>Repos</a></div>
              </StyledFollower>
            ))}
          </div>
        </StyledUser>
      </>
    );
  }
}
export default UserCard;
