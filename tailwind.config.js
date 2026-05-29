
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#f6f9f7',
        'bg-secondary': '#edf4ef',
        'bg-card': '#ffffff',
        'text-primary': '#0f1a13',
        'text-secondary': '#4d6557',
        accent: '#27ae60',
        'accent-dark': '#1e8448',
        'accent-light': '#52c981',
        'border-color': '#d1e0d7',
      },
      fontFamily: {
        heading: ["'Playfair Display'", 'Georgia', 'serif'],
        body: ["'DM Sans'", 'sans-serif'],
      },
    },
  },
}
