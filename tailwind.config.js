/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: '#0284C7',
          crimson: '#E11D2E',
          emerald: '#10B981',
          ink: '#0B1B2B',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        glass: '0 24px 60px -28px rgba(7, 46, 73, 0.32)',
        lift: '0 18px 40px -20px rgba(2, 132, 199, 0.45)',
        fab: '0 18px 45px -12px rgba(16, 185, 129, 0.6)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' },
        },
      },
      animation: {
        breathe: 'breathe 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
