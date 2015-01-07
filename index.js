'use strict';

/**
 * Sequential Search. Return '-1' if not found.
 * @param {list} Set of data to find index on
 * @param {key} Value to compare to get index
 */
function sequentialSearch(list, key, size) {
  var count = 0;
  while(count < size) {
    if(list[count] === key) {
      return count;
    }
    count++;
  }

  return -1;
}

module.exports = function (list, key) {
  return sequentialSearch(list, key, list.length);
};
