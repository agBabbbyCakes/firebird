// Tailwind CDN configuration (must be defined before the script below)
window.tailwind = window.tailwind || {};
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#00FFFF'
      },
      boxShadow: {
        'accent-soft': '0 0 0 1px rgba(0,255,255,0.25), 0 0 24px rgba(0,255,255,0.18)',
        'accent-strong': '0 0 0 1px rgba(0,255,255,0.35), 0 0 48px rgba(0,255,255,0.3)'
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(to bottom, rgb(5 5 5), rgb(0 0 0))'
      }
    }
  }
};

