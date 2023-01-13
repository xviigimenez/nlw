/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
        './index.html',
    ],
  theme: {
      extend: {
          fontFamily: {
              // Segunda fonte serve como reserva caso a primeira não funcione
              sans: ['Inter', 'sans-serif']
          },
          backgroundImage: {
              'galaxy': "url('/background-galaxy.png')",
              'nlw-gradient': 'linear-gradient(90deg, rgba(93,169,182,1) 0%, rgba(180,195,66,1) 100%)',
              'game-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 75%)',
          }
          
      },
  },
  plugins: [],
}
