import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "td-bright-blue": "hsl(220, 98%, 61%)",
        // Light Theme
        "tdl-very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "tdl-light-grayish-blue": "hsl(233, 11%, 84%)",
        "tdl-dark-grayish-blue": "hsl(236, 9%, 61%)",
        "tdl-very-dark-grayish-blue": "hsl(235, 19%, 35%)",
        // Dark Theme
        "tdd-very-dark-blue": "hsl(235, 21%, 11%)",
        "tdd-very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "tdd-light-grayish-blue-dark-theme": "hsl(234, 39%, 85%)",
        "tdd-light-grayish-blue-hover": "hsl(236, 33%, 92%)", //  (hover)
        "tdd-dark-grayish-blue-dark-theme": "hsl(234, 11%, 52%)",
        "tdd-very-dark-grayish-blue": "hsl(233, 14%, 35%)",
        "tdd-very-dark-grayish-blue-dark-theme": "hsl(237, 14%, 26%)",
      },
      backgroundImage: {
        "check-background":
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        // "sample-bg": "/tsugini" // basepath of github pages
      },
      fontSize: {
        base: "18px",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      fontWeights: {
        normal: "400",
        bold: "700",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
