import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "katex/dist/katex.min.css";
import "./vendor/mathlive/mathlive-static.css";
import "./vendor/mathlive/mathlive-fonts.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);