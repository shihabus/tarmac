module.exports = {
  purge: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "theme-green": "#00b140",
        "theme-blue-base": "#172a45",
        "theme-blue-deep": "#0a192f",
        "theme-gray-light": "#ccd6f6",
        "theme-gray-deep": "#8892b0",
        "theme-aquamarine": "#44dbb2",
        "lg-shadow": "#9AF0D1",
        "lg-tail": "#19AE78",
        "lg-head": "#2BF4AC",
        "dark-shadow": "#E62F2F",
        "dark-tail": "#F09A9A",
        "dark-head": "#FF0000",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
  darkMode: "class",
};
