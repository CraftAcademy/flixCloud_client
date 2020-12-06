import React from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'

const MovieCard = ({movie}) => {
  return (
    <Grid.Column>
      <Card key={movie.id} data-cy={`movie-${movie.id}`}>
      <Image wrapped ui={false} src={movie.poster_path}/>
      <Card.Content>
        <Card.Header>
          {movie.title}
        </Card.Header>
        <Card.Meta>
          {movie.release_date}
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
  )
}

export default MovieCard
