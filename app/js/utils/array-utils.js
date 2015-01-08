'use strict';

var ArrayUtils = {
  // groupBy: Array<Object> * String -> Object<String, Array<Object>>
  groupBy: function(arr, key) {
    var result = {};

    arr.forEach(function(currentValue, index, array) {
      var hashKey = currentValue[key];

      if (hashKey in result) {
        result[hashKey].push(currentValue);
      } else {
        result[hashKey] = [currentValue];
      }
    });


    return result;
  }
};

module.exports = ArrayUtils;
