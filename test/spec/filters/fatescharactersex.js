'use strict';

describe('Filter: fatesCharacterSex', function () {

  // load the filter's module
  beforeEach(module('appletsApp'));

  // initialize a new instance of the filter before each test
  var fatesCharacterSex;
  beforeEach(inject(function ($filter) {
    fatesCharacterSex = $filter('fatesCharacterSex');
  }));

  it('should return the input prefixed with "fatesCharacterSex filter:"', function () {
    var text = 'angularjs';
    expect(fatesCharacterSex(text)).toBe('fatesCharacterSex filter: ' + text);
  });

});
