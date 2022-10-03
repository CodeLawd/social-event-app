/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        purple: "#8456EC",
        DEFAULT: "#240D57",
        pink: "#E87BF8",
        purpleLight: "#501FC1",
      },
      secondary: {
        purple: "#EDE5FF",
        DEFAULT: "#CCB6FF",
        light: "#F6F2FF",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
