/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f5ff",
          100: "#e2e7ff",
          200: "#c7ceff",
          300: "#a0aaff",
          400: "#7480ff",
          500: "#4c4dff",
          600: "#3733f5",
          700: "#2d2ad8",
          800: "#2626ad",
          900: "#252a85"
        }
      },
      animation: {
        "spin-slow": "spin 8s linear infinite"
      }
    }
  },
  plugins: []
};
