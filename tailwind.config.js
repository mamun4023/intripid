

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary' : '#F47F22',
      'primaryDark' : '#E46B0B',
      'secondary' : '#E4E5FF',
      'bgLight' : '#F8F9FB',
      'white' : '#FFFFFF',
      'fontColor' : '#31374A',
      'lebelFontColor' : '#9E9E9E',
      'inputBg' : '#F8F9FB',
      'inputBorder' : '#E0E0E0',
      'info' : '#7E41E0',
      'error' : '#FF5E67',
      'footerBg' : '#F9FCFF',
      'borderColor' : '#eee'
      
    },
    extend: {
       fontFamily: {
        readex_bold: ["readex_bold", "sans-serif"],
        readex_light: ["readex_light", "sans-serif"],
        readex_medium: ["readex_medium", "sans-serif"],
        sans_regular: ["sans_regular", "sans-serif"],
        sans_medium: ["sans_medium", "sans-serif"],
        sans_bold: ["sans_bold", "sans-serif"],
       },
       spacing: {
        '100' : '25rem',
        '110' : '28rem',
        '128':  '32rem',
        '136' : '34rem',
        '140' : '40rem',
        '150' : '50rem',
        '160' : '55rem',
        '165' : '58rem',
        '170' : '60rem',
        '175' : '65rem',
        '180' : '70rem',
        '190' : '80rem',
        '200' : '100rem'


      }
    },
  },
  plugins: [],
}