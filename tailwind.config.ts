import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#b6d4ff",
          300: "#84b6ff",
          400: "#5393ff",
          500: "#2b73ff",
          600: "#1557e6",
          700: "#0f43b4",
          800: "#0c3388",
          900: "#0a2a6d"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)"
      }
    }
  },
  plugins: []
};

export default config;
