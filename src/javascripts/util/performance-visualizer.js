class PerformanceVisualizer {

  constructor(_window = {}) {
    if (_window.performance) {
      let
        t = _window.performance.timing,
        loadEl = _window.document.querySelector('.app-performance-load .app-performance-bubble-value'),
        domEl = _window.document.querySelector('.app-performance-dom .app-performance-bubble-value');

      if (loadEl) {
        let delta = t.responseEnd - t.responseStart;
        loadEl.innerText = delta > 0 ? delta : 0;
      }

      if (domEl) {
        let delta = t.domInteractive - t.domLoading;
        domEl.innerText = delta > 0 ? delta : 0;
      }
    }
  }

}

export default PerformanceVisualizer;
