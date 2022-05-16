import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { WithAuth } from "./components/auth";
import "./global.css";
import store from "./store";
import { Toaster } from "./components/toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <WithAuth>
          <App />
          <Toaster />
        </WithAuth>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
