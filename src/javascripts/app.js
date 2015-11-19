import NightWatch from './util/night-watch';
import PerformanceVisualizer from './util/performance-visualizer';

(() => {
  /* Enable features */

  new NightWatch(window);
  new PerformanceVisualizer(window);

})();
