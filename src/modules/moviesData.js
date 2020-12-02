import axios from "axios";

const getData = async () => {
  const response = await axios.get("/movies", {});
  return response.data.movies;
};

export { getData };
