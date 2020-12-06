import React from "react";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";

const MovieCard = ({ movie }) => {
  return (
    <Card key={movie.id} data-cy={`movie-${movie.id}`}>
      <Image
        size="small"
        wrapped
        ui={false}
        src={`${axios.defaults.baseURL}${movie.poster_path}`}
      />
      <Card.Content>
        <Card.Description>{movie.title}</Card.Description>
        <Card.Meta>{movie.release_date}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;
