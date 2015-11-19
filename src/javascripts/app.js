import NightWatch from './util/night-watch';
import PerformanceVisualizer from './util/performance-visualizer';

((window) => {
  /* Enable features */

  new NightWatch(window);
  new PerformanceVisualizer(window);

})();
