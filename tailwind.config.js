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
          card:    '#0a0a0a',
          primary: '#1456ff',
          muted:   '#a1a1aa',
          subtle:  '#71717a',
          silver:  '#e5e7eb',
        },
        positive: '#10b981',
        negative: '#ef4444',
      },
      borderColor: {
        DEFAULT: 'rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}
