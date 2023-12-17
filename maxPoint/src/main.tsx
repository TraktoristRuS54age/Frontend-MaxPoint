/* eslint-disable sort-imports */
import React from "react";
import ReactDOM from "react-dom/client";
import PresentationProvider from "./context/context.tsx";
import App from "./components/app/App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PresentationProvider>
      <App />
    </PresentationProvider>
  </React.StrictMode>,
);
