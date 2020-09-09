import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counter.value++;
    counters[index] = { ...counter };
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
