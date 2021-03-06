module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1080px",
      },
    },
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        brown: "#bfa065",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
