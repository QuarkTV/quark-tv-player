/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './theme.config.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#9147ff',
        'brand-dark': '#772ce8',
        'background': '#0e0e10',
        'surface': '#1f1f23',
        'text': '#efeff1'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
} 