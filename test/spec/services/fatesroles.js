'use strict';

describe('Service: fatesRoles', function () {

  // load the service's module
  beforeEach(module('appletsApp'));

  // instantiate service
  var fatesRoles;
  beforeEach(inject(function (_fatesRoles_) {
    fatesRoles = _fatesRoles_;
  }));

  it('should do something', function () {
    expect(!!fatesRoles).toBe(true);
  });

});
