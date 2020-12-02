/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { getMovieIndex } from "./modules/moviesData"
import { Card, Image, Grid, Container} from 'semantic-ui-react'

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
          {this.state.moviesData.map(movie => {
            return (
              <Grid.Column> 
                <Card key={movie.id} data-cy={`movie-${movie.id}`}>
                  <Image wrapped ui={false} src={movie.poster_path}/>
                  <Card.Content>
                    <Card.Header>
                      {movie.title}
                    </Card.Header>
                    <Card.Meta>
                      Year of Release
                    </Card.Meta>
                    <Card.Description>
                      An odd collection of movies
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>Genre</a>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
      );
    } else {
      return (
      <h3 data-cy="message">Sorry! This movie is not available!</h3>
      );
    }
    return <div>{movieIndexDisplay}</div>;
  }
}

export default DisplayMoviesData;
