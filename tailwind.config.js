/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blue-850':'#102e5a',
        'teal-650':'#00d6a2'
      },
      fontFamily: {
      'mono': ['JetBrains Mono']
    },
    spacing:{
      '183':'183px',
      '75':'300px',
      '58':'230px'
    }
    },
  },
  plugins: [],
}

