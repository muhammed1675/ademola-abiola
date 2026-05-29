
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#f6f9f7',
          secondary: '#edf4ef',
          card: '#ffffff',
        },
        text: {
          primary: '#0f1a13',
          secondary: '#4d6557',
        },
        accent: {
          DEFAULT: '#27ae60',
          dark: '#1e8448',
          light: '#52c981',
        },
        edge: '#d1e0d7',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
