import React, { Component } from "react";
import DisplayMoviesData from "./DisplayMoviesData";
import { getData } from "./modules/moviesData";

class App extends Component {
  state = {
    moviesData: [],
  };

  componentDidMount() {
    this.getMoviesData();
  }

  async getMoviesData() {
    let result = await getData();
    this.setState({ moviesData: result });
  }

  render() {
    return (
      <div>
        <DisplayMoviesData moviesData={this.state.moviesData} />
      </div>
    );
  }
}

export default App;
