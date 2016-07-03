'use strict';

describe('Filter: fatesRoleParallels', function () {

  // load the filter's module
  beforeEach(module('appletsApp'));

  // initialize a new instance of the filter before each test
  var fatesRoleParallels;
  beforeEach(inject(function ($filter) {
    fatesRoleParallels = $filter('fatesRoleParallels');
  }));

  it('should return the input prefixed with "fatesRoleParallels filter:"', function () {
    var text = 'angularjs';
    expect(fatesRoleParallels(text)).toBe('fatesRoleParallels filter: ' + text);
  });

});
