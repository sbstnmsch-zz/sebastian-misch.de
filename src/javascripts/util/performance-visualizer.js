class PerformanceVisualizer {

  constructor(_window = {}) {
    if (_window.performance) {
      let
        t = _window.performance.timing,
        loadEl = _window.document.querySelector('.app-performance-load .app-performance-bubble-value'),
        domEl = _window.document.querySelector('.app-performance-dom .app-performance-bubble-value');

      if (loadEl) {
        loadEl.innerText = t.loadEventEnd - t.responseEnd;
      }

      if (domEl) {
        domEl.innerText = t.domInteractive - t.domLoading;
      }
    }
  }

}

export default PerformanceVisualizer;
