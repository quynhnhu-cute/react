import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    loggedIn: false,
  };

  login = () => {
    this.setState(
      {
        loggedIn: true,
      },
      () => {
        console.log(this.state.loggedIn);
      }
    );
  };

  render() {
    console.log(this.state.loggedIn);
    return (
      <div className="text-center">
        {this.state.loggedIn ? (
          <h1 className="heading">Welcome to this page</h1>
        ) : (
          <button className="btn btn-success" onClick={this.login}>
            Login
          </button>
        )}
      </div>
    );
  }
}
