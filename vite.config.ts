import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

// 🧩 Désactive complètement LightningCSS (utile pour Vite >=5, mais inoffensif sur Vite 4)
process.env.VITE_NO_LIGHTNINGCSS = "true";
process.env.TAILWIND_DISABLE_LIGHTNINGCSS = "true";

export default defineConfig({
  plugins: [
    react(),
    svelte({
      preprocess: sveltePreprocess({
        typescript: true,
        postcss: true,
      }),
      compilerOptions: { dev: true },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@mathalea": path.resolve(__dirname, "../mathalea/src"),
      "@exos": path.resolve(__dirname, "../mathalea/src/exercices"),
      apigeom: path.resolve(__dirname, "node_modules/apigeom"),
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
      "@mathalea/modules/2dGeneralites",
    ],
    esbuildOptions: {
      target: "esnext",
    },
  },

  server: {
    fs: {
      allow: [
        path.resolve(__dirname, ".."),
        path.resolve(__dirname, "../mathalea/src"),
        path.resolve(__dirname, "node_modules"),
      ],
    },
  },

  css: {
    // ⚙️ Assure explicitement que Vite utilise PostCSS au lieu de LightningCSS
    transformer: "postcss",
    postcss: "./postcss.config.cjs",
  },

  build: {
    target: "esnext",
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: false,
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
