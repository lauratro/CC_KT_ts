import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://staging.api.wissenwirkt.com/api/graphql",
  cache: new InMemoryCache(),
  headers: {
    "X-Auth-Token": localStorage.getItem("token")||"17af7d7a-a747-472a-b9bb-1a8f4bd29508",
    "X-Auth-Account-Id": localStorage.getItem("userId")||"QWNjb3VudDppbmZlY3RvcGhhcm0="
  },
  connectToDevTools: true,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
