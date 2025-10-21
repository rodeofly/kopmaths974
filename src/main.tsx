import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Flashcards from "./pages/Flashcards.tsx";
import "./index.css";
import "katex/dist/katex.min.css";
import "./vendor/mathlive/mathlive-static.css";
import "./vendor/mathlive/mathlive-fonts.css";

const navLinkClasses = (
  isActive: boolean
) =>
  [
    "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
    isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-200"
  ]
    .filter(Boolean)
    .join(" ");

function Navigation() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-4xl items-center gap-4 p-4">
        <NavLink to="/" end className={({ isActive }) => navLinkClasses(isActive)}>
          Accueil
        </NavLink>
        <NavLink to="/flashcards" className={({ isActive }) => navLinkClasses(isActive)}>
          Flashcards
        </NavLink>
      </nav>
    </header>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/flashcards" element={<Flashcards />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
