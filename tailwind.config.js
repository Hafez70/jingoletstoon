module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto-Normal', 'sans-serif'],
      'roboto-bold': ['Roboto-Bold', 'sans-serif'],
      'roboto-thin': ['Roboto-Thin', 'sans-serif'],
    },
    extend: {
      colors:{
        'btnEnter' : '#2BD292',
        'btn-accent' : '#20AFFF',
        'card' : '#39495B'
      },
    },
  },
  plugins: [],
}