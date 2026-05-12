/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          bg:      '#080a0e',
          section: '#0d1017',
          card:    '#111520',
          primary: '#2563eb',
          muted:   '#a0aab8',
          subtle:  '#6b7585',
        },
        positive: '#22c55e',
        negative: '#ef4444',
      },
      borderColor: {
        DEFAULT: 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
