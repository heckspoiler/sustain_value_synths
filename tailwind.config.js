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
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        newsTop: "8rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
      },
    },
  },
  variants: {},
  plugins: [],
};
