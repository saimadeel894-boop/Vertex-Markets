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
          card:    '#0d0d0d',
          primary: '#2563eb',
          muted:   '#9ca3af',
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
