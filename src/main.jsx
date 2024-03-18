import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BookContextProvider from "./context/BookContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookContextProvider>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
    </BookContextProvider>
  </React.StrictMode>
);
