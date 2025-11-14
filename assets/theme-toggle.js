// Theme toggle functionality
(function() {
  // Get theme from localStorage or default to dark
  function getTheme() {
    return localStorage.getItem('theme') || 'dark';
  }

  // Set theme
  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  }

  // Initialize theme on page load (before page renders to prevent flash)
  setTheme(getTheme());

  // Expose toggle function globally
  window.toggleTheme = function() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Expose getTheme function globally
  window.getTheme = getTheme;
})();

