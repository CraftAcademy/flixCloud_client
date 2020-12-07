import React, { Component } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  Grid,
  Header,
  Menu,
  Segment,
} from "semantic-ui-react";
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
    this.setState({ subscriptionMessage: message });
  }

  setSearchInputValue(e) {
    this.setState({ searchValue: e.target.value });
  }

  async searchByTitle(event) {
    event.preventDefault();
    let headers = JSON.parse(localStorage.getItem("credentials"));
    let response = await axios.get(
      `/movies/search?query=${event.target.search.value}`,
      { headers }
    );
    this.setState({ movieSearchResults: response.data.movies });
    this.props.onSearch();
  }

  render() {
    let displaySearchResults;
    displaySearchResults = this.state.movieSearchResults.map((movie, index) => {
      return <MovieCard movie={{ ...movie, id: index }} />;
    });
    if (this.props.authenticated === true) {
      return (
        <>
          <Form onSubmit={(event) => this.searchByTitle(event)}>
            <Form.Group>
              <Form.Field>
                <input
                  name="search"
                  type="text"
                  data-cy="search-input"
                  placeholder="Search By Title..."
                />
              </Form.Field>
              <Button data-cy="search-button">Search</Button>
            </Form.Group>
          </Form>
          <Elements>
            <SubscribeModal
              onSubscribe={(message) => this.onSubscribe(message)}
            />
          </Elements>
          <p data-cy="payment-message">{this.state.subscriptionMessage}</p>
          <div data-cy="search-results">
            <Card.Group itemsPerRow={5}>{displaySearchResults}</Card.Group>
          </div>
        </>
      );
    } else {
      return (
        <Grid padded columns={16}>
          <Grid.Row>
            <Grid.Column width={14} textAlign="center" verticalAlign="middle">
              <Header fluid textAlign="center">
                Welcome to Flixcloud
              </Header>
            </Grid.Column>
            <Grid.Column width={2} textAlign="center">
              <RegisterModal onAuthenticate={this.props.onAuthenticate} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  }
}

export default SearchForMovies;
