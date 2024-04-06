export default {
  content: ["./build/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ABAEEE",
        "primary-bg": "#ABAEEE",
      },
      gridTemplateColumns: {
        "filter-list": "1fr 4fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
