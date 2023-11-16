/* eslint-disable sort-imports */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.css";
import presentation from './types/example/maximum.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App presentation={presentation}/>
  </React.StrictMode>,
);
