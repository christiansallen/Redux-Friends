import React, { Component } from "react";

import { connect } from "react-redux";

import { addFriend } from "../actions/addFriendForm";

class CreateFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.addFriend(newFriend);
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <div>
        <form className="add-friend-form" onSubmit={this.onSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button className="add-friend-button" onClick={this.onSubmit}>
            Add New Friend
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {};

export default connect(
  mapStateToProps,
  { addFriend }
)(CreateFriendForm);
