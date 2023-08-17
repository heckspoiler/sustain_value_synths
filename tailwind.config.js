// tailwind.config.js
module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "blue-main": "#035DFF",
        "yellow-main": "#FFF460",
        "pink-main": "#FFB4CE",
      },
    },
  },
  variants: {},
  plugins: [],
};
