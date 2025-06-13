/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
         mono: ['"Share Tech Mono"', 'monospace'],
      },
      keyframes: {
        pulseGlow: {
    '0%, 100%': { transform: 'scale(1)', opacity: 1 },
    '50%': { transform: 'scale(1.3)', opacity: 0.6 },
  },

        terminal: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        },
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '32ch' },
        },
        neonGlow: {
          '0%, 100%': {
            textShadow: `
              0 0 5px #3b82f6,
              0 0 10px #3b82f6,
              0 0 20px #3b82f6,
              0 0 40px #60a5fa,
              0 0 80px #60a5fa
            `,
          },
          '50%': {
            textShadow: `
              0 0 10px #3b82f6,
              0 0 20px #3b82f6,
              0 0 40px #60a5fa,
              0 0 80px #93c5fd,
              0 0 100px #bfdbfe
            `,
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        typewriter: 'typewriter 4s steps(32) 1 forwards',
        'neon-glow': 'neonGlow 2s ease-in-out infinite',
        'terminal': 'terminal 0.8s ease-out both',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
