import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
import MovieCard from "./MovieCard";
import RegisterModal from "./RegisterModal";
import SubscribeModal from "./SubscribeModal";
import { Elements } from "react-stripe-elements";

class SearchForMovies extends Component {
  state = {
    searchValue: "",
    movieSearchResults: [],
    subscriptionMessage: "",
  };

  onSubscribe(message) {
    this.setState({ subscriptionMessage: message })
  }

  setSearchInputValue(e) {
    this.setState({ searchValue: e.target.value });
  }

  async searchByTitle() {
    // const query = this.state.searchValue
    let response = await axios.get("/movies/search");
    this.setState({ movieSearchResults: response.data.movies });
    this.props.onSearch();
  }

  render() {
    let displaySearchResults;
    displaySearchResults = this.state.movieSearchResults.map((movie) => {
      return <MovieCard movie={movie} />;
    });
    if (this.props.authenticated === true) {
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
          <Elements>
            <SubscribeModal onSubscribe={(message) => this.onSubscribe(message)} />
          </Elements>
          <p data-cy="payment-message">{this.state.subscriptionMessage}</p>
          <div data-cy="search-results">
            <ul>{displaySearchResults}</ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <RegisterModal onAuthenticate={this.props.onAuthenticate} />
        </>
      );
    }
  }
}

export default SearchForMovies;
