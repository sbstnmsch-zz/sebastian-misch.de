import test from 'tape';
import nightWatch from './night-watch';
import WindowMock from 'window-mock';
import { name } from '../../../package.json';

test(`${name}: night watch feature`, (t) => {
  const
    windowMock = new WindowMock();

  windowMock.document.body.classList._value = [];
  nightWatch(windowMock, 7);
  t.equal(windowMock.document.body.classList._value.toString(), 'u-night',
    'should be in night mode at 7 o`clock');

  windowMock.document.body.classList._value = [];
  nightWatch(windowMock, 8);
  t.equal(windowMock.document.body.classList._value.toString(), '',
    'should be in day mode at 8 o`clock');

  windowMock.document.body.classList._value = [];
  nightWatch(windowMock, 17);
  t.equal(windowMock.document.body.classList._value.toString(), '',
    'should be in day mode at 17 o`clock');

  windowMock.document.body.classList._value = [];
  nightWatch(windowMock, 18);
  t.equal(windowMock.document.body.classList._value.toString(), 'u-night',
    'should be in night mode at 18 o`clock');

  t.end();
});
