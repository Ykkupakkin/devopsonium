'use strict';

const test = require('tape');
//import addNum from '../public/index';

const addNum = (a, b) => {
  return a + b;
};

test('add 2 numbers', t => {
  const actual = addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});
