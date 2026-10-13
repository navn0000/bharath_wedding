import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#FBF6EA", 50: "#FFFCF5", 100: "#F6EDD8", 200: "#EEDFBD" },
        maroon: {
          950: "#2E0A12",
          900: "#5C0F1F",
          800: "#721426",
          700: "#8A1A30",
          600: "#A32239",
        },
        gold: {
          200: "#F0DDA8",
          300: "#E4C677",
          400: "#D4AC55",
          500: "#BC9440",
          600: "#9C7630",
          700: "#7E5E22",
        },
        ink: "#3B1B20",
      },
      fontFamily: {
        display: [
          "'Cormorant Garamond'",
          "'Noto Serif Tamil'",
          "Georgia",
          "serif",
        ],
        tamil: [
          "'Noto Serif Tamil'",
          "'Cormorant Garamond'",
          "Georgia",
          "serif",
        ],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        flicker: {
          "0%, 100%": { transform: "scale(1, 1)", opacity: "1" },
          "50%": { transform: "scale(0.94, 1.06)", opacity: "0.88" },
        },
        cue: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.55" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        flicker: "flicker 2.6s ease-in-out infinite",
        cue: "cue 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
