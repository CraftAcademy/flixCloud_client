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
    }
    return (
      <div>
        {dataMovieIndex}
        <p> Hello </p>
      </div>
    );
  }
}

export default DisplayMoviesData;
