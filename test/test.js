'use strict';

const test = require('tape');
// import addNum from '../public/index';

const addNum = (a, b) => {
  return a + b;
};

test('add 2 numbers', t => {
  const actual = addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('deep equality', t => {
  t.plan(2);

  t.deepEqual([3, 4, 5], [3, 4, 2 + 3]);
  t.deepEqual({ a: 7, b: [8, 9] }, { a: 3 + 4, b: [4 * 2].concat(3 * 3) });
});

test('comparing booleans', t => {
  t.plan(1);

  t.ok(3 > 4 || 5 > 2);
});

test('negatives', function (t) {
  t.plan(3);
  t.notEqual(1 + 2, 5);
  t.notDeepEqual([1, 2], [12]);
  t.notOk(false);
});

test('empty map', function (t) {
  [].map(function (x) {
    t.fail('this callback should never fire');
  });

  t.end();
});

test('map with elements', function (t) {
  t.plan(2);

  [2, 3].map(function (x) {
    t.pass();
  });
});
