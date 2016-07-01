import test from 'tape';
import performanceVisualizer from './performance-visualizer';
import { name } from '../../../package.json';

test(`${name}: performance visualizer feature`, (t) => {
  const
    cache = {
      '.app-performance-load .app-performance-bubble-value': {
        innerText: ''
      },
      '.app-performance-dom .app-performance-bubble-value': {
        innerText: ''
      }
    },
    windowMock = {
      document: {
        querySelector: elem => cache[elem]
      },
      performance: {
        timing: {
          responseStart: 5,
          responseEnd: 12,
          domLoading: 15,
          domInteractive: 24
        }
      }
    };

  performanceVisualizer(windowMock);
  t.equal(cache['.app-performance-load .app-performance-bubble-value'].innerText, 7,
    'calculate delta for load');
  t.equal(cache['.app-performance-dom .app-performance-bubble-value'].innerText, 9,
    'calculate delta for dom');

  windowMock.performance.timing.responseStart = 13;
  windowMock.performance.timing.domLoading = 25;
  performanceVisualizer(windowMock);
  t.equal(cache['.app-performance-load .app-performance-bubble-value'].innerText, 0,
    'calculate 0 delta for load when errored');
  t.equal(cache['.app-performance-dom .app-performance-bubble-value'].innerText, 0,
    'calculate 0 delta for dom when errored');


  cache['.app-performance-load .app-performance-bubble-value'].innerText = -1;
  cache['.app-performance-dom .app-performance-bubble-value'].innerText = -1;
  windowMock.performance = null;
  performanceVisualizer(windowMock);
  t.equal(cache['.app-performance-load .app-performance-bubble-value'].innerText, -1,
    'do nothing for load if performance api unavailable');
  t.equal(cache['.app-performance-dom .app-performance-bubble-value'].innerText, -1,
    'do nothing for dom if performance api unavailable');

  t.end();
});
