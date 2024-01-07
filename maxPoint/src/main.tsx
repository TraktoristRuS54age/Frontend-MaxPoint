/* eslint-disable sort-imports */
import React from "react";
import ReactDOM from "react-dom/client";
import PresentationProvider from "./context/context.tsx";
import App from "./components/app/App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store/Store.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PresentationProvider>
        <App />
      </PresentationProvider>
    </Provider>
  </React.StrictMode>,
);
