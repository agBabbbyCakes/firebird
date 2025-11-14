// Expert-level performance optimizations
(function() {
  'use strict';

  // Lazy load images with Intersection Observer
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px'
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Lazy load sections with Intersection Observer
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Load Alpine.js data when section comes into view
        if (entry.target.hasAttribute('x-data') && !entry.target.hasAttribute('data-loaded')) {
          entry.target.setAttribute('data-loaded', 'true');
        }
      }
    });
  }, {
    rootMargin: '100px',
    threshold: 0.1
  });

  // Observe sections for lazy loading
  document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
  });

  // Defer non-critical animations until page is interactive
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      document.body.classList.add('animations-ready');
    }, { timeout: 2000 });
  } else {
    setTimeout(() => {
      document.body.classList.add('animations-ready');
    }, 100);
  }

  // Preload critical resources
  const preloadLink = document.createElement('link');
  preloadLink.rel = 'preload';
  preloadLink.as = 'style';
  preloadLink.href = '/assets/styles.css';
  document.head.appendChild(preloadLink);

  // Mobile-specific optimizations
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-duration', '2s');
    
    // Disable expensive effects on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      document.documentElement.classList.add('low-performance');
    }
  }

  // Optimize scroll performance
  let ticking = false;
  function updateOnScroll() {
    // Batch scroll updates
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }, { passive: true });

  // Prefetch next page on hover
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('mouseenter', function() {
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = this.href;
      document.head.appendChild(prefetchLink);
    }, { once: true });
  });
})();

