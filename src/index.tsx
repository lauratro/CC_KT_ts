import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: 'https://staging.api.wissenwirkt.com/api/graphql',
  cache: new InMemoryCache(),
 headers: {

    "X-Auth-Token":localStorage.getItem('token') ||"6718a44c-8813-460f-a8e1-70a0942582a6",
   "X-Auth-Account-Id":localStorage.getItem("userId") || "VXNlcjpVc2VyOmJlZWY5NWEzLTYxNjgtNDIzNy04NDc0LTE0YWIyZjk1ZTI5Nw=="  
} ,
connectToDevTools: true
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
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
