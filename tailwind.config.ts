export default {
  content: ["./build/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2-fixed": "425px 650px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
