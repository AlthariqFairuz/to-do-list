/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'comic-neue': ["Roboto", "sans-serif"],
      },
      colors:{
        'background' : '#79AC78',
        'button' : '#DFA878',
        'todos' :'#F9E0BB',
        'todos-hover' : '#884A39'
      },
      boxShadow:{
        'custom': '0 0 0 200vmax rgba(0, 0, 0, 0.8);'
      },
      backgroundImage: {
        'custom-radial': "radial-gradient(#ffffff 2px, transparent 2px), radial-gradient(#ffffff 2px, #79AC78 2px)",
      },
      backgroundSize: {
        'custom-size': '80px 80px',
      },
      backgroundPosition: {
        'custom-position': '0 0, 40px 40px',
      },
      opacity: {
        '100': '1',
      },
    },
  },
  plugins: [],
}

