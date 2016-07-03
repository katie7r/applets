'use strict';

describe('Service: fates', function () {

  // load the service's module
  beforeEach(module('appletsApp'));

  // instantiate service
  var fates;
  beforeEach(inject(function (_fates_) {
    fates = _fates_;
  }));

  it('should do something', function () {
    expect(!!fates).toBe(true);
  });

});
