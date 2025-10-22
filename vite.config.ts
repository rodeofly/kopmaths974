import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

const CSS_DEBUG_PREFIX = "[KopMaths][DevServer][CSS]";

function createCssDebugPlugin() {
  return {
    name: "kopmaths-css-debug",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url?.includes(".css")) {
          console.info(CSS_DEBUG_PREFIX, req.method ?? "GET", req.url);
        }
        next();
      });
    },
    handleHotUpdate(context) {
      if (context.file.endsWith(".css")) {
        const relativePath = path.relative(process.cwd(), context.file);
        console.info(CSS_DEBUG_PREFIX, "HMR", relativePath);
      }
    },
    transform(code, id) {
      if (id.endsWith(".css")) {
        const filePath = path.relative(process.cwd(), id.split("?")[0]);
        console.info(CSS_DEBUG_PREFIX, "transform", filePath, {
          length: code.length,
        });
      }
      return null;
    },
    generateBundle(_, bundle) {
      const cssAssets = Object.entries(bundle)
        .filter(([, output]) =>
          output.type === "asset" && output.fileName.endsWith(".css")
        )
        .map(([fileName]) => fileName);

      if (cssAssets.length > 0) {
        console.info(CSS_DEBUG_PREFIX, "bundle", cssAssets);
      }
    },
  } satisfies import("vite").Plugin;
}

// 🧩 Désactive complètement LightningCSS (utile pour Vite >=5, mais inoffensif sur Vite 4)
process.env.VITE_NO_LIGHTNINGCSS = "true";
process.env.TAILWIND_DISABLE_LIGHTNINGCSS = "true";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    createCssDebugPlugin(),
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
