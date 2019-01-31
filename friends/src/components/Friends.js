import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions/index";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        <h1>List of Friends</h1>
        <div className="all-friends-container">
          {this.props.friends.map(friend => {
            return (
              <div className="friend-container">
                <p className="friend-text">Name: {friend.name} </p>
                <p className="friend-text">Age: {friend.age}</p>
                <p className="friend-text">Email: {friend.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { fetchFriends }
)(Friends);
