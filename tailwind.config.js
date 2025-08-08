/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js, ts, jsx, tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'bg-light': 'var(--color-bg-light)',
        'bg-dark': 'var(--color-bg-dark)',
        'text-light': 'var(--color-text-light)',
        'text-dark': 'var(--color-text-dark)'
      },
      borderRadius: {
        DEFAULT: 'var(--radius-default)'
      },
      fontFamily: {
	      sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
