import React, { Component } from "react";
import DisplayMoviesData from "./components/DisplayMoviesData";
import { Container } from 'semantic-ui-react'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Container>
          <DisplayMoviesData/>
          <button data-cy="search-button">Search</button>
        </Container>
      </>
    );
  }
}

export default App;
