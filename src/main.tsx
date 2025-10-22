import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Flashcards from "./pages/Flashcards.tsx";
import "./index.css";
import "katex/dist/katex.min.css";
import "./vendor/mathlive/mathlive-static.css";
import "./vendor/mathlive/mathlive-fonts.css";

const navLinkClasses = (isActive: boolean) =>
  [
    "rounded-full px-3 py-2 text-sm font-semibold transition-colors",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
    isActive ? "bg-white text-slate-900 shadow" : "text-slate-100 hover:bg-white/20"
  ]
    .filter(Boolean)
    .join(" ");

function Navigation() {
  return (
    <header className="bg-slate-900 text-white shadow">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            [
              "text-lg font-semibold tracking-tight",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
              isActive ? "text-white" : "text-white/90 hover:text-white"
            ].join(" ")
          }
        >
          Kop Maths 974
        </NavLink>
        <div className="flex flex-wrap items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) => navLinkClasses(isActive)}
          >
            Catalogue
          </NavLink>
          <NavLink
            to="/flashcards"
            className={({ isActive }) => navLinkClasses(isActive)}
          >
            Flashcards
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Aller au contenu principal
      </a>
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
