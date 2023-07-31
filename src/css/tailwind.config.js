/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          300: "#8FE9D0",
        },
        primary: {
          300: "#FFCC21",
          400: "#FF963C",
          500: "#EA6C00",
        },
        dark: {
          600: "#2E2E2E",
          500: "#414141",
        },
        gray: {
          400: "#777777",
        },
        light: "#FFFFFF",
        "primary-gradient": "linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans JP", "sans-serif"],
      },
      height: {
        header: "64px",
        main: "calc(100vh - 64px - 128px)",
        footer: "128px",
      },
      width: {
        logo: "144px",
        main: "960px",
      },
      maxWidth: {
        main: "960px",
      },
      minHeight: {
        main: "calc(100vh - 64px - 128px)",
      },
      backgroundSize: {
        100: "100%",
      },
      textShadow: {
        DEFAULT: "0 0 6px var(--tw-shadow-color)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to bottom left, #FFCC21, #FF963C), url('./src/assets/images/d01.png')",
        "btn-gradient": "linear-gradient(33deg, #FFCC21 0%, #FF963C 100%)",
        "btn-disabled": "linear-gradient(33deg, #777777 0%, #2E2E2E 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({ textShadow: value }),
        },
        { values: theme("textShadow") }
      );
    })
  ],
};
