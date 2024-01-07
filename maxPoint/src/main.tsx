import "./index.css";
import App from "./components/app/App.tsx";
import PresentationProvider from "./context/context.tsx";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
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
