module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0052CC', // Jet Blue
        secondary: '#FF6B35', // Jet Orange
        accent: '#10B981', // Jet Green
        navy: '#0F172A',
        slate: '#334155',
        light: '#E2E8F0',
        bgLight: '#F8FAFC',
        bgBlueTint: '#EFF6FF',
        jetBlue: '#0052CC',
        jetOrange: '#FF6B35',
        jetGreen: '#10B981',
        'jet-blue': '#0052CC',
        'jet-orange': '#FF6B35',
        'jet-green': '#10B981',
        jet: {
          blue: '#0052CC',
          orange: '#FF6B35',
          green: '#10B981',
          navy: '#0F172A',
          slate: '#1E293B',
          gray: '#64748B',
          light: '#E2E8F0',
          white: '#F8FAFC',
        },
        slate: {
          850: '#1e293b',
          900: '#0f172a',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0052CC 0%, #003D99 50%, #0052CC 100%)',
        'hero-pattern':
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      },
      boxShadow: {
        neumorphic: '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateX(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateX(0)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        cursorMove: {
          '0%, 100%': { transform: 'translate(60%, 60%)', opacity: '1' },
          '50%': { transform: 'translate(70%, 40%)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
