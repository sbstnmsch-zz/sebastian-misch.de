import test from 'tape';
import mediaPreview from './media-preview';
import { name } from '../../../package.json';

test(`${name}: media preview feature`, (t) => {
  const
    cache = {
      '.app-vitae-list-item': [{}],
      '.app-vitae-list-item-media': [{}]
    },
    windowMock = {
      document: {
        querySelectorAll: elem => cache[elem]
      }
    };

  mediaPreview(windowMock);
  t.equal(cache['.app-vitae-list-item-media'][0].title,
    'Click or touch to toggle media',
    'set title');
  t.equal(typeof cache['.app-vitae-list-item-media'][0].onclick,
    'function',
    'add onlick handler');

  t.end();
});
