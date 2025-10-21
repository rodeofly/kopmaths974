import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  resolve: {
  alias: {
    "@mathalea": path.resolve(__dirname, "../src"),
    "apigeom/src": path.resolve(__dirname, "node_modules/apigeom/src"),
    "apigeom": path.resolve(__dirname, "node_modules/apigeom/src/index.ts"),
  },
  extensions: [".ts", ".js"],
},
  optimizeDeps: {
    include: [
      "decimal.js",
      "mathjs",
      "crypto-js",
      "seedrandom",
      "katex",
      "earcut",
      "roughjs"
      // ❌ pas "apigeom" ici, car c’est un alias vers des fichiers locaux
    ],
  },
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, ".."), // autoriser le parent (mathalea)
        path.resolve(__dirname, "node_modules"),
      ],
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
