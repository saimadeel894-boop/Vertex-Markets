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
          bg:           '#000000',
          nearBlack:    '#050505',
          section:      '#000000',
          card:         '#0a0a0a',
          cardElevated: '#111114',
          primary:      '#1e6fff',
          primaryHover: '#2f7bff',
          primaryDeep:  '#1357d6',
          muted:        '#a8a8ad',
          subtle:       '#6e6e73',
          silver:       '#c8c8cc',
          borderDark:   '#1a1a1d',
          borderMid:    '#26262a',
          pill:         '#0e0e10',
        },
        positive: '#1e6fff',
        negative: '#e0454a',
        chart: {
          up:   '#3b82f6',
          down: '#7a7a80',
        }
      },
      borderColor: {
        DEFAULT: '#1a1a1d',
      },
    },
  },
  plugins: [],
}
