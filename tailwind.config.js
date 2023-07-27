/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: '320px',
        tablet:'600px',
        laptop: '1200px',
        desktop: '1535px',
      },
      colors: {
        'title':'#18b6b9',
        'leaf': '#84cf6a',
        'mist': '#d8d8d8',
        'midnight': '#39495c',
      },
      backgroundImage:{
        'bg': "url('/img/merit.png')",
      },
      animation: {
        'spin-slow' : 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes:{
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [],
}

