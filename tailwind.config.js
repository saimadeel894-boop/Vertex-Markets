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
        background: 'var(--background)',
        'background-elevated': 'var(--background-elevated)',
        card: 'var(--card)',
        'card-elevated': 'var(--card-elevated)',
        pill: 'var(--pill)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        'border-hover': 'var(--border-hover)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-silver': 'var(--text-silver)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          pressed: 'var(--primary-pressed)',
          foreground: 'var(--primary-foreground)',
          glow: 'var(--primary-glow)',
        },
        positive: 'var(--positive)',
        negative: 'var(--negative)',
        chart: {
          up: 'var(--chart-up)',
          down: 'var(--chart-down)',
        },
        glass: {
          bg: 'var(--glass-bg)',
          border: 'var(--glass-border)',
        },
        ring: {
          subtle: 'var(--ring-subtle)',
        },
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'glow-primary': 'var(--shadow-glow-primary)',
      },
    },
  },
  plugins: [],
}
