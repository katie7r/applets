'use strict';

describe('Controller: BricklyCtrl', function () {

  // load the controller's module
  beforeEach(module('appletsApp'));

  var BricklyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BricklyCtrl = $controller('BricklyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BricklyCtrl.awesomeThings.length).toBe(3);
  });
});
