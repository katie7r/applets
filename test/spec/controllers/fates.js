'use strict';

describe('Controller: FatesCtrl', function () {

  // load the controller's module
  beforeEach(module('appletsApp'));

  var FatesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FatesCtrl = $controller('FatesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FatesCtrl.awesomeThings.length).toBe(3);
  });
});
