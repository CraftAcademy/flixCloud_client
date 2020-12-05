import axios from "axios";

const searchByTitle = async () => {
  const response = await axios.get("/movies", {});
  return response.data.movies;
};

export { searchByTitle };