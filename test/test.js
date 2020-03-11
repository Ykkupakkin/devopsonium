'use strict';

import * as test from 'tape';
import addNum from '../public/index';

test('add 2 numbers', t => {
  const actual = addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});
