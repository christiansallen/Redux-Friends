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
        {console.log(this.props.friends)}
        {this.props.friends.map(friend => {
          return <li>{friend.name}</li>;
        })}
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
