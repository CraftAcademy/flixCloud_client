import React, { Component } from "react";
import DisplayMoviesData from "./components/DisplayMoviesData";
import { Container } from "semantic-ui-react";
import SearchForMovies from "./components/SearchForMovies";

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <SearchForMovies />
          <DisplayMoviesData />
        </Container>
      </>
    );
  }
}

export default App;
