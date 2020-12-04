import React, { Component } from "react";
import DisplayMoviesData from "./components/DisplayMoviesData";
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
          <DisplayMoviesData/>
      </Container>
    );
  }
}

export default App;
