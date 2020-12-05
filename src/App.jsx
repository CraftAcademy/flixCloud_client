import React, { Component } from "react";
import DisplayMoviesData from "./components/DisplayMoviesData";
import { Container } from "semantic-ui-react";
import SearchForMovies from "./components/SearchForMovies";

class App extends Component {
  // state = {
  //   authenticated: false,
  // };

  // toggleAuthenticatedState() {
  //   this.setState({ authenticated: !this.state.authenticated });
  // }

  render() {
    return (
      <>
        <Container>
          <SearchForMovies
            // toggleAuthenticatedState={() => this.toggleAuthenticatedState()}
          />
          <DisplayMoviesData />
        </Container>
      </>
    );
  }
}

export default App;
