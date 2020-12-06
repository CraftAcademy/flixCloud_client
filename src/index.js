import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { StripeProvider } from "react-stripe-elements";

let apiUrl;
apiUrl = "http://localhost:3000/api";

axios.defaults.baseURL = apiUrl;

ReactDOM.render(
  <StripeProvider apiKey="pk_test_51HuxhoEDdj3L9cb7mRwXVf3mjnVY7dk7NL7WmIZ31HGjkKHk9RSQASdCWIXiObHTiyfYkNhxKFsvLFkvLKyxM6Wz004BVP7pWj">
    <App />
  </StripeProvider>,

  document.getElementById("root")
);

reportWebVitals();
