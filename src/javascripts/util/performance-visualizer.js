const
  performanceVisualizer = (_window = {}) => {
    if (_window.performance) {
      const
        t = _window.performance.timing,
        loadEl = _window.document.querySelector(
          '.app-performance-load .app-performance-bubble-value'),
        domEl = _window.document.querySelector(
          '.app-performance-dom .app-performance-bubble-value');
      let delta = 0;

      if (loadEl) {
        delta = t.responseEnd - t.responseStart;
        loadEl.innerText = delta > 0 ? delta : 0;
      }

      if (domEl) {
        delta = t.domInteractive - t.domLoading;
        domEl.innerText = delta > 0 ? delta : 0;
      }
    }
  };
export default performanceVisualizer;
