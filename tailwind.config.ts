export default {
   content: [
      './build/*.html',
      './src/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{html,js,ts,jsx,tsx,mdx}',
      './**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            'panel-background-dark': '#121212',
            'background-dark': '#000000',
            primary: '#1DB954',
            'primary-bg': '#ABAEEE',
            'input-bg': '#2a2a2a',
         },
         gridTemplateColumns: {
            'filter-list': '1fr 4fr',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
