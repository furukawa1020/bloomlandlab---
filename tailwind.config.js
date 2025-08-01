/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fffe',
          100: '#ccfffe',
          200: '#9ffffe',
          300: '#5cfefd',
          400: '#3FB5AC', // 湧水ターコイズ
          500: '#2d8a83',
          600: '#266f6a',
          700: '#245856',
          800: '#244746',
          900: '#223b3c',
        },
        secondary: {
          50: '#f4fef1',
          100: '#e6fde0',
          200: '#cefbc2',
          300: '#A3D977', // 若葉グリーン
          400: '#82c745',
          500: '#69ad37',
          600: '#528b29',
          700: '#426d23',
          800: '#395721',
          900: '#32491f',
        },
        accent: {
          50: '#fefbf4',
          100: '#fef6e7',
          200: '#fdebca',
          300: '#fbdaa2',
          400: '#F1C27D', // 暖色アクセント
          500: '#e5a44a',
          600: '#d38a3f',
          700: '#b06c37',
          800: '#8f5533',
          900: '#74452b',
        }
      },
      animation: {
        'ripple': 'ripple 2s linear infinite',
        'breathing': 'breathing 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
