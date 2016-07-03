'use strict';

describe('Service: fatesCharacters', function () {

  // load the service's module
  beforeEach(module('appletsApp'));

  // instantiate service
  var fatesCharacters;
  beforeEach(inject(function (_fatesCharacters_) {
    fatesCharacters = _fatesCharacters_;
  }));

  it('should do something', function () {
    expect(!!fatesCharacters).toBe(true);
  });

});
