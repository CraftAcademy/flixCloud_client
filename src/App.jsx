import React from "react";
import DisplayMoviesData from "./components/DisplayMoviesData";
import { Container } from "semantic-ui-react";
import SearchForMovies from "./components/SearchForMovies";
import axios from "axios";

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [searched, setSearched] = React.useState(false);

  React.useEffect(() => {
    const credentials = localStorage.getItem("credentials");
    if (credentials) {
      setAuthenticated(true);
    }
  }, []);

  const onAuthenticateHandler = async (event) => {
    event.preventDefault();
    let params = {
      name: event.target.nickname.value,
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
    };

    let response = await axios.post("/auth", params);

    const userData = {
      uid: response.headers.uid,
      client: response.headers.client,
      "token-type": response.headers["token-type"],
      expiry: response.headers.expiry,
      "access-token": response.headers["access-token"],
    };
    localStorage.setItem("credentials", JSON.stringify(userData));

    setAuthenticated(true);

    return true;
  };

  const onSearchHandler = () => {
    setSearched(true);
  };

  return (
    <Container style={{ marginTop: "1em" }}>
      <SearchForMovies
        authenticated={authenticated}
        onAuthenticate={onAuthenticateHandler}
        onSearch={onSearchHandler}
      />
      {searched ? <></> : <DisplayMoviesData />}
    </Container>
  );
}

//

export default App;
