import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css"; // This imports primeicons css from primeicons module
import "../node_modules/primeflex/primeflex.css"; // This imports primeflex css from primeflex module

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>,
);
