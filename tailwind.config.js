/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2, 12, 27, 0.7)',
        'dark-slate': '#495670',
        'slate': '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'white': '#e6f1ff',
        'green': '#64ffda',
        'green-tint': 'rgba(100, 255, 218, 0.1)',
      },
      fontFamily: {
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
        sans: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}