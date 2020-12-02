/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { getData } from "./modules/moviesData"
import { Item } from 'semantic-ui-react'

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
        <div data-cy="index">
          {this.state.moviesData.map(item => {
            return (
              <Item key={item.id} data-cy={`movie-${item.id}`}>
                <Item.Image size='tiny' src={item.poster_path} />
                <Item.Content>
                  {item.title}
                </Item.Content>
              </Item>
            );
          })}
        </div>
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
