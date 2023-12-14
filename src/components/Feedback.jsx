import React, { Component } from "react";

export default class Feedback extends Component {
  handleClick(event) {
    const name = event.target.value;
    this.props.addFeedback(name);
  }
  render() {
    return (
      <div className="feedback">
        <h1>Please leave feedback</h1>
        <div className="wrapper">
          <button
            className="good btns"
            value={"good"}
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            good
          </button>
          <button
            className="neutral btns"
            value={"neutral"}
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            neutral
          </button>
          <button
            className="bad btns"
            value={"bad"}
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            bad
          </button>
        </div>
      </div>
    );
  }
}
