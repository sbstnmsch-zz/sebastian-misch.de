import nightWatch from './util/night-watch';
import performanceVisualizer from './util/performance-visualizer';
import mediaPreview from './util/media-preview';

(() => {
  /* Enable features */

  nightWatch(window);
  performanceVisualizer(window);
  mediaPreview(window);
})();
