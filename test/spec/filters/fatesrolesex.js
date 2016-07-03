'use strict';

describe('Filter: fatesRoleSex', function () {

  // load the filter's module
  beforeEach(module('appletsApp'));

  // initialize a new instance of the filter before each test
  var fatesRoleSex;
  beforeEach(inject(function ($filter) {
    fatesRoleSex = $filter('fatesRoleSex');
  }));

  it('should return the input prefixed with "fatesRoleSex filter:"', function () {
    var text = 'angularjs';
    expect(fatesRoleSex(text)).toBe('fatesRoleSex filter: ' + text);
  });

});
