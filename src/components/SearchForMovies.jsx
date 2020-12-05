import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class SearchForMovies extends Component {
  state = {
    searchValue: "",
    movieSearchResults: [],
  };

  setSearchInputValue(e) {
    this.setState({ searchValue: e.target.value });
  }

  async searchByTitle() {
    // const query = this.state.searchValue
    let response = await axios.get("/movies");
    this.setState({ movieSearchResults: response.data.movies });
  }

  render() {
    let displaySearchResults = this.state.movieSearchResults.map((movie) => {
      return <li movie={movie} key={movie.id}>{movie.title}</li>;
    });
    return (
      <>
        <Input
          type="text"
          data-cy="search-input"
          placeholder="Search By Title..."
        />
        <Button onClick={() => this.searchByTitle()} data-cy="search-button">
          Search
        </Button>
        <div data-cy="search-results">
          <ul>{displaySearchResults}</ul>
        </div>
      </>
    );
  }
}

export default SearchForMovies;
