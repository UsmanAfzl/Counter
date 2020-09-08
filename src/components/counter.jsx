import React, { Component } from "react";

class Conuter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    let { value } = this.state;
    value = value + 1;
    this.setState({ value });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Counter #{this.props.id}</h1>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Conuter;
