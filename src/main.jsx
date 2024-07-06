<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
=======
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
>>>>>>> adb1332e61d3eb4a4cdbda49b1ec6ab6d213952e
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<<<<<<< HEAD
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
=======
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
>>>>>>> adb1332e61d3eb4a4cdbda49b1ec6ab6d213952e
);
