/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { getMovieIndex } from "../modules/moviesData";
import { Card, Grid } from "semantic-ui-react";
import MovieCard from "./MovieCard";

class DisplayMoviesData extends Component {
  state = {
    moviesData: [],
  };

  componentDidMount() {
    this.getMoviesData();
  }

  async getMoviesData() {
    let result = await getMovieIndex();
    this.setState({ moviesData: result });
  }

  render() {
    let movieIndexDisplay;
    if (Array.isArray(this.state.moviesData) && this.state.moviesData.length) {
      movieIndexDisplay = (
        <Card.Group data-cy="index" itemsPerRow={5}>
          {this.state.moviesData.map((movie, index) => {
            return <MovieCard movie={{ ...movie, id: index }} />;
          })}
        </Card.Group>
      );
    }
    return <div>{movieIndexDisplay}</div>;
  }
}

export default DisplayMoviesData;
