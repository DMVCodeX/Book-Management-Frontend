import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import client from "./Apollo.jsx";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
