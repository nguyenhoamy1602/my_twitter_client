import React, { Component } from 'react';
import {connect} from 'react-redux';
import { UserCard } from './UserCard';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    follow: false
  }
  }
  followUser(user) {
    console.log(user);
    this.setState({
      follow: !this.state.follow
    })
  }


  renderUsers() {
    if(this.props.recentTweets) {
      return this.props.recentTweets.map(r => {
        console.log(r);
        return (
          <UserCard user = {r}/>
        );
      });
    }
  }


  render() {
    return (
      <div>
        <h2>Users:</h2>
        {this.renderUsers()}
      </div>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    recentTweets: state.recentTweets
  }
}

export default connect(mapStateToProps, null)(UserList);
