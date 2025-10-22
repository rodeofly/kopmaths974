import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svelte({
      preprocess: sveltePreprocess({ typescript: true, postcss: true }),
      compilerOptions: { dev: true },
    }),
  ],
  resolve: {
    alias: {
    "@": path.resolve(__dirname, "./src"),
    "@mathalea": path.resolve(__dirname, "../mathalea/src"),
    "@exos": path.resolve(__dirname, "../mathalea/src/exercices"),
    "apigeom": path.resolve(__dirname, "node_modules/apigeom"),
  },
    extensions: [".ts", ".js", ".svelte"],
  },

  optimizeDeps: {
    include: [
      "svelte",
      "@sveltejs/vite-plugin-svelte",    
      "decimal.js",
      "mathjs",
      "crypto-js",
      "seedrandom",
      "katex",
      "earcut",
      "roughjs",
      "@mathalea/lib/2d/elements/ObjetMathalea2D"
    ],
    esbuildOptions: {
      target: "esnext", // ✅ idem pour la phase dev
    }
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
    target: "esnext",
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: false, // ✅ empêche le calcul gzip (source du crash)
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      external: [
        "decimal.js",
        "mathjs",
        "crypto-js",
        "seedrandom",
        "katex",
        "earcut",
        "roughjs",
      ],
    },
  },
});
