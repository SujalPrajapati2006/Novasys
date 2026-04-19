/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          black: "#000000",
          dark: "#0A0A0A",
          card: "#0F0F0F",
          border: "#1A1A1A",
          muted: "#2A2A2A",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'DM Sans'", "sans-serif"],
      },
      boxShadow: {
        "cyan-glow": "0 0 20px rgba(6,182,212,0.3), 0 0 60px rgba(6,182,212,0.1)",
        "cyan-sm": "0 0 10px rgba(6,182,212,0.2)",
        "card-hover": "0 0 30px rgba(6,182,212,0.08), inset 0 1px 0 rgba(6,182,212,0.1)",
      },
    },
  },
  plugins: [],
};

