var expect = require('expect.js');
var ArrayUtils = require('../../app/js/utils/array-utils');

describe('ArrayUtils', function() {
  describe('#groupBy', function() {
    describe('for keys that exist', function() {
      describe('in a non-empty list', function() {
        it('should properly group them', function() {
          var inputList = [
              { 'key': 5 },
              { 'key': 4 },
              { 'key': 5 },
              { 'key': 3 },
              { 'key': 2 },
            ];

          var expectedResult = {
            5: [ { 'key': 5 }, { 'key': 5} ],
            4: [ { 'key': 4 } ],
            3: [ { 'key': 3 } ],
            2: [ { 'key': 2 } ],
          };

          var actualResult = ArrayUtils.groupBy(inputList, 'key');

          expect(actualResult).to.eql(expectedResult);
        });
      });
    });

    describe('for keys that don\'t exist', function() {
      it('should group them as `undefined`', function() {
        var inputList = [
            { 'key': 5 },
            { 'key': 4 },
            { 'key': 5 },
            { 'key': 3 },
            { 'key': 2 },
          ];

        var expectedResult = {
          undefined: inputList
        };

        var actualResult = ArrayUtils.groupBy(inputList, 'doesnt_exist');

        expect(actualResult).to.eql(expectedResult);
      });
    });

    describe('for an empty input list', function() {
      it('should return an empty object', function() {
        var inputList = [];
        var expectedResult = {};
        var actualResult = ArrayUtils.groupBy(inputList, 'doesnt_matter');

        expect(actualResult).to.eql(expectedResult);
      });
    });
  });
});
