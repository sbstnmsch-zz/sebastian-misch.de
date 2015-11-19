import test from 'tape';
import './app';
import {name} from '../../package.json';

test(`${name}: app`, (t) => {
  t.ok('Implement some tests here');

  t.end();
});
