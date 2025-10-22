// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Vos fichiers locaux
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    
    // 💡 REVIENT AU CHEMIN INTERNE (où les fichiers doivent être copiés)
    "./src/mathalea/**/*.{js,ts,jsx,tsx,svelte}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};