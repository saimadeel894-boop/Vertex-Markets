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
          bg:      '#000000',
          section: '#000000',
          card:    '#050505',
          primary: '#2d60ff',
          muted:   '#e5e7eb',
          subtle:  '#a1a1aa',
          silver:  '#f5f5f7',
        },
        positive: '#10b981',
        negative: '#ef4444',
      },
      borderColor: {
        DEFAULT: 'rgba(255,255,255,0.04)',
      },
    },
  },
  plugins: [],
}
