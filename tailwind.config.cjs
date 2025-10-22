// tailwind.config.cjs

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    // Vos fichiers locaux
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    
    // 💡 Chemin local vers mathalea (sources copiées)
    "./src/mathalea/**/*.{js,ts,jsx,tsx,svelte}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};