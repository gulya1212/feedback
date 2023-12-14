import "./App.css";
import Feedback from "./components/Feedback";
import Statics from "./components/Statics";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  addFeedback = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
      total: prevState["total"] + 1,
    }));
  };
  calPositive = () => {
    const { total, good } = this.state;
    return (good / total) * 100;
  };
  render() {
    return (
      <div>
        <Feedback addFeedback={this.addFeedback} />
        <Statics positive={this.calPositive()} {...this.state} />
      </div>
    );
  }
}
