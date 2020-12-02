/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { getData } from "./modules/moviesData"
import { Card, Image, Grid, Container} from 'semantic-ui-react'

class DisplayMoviesData extends Component {
  state = {
    moviesData: [],
  };

  componentDidMount() {
    this.getMoviesData();
  }

  async getMoviesData() {
    let result = await getData();
    this.setState({ moviesData: result });
  }

  render() {
    let dataMovieIndex;
    if (Array.isArray(this.state.moviesData) && this.state.moviesData.length) {
      dataMovieIndex = (
        <Grid columns={2} data-cy="index">
          {this.state.moviesData.map(item => {
            return (
              <Grid.Column> 
                <Card key={item.id} data-cy={`movie-${item.id}`}>
                  <Image wrapped ui={false} src={item.poster_path}/>
                  <Card.Content>
                    <Card.Header>
                      {item.title}
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
    return <div>{dataMovieIndex}</div>;
  }
}

export default DisplayMoviesData;
