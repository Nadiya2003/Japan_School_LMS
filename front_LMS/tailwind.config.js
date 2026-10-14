/** @type {import('tailwindcss').Config} */
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // World Lanka Brand Palette
        wlNavy: {
          DEFAULT: '#151b54',
          50: '#f0f3fa',
          100: '#dce2f4',
          200: '#bdc9eb',
          500: '#202b78',
          900: '#151b54',
          dark: '#0a0e2a',
        },
        wlRed: {
          DEFAULT: '#cd2127',
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#dc2626',
          600: '#cd2127',
          700: '#b91c1c',
        },
        // Dark-mode-ready tokens driven by CSS variables (see index.css)
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        brand: {
          DEFAULT: '#151b54',
          50: '#EFF5FF',
          100: '#DBE8FE',
          200: '#BFD5FE',
          300: '#93B8FD',
          400: '#3B82F6',
          500: '#151b54',
          600: '#1D4FD8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172B6B',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans Sinhala"', '"Noto Sans JP"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        jp: ['"Noto Sans JP"', '"Noto Serif JP"', 'sans-serif'],
        sinhala: ['"Noto Sans Sinhala"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
        lift: '0 12px 40px rgba(15,23,42,0.10)',
        glow: '0 10px 40px rgba(37,99,235,0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.6s infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
    },
  },
  plugins: [],
}
