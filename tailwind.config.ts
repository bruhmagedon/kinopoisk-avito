export default {
  content: [
    "./build/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
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
