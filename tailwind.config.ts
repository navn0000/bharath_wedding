import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Toasted Cream
        cream: {
          DEFAULT: "#F7F1E6",
          50: "#FFFCF7",
          100: "#F9F3E8",
          200: "#EFE5D3",
          300: "#E4D6C0",
          400: "#D8C6AB",
          500: "#CBB596",
        },

        // Espresso
        // Keeps existing maroon-* classes working
        maroon: {
          950: "#211813",
          900: "#2E211A",
          800: "#3D2C22",
          700: "#4D382B",
          600: "#604638",
          500: "#745747",
          400: "#8B6C5A",
          300: "#A78B79",
          200: "#C4B0A1",
          100: "#E2D7CE",
          50: "#F2EDE8",
        },

        // Winter Sky
        sky: {
          950: "#263E4B",
          900: "#345465",
          800: "#456B7E",
          700: "#5E8294",
          600: "#7898A7",
          500: "#91AEBB",
          400: "#AFC4CD",
          300: "#C9D9DF",
          200: "#DEE9ED",
          100: "#EDF3F5",
          50: "#F6F9FA",
        },

        // Soft champagne / antique gold
        gold: {
          200: "#F1E4C8",
          300: "#E4D2AA",
          400: "#D4B980",
          500: "#BE9B61",
          600: "#9F7E4B",
          700: "#82653B",
        },

        // Espresso-based text
        ink: {
          DEFAULT: "#30251F",
          500: "#71645C",
          600: "#5D5048",
          700: "#4A3E37",
          800: "#382D27",
          900: "#261D18",
        },
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
          "0%, 100%": {
            transform: "scale(1, 1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(0.94, 1.06)",
            opacity: "0.88",
          },
        },

        cue: {
          "0%, 100%": {
            transform: "translateY(0)",
            opacity: "0.55",
          },
          "50%": {
            transform: "translateY(6px)",
            opacity: "1",
          },
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