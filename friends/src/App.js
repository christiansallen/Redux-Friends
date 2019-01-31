import React, { Component } from "react";
import "./App.css";

import CreateFriendForm from "./components/CreateFriendForm";
import Friends from "./components/Friends";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateFriendForm />
        <Friends />
      </div>
    );
  }
}

export default App;
