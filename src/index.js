import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import AppContextProvider from "./Contexts/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
