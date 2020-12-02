/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class DisplayMoviesData extends Component {
  render() {
    let dataMovieIndex;
    const data = this.props.moviesData;
    if (Array.isArray(data) && data) {
      dataMovieIndex = (
        <div data-cy="index">
          {data.map((item) => {
            return (
              <div key={item.id} data-cy={`movie-${item.id}`}>
                {item.title}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
      <h3 data-cy="message">Sorry! This movie is not available!{" "}</h3>
      );
    }
    return <div>{dataMovieIndex}</div>;
  }
}

export default DisplayMoviesData;
