import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: __dirname,
  plugins: [react()],

  resolve: {
    alias: {
      "@mathalea": path.resolve(__dirname, "../mathalea/src"),
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
      "roughjs",
    ],
  },

  server: {
    fs: {
      allow: [
        path.resolve(__dirname, ".."), // autorise l’accès au parent
        path.resolve(__dirname, "../mathalea"), // autorise l’accès à mathalea
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
