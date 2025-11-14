// Alpine.js helper functions - optimized for performance
function ecosystem() {
  return {
    products: [],
    async load() {
      // Use requestIdleCallback for non-critical loading
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => this.fetchProducts(), { timeout: 2000 });
      } else {
        setTimeout(() => this.fetchProducts(), 100);
      }
    },
    async fetchProducts() {
      try {
        const res = await fetch('products.json', { cache: 'default' });
        if (!res.ok) throw new Error('Failed to load products.json');
        this.products = await res.json();
      } catch (e) {
        console.error(e);
        this.products = [];
      }
    },
    statusText(status) {
      if (status === 'active') return 'Active';
      if (status === 'in-dev') return 'In Development';
      if (status === 'coming-soon') return 'Coming Soon';
      return status;
    },
    firstSentence(text) {
      if (!text) return '';
      const m = String(text).match(/(.+?[.!?])(\s|$)/);
      return m ? m[1] : text;
    },
  };
}

function stack() {
  return {
    ordered: [
      { name: 'Ape Framework', slug: 'framework' },
      { name: 'Silverback', slug: 'silverback' },
      { name: 'ChaosNet', slug: 'chaosnet' },
      { name: 'ApePay', slug: 'apepay' },
      { name: 'Academy', slug: 'academy' }
    ]
  };
}

