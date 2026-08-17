/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d4ff',
          cyan: '#00ffff',
          glow: '#0099cc',
        },
        gold: {
          DEFAULT: '#d4a017',
          light: '#f0c040',
          bright: '#ffd700',
        },
        dark: {
          DEFAULT: '#050810',
          card: '#0a0f1e',
          glass: 'rgba(10,15,30,0.7)',
          border: 'rgba(0,212,255,0.15)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'particle': 'particle 15s linear infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'counter': 'counter 2s ease-out forwards',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.7), 0 0 80px rgba(0,212,255,0.3)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(0,212,255,0.3)' },
          '50%': { borderColor: 'rgba(0,212,255,0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) rotate(720deg)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
