/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blue-850':'#102e5a',
        'teal-855':'#105a5a',
        'teal-650':'#00d6a2',
        'gray-450':'#8491a0',
        'gray-1d9':'#d9d9d9'
      },
      fontFamily: {
      'mono': ['JetBrains Mono']
    },
    spacing:{
      '183':'183px',
      '75':'300px',
      '58':'230px',
      '4-5':'18px'
    }
    },
  },
  plugins: [],
}

