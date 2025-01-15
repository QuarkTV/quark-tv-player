/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './theme.config.jsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#9147ff',
          50: '#f5f0ff',
          100: '#ebe0ff',
          200: '#d9c2ff',
          300: '#c7a4ff',
          400: '#b585ff',
          500: '#9147ff',
          600: '#8a2be2',
          700: '#7722bd',
          800: '#641b98',
          900: '#51167a'
        },
        surface: {
          DEFAULT: '#18181b',
          50: '#27272a',
          100: '#3f3f46',
          200: '#52525b',
          300: '#71717a',
          400: '#a1a1aa',
          500: '#d4d4d8',
          600: '#e4e4e7',
          700: '#f4f4f5',
          800: '#fafafa',
          900: '#ffffff'
        },
        text: {
          DEFAULT: '#ffffff',
          secondary: '#a1a1aa'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.DEFAULT'),
            a: {
              color: theme('colors.brand.DEFAULT'),
              '&:hover': {
                color: theme('colors.brand.400')
              }
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.text.DEFAULT')
            },
            strong: {
              color: theme('colors.text.DEFAULT')
            },
            code: {
              color: theme('colors.brand.400')
            },
            pre: {
              backgroundColor: theme('colors.surface.DEFAULT')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')
  ]
} 