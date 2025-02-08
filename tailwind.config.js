module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.2' },
        },
      },
      colors: {
        'purple': {
          950: '#2D0A4D',
        },
      },
    },
  },
  plugins: [],
} 