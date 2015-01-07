/*global describe, it */
'use strict';
var assert = require('assert');
var sequential = require('../');

describe('sequential-search node module', function () {
  it('should hit array values in given length', function() {
    assert.deepEqual(sequential([2, 4, 3, 6, 7, 8], 3), 2);
    assert.deepEqual(sequential([2, 4, 3, 6, 7, 8], 7), 4);
    assert.deepEqual(sequential([2, 4, 3, 6, 7, 8], 4), 1);
  });

  it('should work with arrays with 2 elements', function() {
    assert.deepEqual(sequential([1, 2], 2), 1);
    assert.deepEqual(sequential([1, 2], 1), 0);
  });

  it('should return -1 for missing elements', function() {
    assert.deepEqual(sequential([1, 2, 3], 4), -1);
    assert.deepEqual(sequential([1, 2, 3], 5), -1);
  });

  it('should work in empty arrays', function(){
    assert.deepEqual(sequential([], 4), -1);
  });
});
