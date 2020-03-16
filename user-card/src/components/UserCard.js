import React from 'react';
import styled from 'styled-components';

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

  render() {
    return (
      <StyledUser className="user-card">
        <h2>{this.props.user.login}</h2>
        <StyledProfile src={this.props.user.avatar_url} alt="avatar" />
        <p>Name: {this.props.user.name}</p>
        <p>Bio: {this.props.user.bio}</p>
        <p>Location: {this.props.user.location}</p>
        <div><a href={this.props.user.html_url}>Profile Page</a></div>
        <div><a href={this.props.user.repos_url}>Repos</a></div>
        <h3>Followers:</h3>
        <div className='followers'>
          {this.props.followers.map(follower => (
            <StyledFollower key={follower.id} className='follower'>
              <h3>{follower.login}</h3>
              <StyledProfile src={follower.avatar_url} alt="avatar" />
              <div><a href={follower.repos_url}>Repos</a></div>
            </StyledFollower>
          ))}
        </div>
      </StyledUser>

    );
  }
}
export default UserCard;
