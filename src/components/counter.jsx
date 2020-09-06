import React, { Component } from "react";

class Conuter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <spam>{this.formatCount()}</spam>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Conuter;
