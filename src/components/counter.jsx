import React, { Component } from "react";

class Conuter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <spam className={this.getBadgeClasses()}>{this.formatCount()}</spam>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Conuter;
