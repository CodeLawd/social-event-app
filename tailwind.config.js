/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#240D57",
          secondary: "#CCB6FF",
          purple: "#8456EC",
          pink: "#E87BF8",
          purpleLight: "#501FC1",
          secLight: "#F6F2FF",
          secPurple: "#EDE5FF",
        },
      },
    ],
  },
};
