module.exports = {
  
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/views/home.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': {'max': '639px'},
      'sm': {'min': '640px','max': '867px'},
      'minimd': {'min': '868px', 'max': '1004px'},
      'md': {'min': '868px', 'max': '1185px'},
      'lg': {'min': '1186px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      spacing: {

       
       '80': '32rem',
       '70': '28rem',
       '56': '22rem',
       '36': '18.8rem',
       '28': '13.5rem',
       '20': '9.1rem',
       '12': '7.7rem',
       

       
      }
    }
  },
  variants: {
    extend: {},
  },

  plugins: [
    require('daisyui'),
  ],
}
