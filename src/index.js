import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LoginWrapper } from "./context/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(
  <React.StrictMode>
    <LoginWrapper>
      <App />
    </LoginWrapper>
  </React.StrictMode>
);
