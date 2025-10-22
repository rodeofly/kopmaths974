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
      // 💡 REVIENT AUX ALIAS INTERNES
      "@mathalea": path.resolve(__dirname, "./src/mathalea"),
      "@exos": path.resolve(__dirname, "./src/mathalea/exercices"),
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
    exclude: ["lightningcss", "vitest"],
    esbuildOptions: {
      target: "esnext",
    },
  },
  assetsInclude: ['**/*.test.ts'],
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, "."), // Ajoute la racine du projet
        path.resolve(__dirname, "node_modules"),
      ]
    },
  },

  css: {
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
