import React, { Component } from "react";
import DisplayMoviesData from "./components/DisplayMoviesData";
import { Container } from 'semantic-ui-react'
import Header from './components/Header'
import SearchForMovies from "./components/SearchForMovies";


class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Container>
          <SearchForMovies />
          <DisplayMoviesData/>
        </Container>
      </>
    );
  }
}

export default App;
