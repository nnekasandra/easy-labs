import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import LoginButton from "./components/LoginButton";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="nneka.us.auth0.com"
    clientId="ZbUJ7HTgJgf4iBjGdRUjzY4C48SJoukn"
    redirectUri="http://127.0.0.1:3000/practicals"
  >
    <App />
  </Auth0Provider>
);
reportWebVitals()