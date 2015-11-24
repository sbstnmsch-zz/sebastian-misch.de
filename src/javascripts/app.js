import NightWatch from './util/night-watch';
import PerformanceVisualizer from './util/performance-visualizer';
import MediaPreview from './util/media-preview';

(() => {
  /* Enable features */

  new NightWatch(window);
  new PerformanceVisualizer(window);
  new MediaPreview(window);

})();
