import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class SearchForMovies extends Component {
  state = {
    searchValue: '',
    movieSearchResults: []
  }

  async searchByTitle() {
    const query = this.state.searchValue
    let response = await axios.get('https://localhost:3000/api/movies')
    this.setState({ movieSearchResults: response.data.movies })
  }

  render() {
    return (
      <>
      <Input 
        type='text'
        data-cy='search-input'
        placeholder='Search By Title...'
      
      />
        <Button 
          onClick={()=> this.searchByTitle()}
          data-cy='search-button'>
          Search
        </Button>
      </>
    )
  }
}

export default SearchForMovies