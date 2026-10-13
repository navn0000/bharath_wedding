import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF9F4",
          50: "#FFFDFC",
          100: "#F8F4EC",
          200: "#F0E9DC",
          300: "#E6DDCD",
        },

        // Sage Green palette
        maroon: {
          950: "#26352F",
          900: "#35483F",
          800: "#465C51",
          700: "#587063",
          600: "#6F8678",
          500: "#8A9F91",
          400: "#A9B8AD",
          300: "#C5D0C8",
          200: "#DDE4DF",
          100: "#EDF1EE",
          50: "#F5F7F5",
        },

        // Dusty Rose / Blush palette
        rose: {
          950: "#5A343B",
          900: "#70434B",
          800: "#86535B",
          700: "#9D636B",
          600: "#B4777E",
          500: "#C68C92",
          400: "#D6A5A9",
          300: "#E3BEC1",
          200: "#EDD5D6",
          100: "#F5E7E7",
          50: "#FAF3F3",
        },

        // Soft champagne gold
        gold: {
          200: "#F1E3BD",
          300: "#E5D09A",
          400: "#D7BC78",
          500: "#C4A45F",
          600: "#A8894B",
          700: "#8B713D",
        },

        // Dark neutral text — no maroon text
        ink: {
          DEFAULT: "#303A35",
          500: "#66706A",
          600: "#555F59",
          700: "#454F49",
          800: "#37413B",
          900: "#29322E",
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