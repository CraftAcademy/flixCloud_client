import axios from "axios";

const getMovieIndex= async () => {
  const response = await axios.get("/movies", {});
  return response.data.movies;
};

export { getMovieIndex };
