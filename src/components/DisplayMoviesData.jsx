/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { getMovieIndex } from "../modules/moviesData";
import { Grid } from "semantic-ui-react";
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
        <Grid columns={2} data-cy="index">
          {this.state.moviesData.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </Grid>
      );
    } else {
      return <h3 data-cy="message">Sorry! This movie is not available!</h3>;
    }
    return <div>{movieIndexDisplay}</div>;
  }
}

export default DisplayMoviesData;
